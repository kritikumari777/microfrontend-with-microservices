import {Router} from "express"
import { createCategory, fetchCategory, fetchCategoryById, removeCategory, updateCategory } from "../controllers/category.controllers.js"

const categoryRouter = Router()

categoryRouter.post("/", createCategory )
categoryRouter.get("/", fetchCategory )
categoryRouter.get("/:id", fetchCategoryById )
categoryRouter.put("/:id", updateCategory )
categoryRouter.delete("/:id", removeCategory )

export default categoryRouter