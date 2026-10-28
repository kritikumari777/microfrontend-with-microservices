import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true
        },

        name: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
        },

        qty: {
            type: Number,
            required: true,
            min: 1
        },

        total: {
            type: Number,
            required: true
        }
    },
    { _id: false }
)

const orderSchema = new mongoose.Schema({
    // can have multiple orders so rap on array
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [orderItemsSchema],
        required: true
    },
    subTotal:{
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    },
    shippingAddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: [ "Pending", "Confirmed", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: 'Pending'

    },
    orderedDate:{
        type: Date,
        default: Date.now,
    }

})

// orderSchema.virtual("id").get( function(){
//     return this._id.toHexString();
// })

// orderSchema.set('toJSON', {
//     virtuals: true
// })

const orderModle = mongoose.model("Order", orderSchema)

export default orderModle