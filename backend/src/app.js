import express from 'express'
import morgan from 'morgan'
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from './auth/routes/auth.routes.js'
import productRouter from "./commerce/routes/product.routes.js"
import cartRouter from './commerce/routes/cart.routes.js'
import categoryRouter from './commerce/routes/category.routes.js'
import { errorHandler } from './helpers/error.handler.js'
import orderRouter from './commerce/routes/order.routes.js'
const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173", //Access-Control-Allow-Origin: http://localhost:5173
  credentials: true                //Access-Control-Allow-Credentials: true
}));

//error handler
app.use(errorHandler)

 //app.auth is the prefix of api route
 // /app/auth/register is full api route
app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter)
export default app