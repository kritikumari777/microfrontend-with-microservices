import userModel from "../models/user.model.js"
import crypto from "crypto"
import jwt from 'jsonwebtoken'
import config from "../config/config.js"

export async function register(req , res) {
    //geting details from user
    const {username, email , password} = req.body
    // check if its present in db
    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            {username},
            {email}  
        ]
    })

    if(isAlreadyRegistered){ // 409 conflict issue
       res.status(409).json({message: "Username or email alrady exist"})
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
     const token = jwt.sign(
     {id: user._id}, 
     config.JWT_SECRET,
     {
        expiresIn: "1d"
     }
    )

    console.log("yes")

    res.status(201).json({
        message: "User registered successfully",
        code: 201,
        user:{
            user:{
                username: user.username,
                email:user.email,
            },
            token
        }
    })


}