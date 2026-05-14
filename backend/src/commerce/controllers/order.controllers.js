import mongoose, { isValidObjectId } from "mongoose"
import cartModel from "../models/cart.model.js"
import orderModle from "../models/order.model.js"

const createOrder = async (req, res) => {

    try {
        const orderItemsIds = Promise.all(req.body.orderItems.map(async orderItem => {
            let newOrderItem = new cartModel({
                userId: orderItem.userId,
                productId: orderItem.productId,
                qty: orderItem.qty
            })

            // newOrderItem = await newOrderItem.save()

            return newOrderItem._id
        }))

        const newOrderItemResolved = await orderItemsIds

        console.log(orderItemsIds)

        let order = new orderModle({
            orderItems: newOrderItemResolved,
            shippingAddress: req.body.shippingAddress,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: req.body.totalPrice,
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
            .populate([
                { path: 'user', select: 'name' },
                { path: 'orderItems', select: 'name' },
            ])

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
        const order = await orderModle.findByIdAndUpdate(req.params.id, req.body, {new: true })

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

    if(!mongoose.isValidObjectId(req.params.id)){
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

export {
    createOrder,
    fetchOrder,
    fetchOrderById,
    updateOrder,
    deleteOrder

}