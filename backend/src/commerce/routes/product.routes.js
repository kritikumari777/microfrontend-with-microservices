import {Router} from "express"
import {fetchProduct,fetchProductById, createProduct, updateProduct, deleteProduct, fetchSelectedProduct} from "../controllers/product.controller.js"
import authMiddleware from "../../authMiddleware/authMiddleware.js"
const productRouter = Router()

productRouter.post('/', authMiddleware, createProduct)
productRouter.get('/', authMiddleware, fetchProduct)
productRouter.get('/category/:id', authMiddleware, fetchSelectedProduct)
productRouter.get('/:id', fetchProductById)
productRouter.put('/:id', authMiddleware, updateProduct)
productRouter.delete('/:id', authMiddleware, deleteProduct)

export default productRouter