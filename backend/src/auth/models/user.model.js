import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is Required"],
        unique: [true, "Username must be unique"]
    },
    email:{
        type: String,
        required:[true, "Email is required"],
        unique: [true, "Email must be unique"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        unique: [true, "Password must be unique"]
    },
    role:{
        type: String, 
        enum: ["Admin", "Customer"],
        required: [true, "Role is required"],
        default: "Customer"
    }
})

userSchema.virtual('id').get(function(){
    return this._id.toHexString()
})

userSchema.set('toJSON', {
    virtuals: true
})

const userModel = mongoose.model("User", userSchema) // model in small letter

export default userModel