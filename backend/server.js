import express from "express"
import { connectDB } from "./config/db.js"
import path from "path"

import productRouter from "./routes/product.route.js"

const app=express()
app.use(express.json())
const PORT=process.env.PORT||5000
const __dirname=path.resolve()


app.use('/api/products',productRouter)
if(process.env.NODE-ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}
app.listen(PORT, ()=>{
    connectDB()
    console.log("Server Started http://localhost:5000/")
})