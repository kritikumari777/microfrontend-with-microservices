import mongoose, { Schema, model } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
    validate:{
     validator: Number.isInteger,
     message: "Quantity must be an integer",
    }
  }
}, { timestamps: true })

cartSchema.index(
  {userId: 1, productId: 1},
  {unique: true}
)

const cartModel = model("Cart", cartSchema)

export default cartModel