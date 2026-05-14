import { Router } from "express";
import { createOrder, deleteOrder, fetchOrder, fetchOrderById, updateOrder } from "../controllers/order.controllers.js";

const orderRouter = Router()

orderRouter.post("/", createOrder)
orderRouter.get("/", fetchOrder)
orderRouter.get("/:id", fetchOrderById)
orderRouter.put("/:id", updateOrder)
orderRouter.delete("/:id", deleteOrder)

export default orderRouter