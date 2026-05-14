import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    // can have multiple orders so rap on array
    orderItems: [{
        type: mongoose.Types.ObjectId,
        ref: "Cart",
        required: true
    }],
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
        required: true,
        default: 'Pending'

    },
    totalPrice:{
        type: Number,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    orderedDate:{
        type: Date,
        default: Date.now,
    }

})

orderSchema.virtual("id").get( function(){
    return this._id.toHexString();
})

orderSchema.set('toJSON', {
    virtuals: true
})

const orderModle = mongoose.model("Order", orderSchema)

export default orderModle