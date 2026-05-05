import mongoose from "mongoose";
import cartModel from "../models/cart.model.js";

const createCart = async (req , res) => {
    try{
        req.body.userId = req.params.userId
        const cartItem = await cartModel.create(req.body)

        res.status(201).json({
            succuss: true,
            message: "Product added to card",
            cartItem
        })

    }catch (err) {
        res.status(500).json({
            succuss: false,
            message: err.message,
        })
    }
}

const fetchCarts = async (req, res) => {
    try{
        const cartItems = await cartModel.find({ userId: req.params.userId }).populate("productId");

        res.status(201).json({
            succuss: true,
            message: "cart items fatched successfully",
            cartItems
        })
    }catch(err){
        res.status(500).json({
            succuss: false,
            message: "Internal server error"
        })
    }
}

const removeCart = async (req, res)=>{
    const cardItem = await cartModel.deleteOne({userId: req.params.userId, productId: req.params.productId})
    try{
        res.status(201).json({
            succuss:true,
            message:"Item removed successfully",
            cardItem
        })

    }catch(err){
        res.status(500).json({
            succuss:false,
            message:"Internal server error"
        })
    }
}

export {
    createCart,
    fetchCarts,
    removeCart
}