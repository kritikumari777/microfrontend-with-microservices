import {Router} from "express"
import { createCategory } from "../controllers/category.controllers.js"
import authMiddleware from "../../authMiddleware/authMiddleware.js"
import { createSuppiler, deleteSupplier, fetchSuppiler, fetchSupplierById, updateSupplier } from "../controllers/suppiler.controllers.js"

const suppilerRouter = Router()

suppilerRouter.post("/", authMiddleware, createSuppiler)
suppilerRouter.get("/", authMiddleware, fetchSuppiler)
suppilerRouter.get("/suppiler/:id", authMiddleware, fetchSupplierById)
suppilerRouter.put("/:id", authMiddleware, updateSupplier)
suppilerRouter.delete("/:id", authMiddleware, deleteSupplier)

export default suppilerRouter