import express from 'express'
import morgan from 'morgan'
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from './routes/auth.routes.js'
const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173", //Access-Control-Allow-Origin: http://localhost:5173
  credentials: true                //Access-Control-Allow-Credentials: true
}));

 //app.auth is the prefix of api route
 // /app/auth/register is full api route
app.use("/api/auth", authRouter)
export default app