import mongoose, { model, Schema } from "mongoose";

const categorySchama = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
}, {timestamps: true})

const categoryModle = model('Category', categorySchama)

export default categoryModle