import express from "express"
import { connectDB } from "./config/db.js"

import productRouter from "./routes/product.route.js"

const app=express()
app.use(express.json())
const PORT=process.env.PORT||5000
app.listen(PORT, ()=>{
    connectDB()
    console.log("Server Started http://localhost:5000/")
})
app.get('/',(req,res)=>{
    res.send("HomePage")
})
app.use('/api/products',productRouter)