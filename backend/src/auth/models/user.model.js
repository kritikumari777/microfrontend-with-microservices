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
    }
})

const userModel = mongoose.model("users", userSchema) // model in small letter

export default userModel