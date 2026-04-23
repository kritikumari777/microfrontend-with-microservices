import mongoose from 'mongoose'
import config from '../auth/config/config.js'

async function connectDB() {
    await mongoose.connect(config.MONGO_URL)

    console.log("Connected to DB")

}

export default connectDB