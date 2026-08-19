import { model, Schema } from "mongoose";

const suppilerSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

const suppilerModle = model("Suppiler", suppilerSchema)

export default suppilerModle