import mongoose from "mongoose";
import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

// Add a product or update its quantity
const createCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const { uId, productId, qty, } = req.body
        console.log(uId)
        //validate input
        if (!mongoose.isValidObjectId(productId) || !Number.isInteger(qty) || qty < 1) {
            return res.status(404).json(
                {
                    succuss: false,
                    message: "Valid ProductId and positive integer qty are required",
                }
            )
        }

        // Check whather the product exists

        const product = await productModel.findById(productId)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        //Create a cart item or update the existing item's quantity
        const cartItem = await cartModel.findByIdAndUpdate(
            { userId, productId },
            { $set: { qty } },
            {
                new: true,
                upsert: true,
                runValidators: true
            }
        )

        return res.status(201).json({
            succuss: true,
            message: "Cart updated successfully",
            cartItem
        })

    } catch (err) {
        return res.status(500).json({
            succuss: false,
            message: err.message,
        })
    }
}

const fetchCarts = async (req, res) => {
    try {
        const cartItems = await cartModel.find({ userId: req.user._id }).populate("userId", "username email").populate("productId").select("-__v");

        return res.status(200).json({
            succuss: true,
            message: "cart items fatched successfully",
            cartItems
        })
    } catch (err) {
        return res.status(500).json({
            succuss: false,
            message: "Internal server error"
        })
    }
}

const removeCart = async (req, res) => {
    const userId = req.user._id
    const { productId } = req.params

    try {
        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid product Id"
            })
        }
        const cartItem = await cartModel.findOneAndDelete({ userId, productId })
        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Cart item not found",
            })
        }
        return res.status(200).json({
            succuss: true,
            message: "Item removed successfully",
            cartItem
        })

    } catch (err) {
        return res.status(500).json({
            succuss: false,
            message: "Internal server error"
        })
    }
}

export {
    createCart,
    fetchCarts,
    removeCart
}