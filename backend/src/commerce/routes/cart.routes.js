import {Router} from "express"
import { createCart, fetchCarts, removeCart } from "../controllers/cart.controllers.js"
import authMiddleware from "../../authMiddleware/authMiddleware.js"

const cartRouter = Router()

cartRouter.post("/:userId",authMiddleware, createCart)
cartRouter.get("/:userId", authMiddleware, fetchCarts)
cartRouter.delete("/:userId/:productId", authMiddleware, removeCart)

export default cartRouter