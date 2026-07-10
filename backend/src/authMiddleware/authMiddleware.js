import jwt from "jsonwebtoken"
import config from "../config/config.js"
import userModel from "../auth/models/user.model.js"

const authMiddleware = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(401).json({
                success: false,
                status: 401,
                message: "UnAuthorized user"
            })
        }

        const decode = jwt.verify(token, config.JWT_SECRET)

        if(!decode){
            return res.status(401).json({
                success:false,
                status: 401,
                message: "UnAuthorized user - Invalid token"

            })
        }

        const user = await userModel.findById({_id: decode.id})

        if(!user){
            return res.status(404).json({
                success: false,
                status: 404,
                message: "User not Found - UnAuthorized"
            })
        }

        req.uesr = user;
        next()
    }catch(error){
        return res.status(500).json({
            success: false,
            status: 500,
            message: "Internal Server Error"
        })
    }
}

export default authMiddleware