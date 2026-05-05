import mongoose, { Schema, model } from "mongoose";

const cartSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  productId:{
    type: Schema.Types.ObjectId,
    ref:'Product',
    required : true
  },
  qty:{
    type: Number,
    required: true
  }
})

const cartModel = model("Cart", cartSchema)

export default cartModel