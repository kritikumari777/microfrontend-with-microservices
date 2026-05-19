import { Router } from "express";
import { createOrder, deleteOrder, fetchOrder, fetchOrderById, totalOrder, totalSales, updateOrder } from "../controllers/order.controllers.js";

const orderRouter = Router()

orderRouter.post("/", createOrder)
orderRouter.get("/", fetchOrder)
orderRouter.get("/totalSales", totalSales)
orderRouter.get("/totalOrder", totalOrder)
orderRouter.get("/:id", fetchOrderById)
orderRouter.put("/:id", updateOrder)
orderRouter.delete("/:id", deleteOrder)

export default orderRouter