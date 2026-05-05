import {Router} from "express"
import { createCart, fetchCarts, removeCart } from "../controllers/cart.controllers.js"

const cartRouter = Router()

cartRouter.post("/:userId", createCart)
cartRouter.get("/:userId", fetchCarts)
cartRouter.delete("/:userId/:productId", removeCart)

export default cartRouter