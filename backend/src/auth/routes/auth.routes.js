import { Router } from "express";
import * as authController from "../controlers/auth.controler.js"
const authRouter = Router()

// POST : /api/auth/register
authRouter.post("/register", authController.register)

export default authRouter