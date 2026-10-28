import {Router} from "express"
import { createCart, fetchCarts, removeCart } from "../controllers/cart.controllers.js"
import authMiddleware from "../../authMiddleware/authMiddleware.js"

const cartRouter = Router()

cartRouter.post("/",authMiddleware, createCart)
cartRouter.get("/", authMiddleware, fetchCarts)
cartRouter.delete("/:productId", authMiddleware, removeCart)

export default cartRouter