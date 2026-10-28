import mongoose from "mongoose"
import cartModel from "../models/cart.model.js"
import orderModle from "../models/order.model.js"

const createOrder = async (req, res) => {

    try {

        const userId = req.user._id

        // 1. Get current user's cart
        const cartItems = await cartModel.find({ userId }).populate('productId')

        if (!cartItems.length) {
            return res.status(400).json({
                success: false,
                message: "Cart  is empty",
            })
        }
        // 2. Build order item snapshots
        const items = cartItems.map((cardItem) => {
            const product = cardItem.productId;

            if (!product) {
                throw new Error("Product not found");
            }

            const total = product.price * cardItem.qty

            return {
                productId: product._id,
                name: product.title,
                price: product.price,
                qty: cardItem.qty,
                total
            }
        })

        // 3. Calculate subtotal
        const subTotal = items.reduce((sum, item) => sum + item.total, 0)

        // Later can add shipping, tax, discount, etc.
        const totalPrice = subTotal

        // 4. Create order
        const order = await orderModle.create({
            user: userId,
            items,
            subTotal,
            totalPrice,
            shippingAddress: req.body.shippingAddress,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
        })

        await cartModel.deleteMany({
            userId
        })

        return res.status(201).json({
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

        const orderList = await orderModle
            .find({ user: req.user._id })
            .sort({ orderedDate: -1 })
            .select("-__v");

        if (!orderList.length) {
            return res.status(404).json({
                "success": true,
                "orderList": []
            })
        }
        return res.status(200).json({
            success: true,
            message: "Orders Fetched sucessfully",
            orderList
        })
    } catch (err) {
        console.log(req)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}
const fetchOrderList = async (req, res) => {

    try {
        const orderList = await orderModle
            .find()
            .sort({ orderedDate: -1 })
            .select("-__v")
            .populate("user", "username email");

        if (!orderList.length) {
            return res.status(404).json({
                "success": true,
                "orderList": []
            })
        }
        return res.status(200).json({
            success: true,
            message: "Orders Fetched sucessfully",
            orderList
        })
    } catch (err) {
        console.log(req)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }

}

const fetchOrderById = async (req, res) => {

    try {

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid order id"
            })
        }

        const order = await orderModle.findOne({ _id: req.params.id, user: req.user._id })
            .populate('user', "username email")

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            })
        }

        return res.status(200).json({
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
const fetchAdminOrderById = async (req, res) => {

    try {

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid order id"
            })
        }

        const order = await orderModle.findById(req.params.id).populate("user", "username email")

        if (!order) {
            return res.status.json({
                success: false,
                message: "Order Not Found"
            })
        }

        return res.status(200).json({
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

    console.log("req.params.id", req.params.id)

    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid order id"
        })
    }

    try {
        const { status } = req.body
        const order = await orderModle.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        )

        console.log("first", order)

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order Not Found"
            })
        }

        return res.status(200).json({
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

// const cencleOrder = async (req, res) => {

//     if (!mongoose.isValidObjectId(req.params.id)) {
//         return res.status(400).json({
//             success: false,
//             message: "Invalid order Id"
//         })
//     }

//     try {

//         const order = await orderModle.findByIdAndDelete(req.params.id)

//         if (!order) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Order Not Found"
//             })
//         }

//         // Delete associated cart items
//         await Promise.all(
//             order.cartItems.map((cartItemId) =>
//                 cartModel.findByIdAndDelete(cartItemId)
//             )
//         )

//         return res.status(200).json({
//             success: true,
//             message: "Order deleted sucessfully",
//             order
//         })

//     } catch (err) {
//         return res.status(500).json({
//             success: false,
//             message: err.message
//         })
//     }

// }

const totalSales = async (req, res) => {

    try {

        const total = await orderModle.aggregate([
            { $group: { _id: null, totalSales: { $sum: "$totalPrice" } } }
        ])

        return res.status(200).json({
            success: true,
            message: "Total sales calculated sucessfully",
            totalSales: total[0]?.totalSales ?? 0
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const totalOrder = async (req, res) => {

    try {
        const totalOrder = await orderModle.countDocuments()

        return res.status(200).json({
            success: true,
            message: "Totle order calculated successfully",
            totalOrder
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export {
    createOrder,
    fetchOrder,
    fetchOrderList,
    fetchOrderById,
    fetchAdminOrderById,
    updateOrder,
    totalSales,
    totalOrder
}