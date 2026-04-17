import userModel from "../models/user.model.js"
import crypto from "crypto"
import jwt from 'jsonwebtoken'
import config from "../config/config.js"
import sessionModel from "../models/section.model.js"

export async function register(req, res) {
    //geting details from user
    const { username, email, password } = req.body
    // check if its present in db
    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isAlreadyRegistered) { // 409 conflict issue
        res.status(409).json({ message: "Username or email alrady exist" })
    }

    // password store in hase formate using crypto
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")

    // save to database
    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })


    //create a token with jwt
    //  const token = jwt.sign(
    //  {id: user._id}, 
    //  config.JWT_SECRET,
    //  {
    //     expiresIn: "1d"
    //  }
    // )

    const refreshTocken = jwt.sign(
        { id: user._id },
        config.JWT_SECRET,
        { expiresIn: "7d" }
    )

    // create section
    // refreshTocken in Hash
    const refreshTokenHash = crypto.createHash("sha256").update(refreshTocken).digest("hex")

    const session = await sessionModel.create({
        user: user._id,
        refreshTokenHash,
        ip: req.ip,
        userAgent: req.headers["user-agent"]

    })

    const accessToken = jwt.sign(
        {
            id: user._id,
            sessionId: session._id
        },
        config.JWT_SECRET,
        { expiresIn: "15m" }
    )

    // create cookies
    res.cookie("refreshToken", refreshTocken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 day
    })
    res.status(201).json({
        message: "User registered successfully",
        code: 201,
        user: {
            username: user.username,
            email: user.email,
        },
        // token
        accessToken
    })

}

// login api

export async function login(req, res) {

    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password",
            code: 401
        })
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")

    const isPasswordValid = hashedPassword === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    //generate refrane tocken

    const refreshToken = jwt.sign({
        id: user._id
    },
        config.JWT_SECRET,
        { expiresIn: "7d" }
    )

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

    const section = await sessionModel.create({
        user: user._id,
        refreshTokenHash,
        ip: req.ip,
        userAgent: req.headers["user-agent"]
    })


    const accessToken = jwt.sign(
        {
            id: user._id,
            sessionId: section._id
        },
        config.JWT_SECRET,
        { expiresIn: "15m" }
    )

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 1000 // 7d
    })

    res.status(200).json({
        message: "Logged in successfully",
        code: 200,
        user: {
            username: user.username,
            email: user.email,
        },
        accessToken
    })

}
// get user or find user
export async function getMe(req, res) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        throw Error("token not found")
    }

    const decoded = jwt.verify(token, config.JWT_SECRET)

    const user = await userModel.findById(decoded.id)

    res.status(200).json({
        message: "user fetched sucessfully",
        code: 200,
        user: {
            username: user.username,
            email: user.email
        }
    })

}

// get refresh tocken
export async function refreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({
            message: "Refresh token not found",
            code: 401
        })
    }

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET)

    // check to create refrace tocken - revoked: false
    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoked: false
    })

    if (!session) {
        return res.status(401).json({
            message: "Invalid refresh token",
            code: 401
        })
    }

    const accessToken = jwt.sign(
        { id: decoded.id },
        config.JWT_SECRET,
        { expiresIn: "15m" }
    )

    const newRefreshToken = jwt.sign({
        id: decoded.id
    },
        config.JWT_SECRET,
        { expiresIn: '7d' }
    )

    // need to update in db too
    const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex")

    session.refreshTokenHash = newRefreshTokenHash;
    await session.save()

    res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    })

    res.status(200).json({
        message: "Access tocken refreshed sucessfully",
        accessToken
    })
}

export async function logout(req, res) {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return req.status(401).json({
            message: "Refresh token not found"
        })
    }

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoked: false
    })

    if (!session) {
        return res.status(400).json({
            message: "Invalid refresh tocken"
        })
    }

    session.revoked = true
    await session.save()

    res.clearCookie("refreshTocken")

    res.status(200).json({
        message: "Logged out sucessfully",
        code: 200
    })

}

export async function logoutAll(req, res) {
    // check for refresh token

    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(400).json({
            message: "Refresh token not found"
        })
    }

    //jwt check token and decode that 

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET)

    // find in data base 
    await sessionModel.updateMany(
        {
            user: decoded.id,
            revoked: false
        },
        { revoked: true }
    )
    // clear cookie

    res.clearCookie("refreshToken")
    // logout

    res.status(200).json({
        message: "Logged out from all devices sucessfully",
        code: 200
    })
}


