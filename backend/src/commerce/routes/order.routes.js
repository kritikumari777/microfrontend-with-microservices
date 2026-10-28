import { Router } from "express";

import {
    createOrder,
    fetchOrder,
    fetchOrderById,
    fetchOrderList,
    totalOrder,
    totalSales,
    updateOrder
} from "../controllers/order.controllers.js";

const orderRouter = Router();

// Customer
orderRouter.post("/", createOrder);
orderRouter.get("/", fetchOrder);

// Admin
orderRouter.get("/orderList", fetchOrderList);
orderRouter.get("/totalSales", totalSales);
orderRouter.get("/totalOrder", totalOrder);

// Customer order detail
orderRouter.get("/:id", fetchOrderById);

// Admin update
orderRouter.patch("/:id", updateOrder);

export default orderRouter;