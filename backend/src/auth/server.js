import connectDB from "./database.js"
import app from "./app.js"
//database connection call
connectDB()

app.listen(3000, () => {
    console.log("Server is running on the port 3000")
})
