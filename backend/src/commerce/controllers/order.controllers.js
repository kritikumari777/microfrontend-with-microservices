import mongoose, { isValidObjectId } from "mongoose"
import cartModel from "../models/cart.model.js"
import orderModle from "../models/order.model.js"

const createOrder = async (req, res) => {

    try {
        // const orderItemsIds = Promise.all(req.body.cartItems.map(async cardItem => {
        //     return cardItem._id
        // }))

        // const newOrderItemResolved = await orderItemsIds

        const totalPrices = await Promise.all(req.body.cartItems.map(async (cartItemsId) => {

            const cartItem = await cartModel.findById(cartItemsId).populate('productId', 'price')

            if (!cartItem) {
                console.log("Cart item not found");
                return 0;
            }

            const totalPrices = cartItem.productId.price * cartItem.qty;

            return totalPrices
        }))

        //sum all prices
        const totalPrice = totalPrices.reduce((a, b) => a + b, 0)

        let order = new orderModle({
            cartItems: req.body.cartItems,
            shippingAddress: req.body.shippingAddress,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: totalPrice,
            user: req.body.user,
            orderedDate: req.body.orderedDate,
        })

        order = await order.save()

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            })
        }

        res.status(201).json({
            success: true,
            message: "Order created sucessfully",
            order
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

const fetchOrder = async (req, res) => {

    try {

        const orderList = await orderModle.find().populate('user', 'username').sort({ 'orderedDate': -1 })

        if (!orderList) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Orders Fetched sucessfully",
            orderList
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}

const fetchOrderById = async (req, res) => {

    try {

        const order = await orderModle.findById(req.params.id)
            .populate({
                path: 'cartItems',
                select: 'qty, productId',
                populate: {
                    path: 'productId'
                }
            })
            .populate({
                path: 'user', select: "username"
            })

        if (!order) {
            return res.status.json({
                success: false,
                message: "Order Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "A order fatched Sucessfully",
            order
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}

const updateOrder = async (req, res) => {

    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({
            success: false,
            message: "Invalid order id"
        })
    }

    try {
        const order = await orderModle.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Order Updated Sucessfully",
            order
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

const deleteOrder = async (req, res) => {

    if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({
            success: false,
            message: "Invalid order Id"
        })
    }

    try {

        const order = await orderModle.findByIdAndDelete(req.params.id)

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            })
        }

        //also delete cartItems
        await order.cartItems.map(async cartItem => {
            await cartItem.findByIdAndDelete(cartItem)
        })

        res.status(200).json({
            success: true,
            message: "Order deleted sucessfully",
            order
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

const totalSales = async (req, res) => {
    const totalSales = await orderModle.aggregate([
        { $group: { _id: null, totalSales: { $sum: `$totalPrice` } } }
    ])

    try {

        res.status(200).json({
            success: true,
            message: "Total sales calculated sucessfully",
            totalSales: totalSales.pop().totalSales
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const totalOrder = async (req, res) => {
    const totalOrder = await orderModle.countDocuments()
   
    console.log(totalOrder)
    try{
        if(!totalOrder){
          res.status(404).json({
            success: false,
            message: "No order found"
          })
        }

        res.status(200).json({
            success: true,
            message: "Totle order calculated successfully",
            totalOrder
        })
    }catch (err){
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export {
    createOrder,
    fetchOrder,
    fetchOrderById,
    updateOrder,
    deleteOrder,
    totalSales,
    totalOrder
}