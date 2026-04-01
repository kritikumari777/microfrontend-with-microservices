import { Router } from "express";
import * as authController from "../controlers/auth.controler.js"
const authRouter = Router()

// POST : /api/auth/register
authRouter.post("/register", authController.register)
//GET : /api/auth/login

authRouter.post("/login", authController.login)

// Get /api/auth/get-me
authRouter.get("/get-me", authController.getMe)

authRouter.get("/refresh-token", authController.refreshToken)

authRouter.get("/logout", authController.logout)

// GET : /api/auth/logout-all
authRouter.get('/logout-all', authController.logoutAll)

export default authRouter