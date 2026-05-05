import {Schema, model} from "mongoose"

const productSchema = new Schema({
image:{
    type:String,
    required: false
},
title:{
    type: String,
    require: true
},
description: {
    type: String,
    required: true
},
price:{
    type: Number,
    required: true
},
discount: {
    type: Number,
    required: false
},
review:{
    type: String,
    required: false
},
rating:{
    type: Number,
    required: false
}
}, {timestamps: true})

const productModel = model("Product", productSchema)
export default productModel