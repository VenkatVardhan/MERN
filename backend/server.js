import express from "express"
import { connectDB } from "./config/db.js"
import { Product } from "./models/product.model.js"

const app=express()
app.use(express.json())
app.listen(5000,()=>{
    connectDB()
    console.log("Server Started http://localhost:5000/")
})
app.get('/',(req,res)=>{
    res.send("HomePage")
})
app.post('/api/products',async(req,res)=>{
    const product=req.body
    const newProduct=new Product(product)
    if(!product.name||!product.price||!product.img){
        res.status(400).json({success:false,message:"All fields are required"})
    }
    try{
        await newProduct.save()
        res.status(201).json({success:true,data:product})
    }
    catch(error){
        res.status(500).json({success:false,message:"Internal Server Error"})

    }
    

})