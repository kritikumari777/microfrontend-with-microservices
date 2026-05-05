import productModel from "../models/product.model.js"

const createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body)
        res.status(201).json({
            success: true,
            message: "Product created sucessfullf",
            product
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const fetchProduct = async (req, res) => {
    try {
        const products = await productModel.find()
        res.status(201).json({
            success: true,
            message: "product fetched sucessfully",
            products
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            products
        })
    }
}

const fetchProductById = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)

        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(201).json({
            success: true,
            message: "Product is fetched",
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server Error",
        })
    }
}

const updateProduct = async (req, res) => {
    try {

        const product = await productModel.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(201).json({
            success: true,
            message: "Product updated sucessfully",
            product
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id)

        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not found",
            })
        }

        res.status(201).json({
            success: true,
            message: "Product deleted successfully",
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

export {
    createProduct,
    fetchProduct,
    fetchProductById,
    updateProduct,
    deleteProduct
}