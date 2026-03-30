import { Router } from "express";
import * as authController from "../controlers/auth.controler.js"
const authRouter = Router()

// POST : /api/auth/register
authRouter.post("/register", authController.register)

// Get /api/auth/get-me

authRouter.get("/get-me", authController.getMe)

authRouter.get("/refresh-token", authController.refreshToken)

export default authRouter