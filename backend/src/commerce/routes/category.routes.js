import {Router} from "express"
import { createCategory, fetchCategory, fetchCategoryById, removeCategory, updateCategory } from "../controllers/category.controllers.js"
import authMiddleware from "../../authMiddleware/authMiddleware.js"

const categoryRouter = Router()

categoryRouter.post("/", authMiddleware, createCategory )
categoryRouter.get("/", authMiddleware, fetchCategory )
categoryRouter.get("/:id", authMiddleware, fetchCategoryById )
categoryRouter.put("/:id", authMiddleware,  updateCategory )
categoryRouter.delete("/:id", authMiddleware, removeCategory )

export default categoryRouter