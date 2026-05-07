import {Router} from "express"
import {fetchProduct,fetchProductById, createProduct, updateProduct, deleteProduct, fetchSelectedProduct} from "../controllers/product.controller.js"

const productRouter = Router()

productRouter.post('/', createProduct)
productRouter.get('/', fetchProduct)
productRouter.get('/category/:id', fetchSelectedProduct)
productRouter.get('/:id', fetchProductById)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter