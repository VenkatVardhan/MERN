import {Product} from "../models/product.model.js"
import mongoose from 'mongoose'
export const createProduct=async(req,res)=>{
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

    }}
export const getProduct = async (req,res)=>{

        try{
        const products=await Product.find({})
        res.status(200).json({success:true,data:products})

        }
        catch(error){
            console.log("Error Message",error.message)
            res.status(404).json({success:false,message:'Resource Not Found'})
        }
    }
export const updateProduct=async (req,res)=>{
    const {id}=req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Not a valid ID"})
    }
    const product=req.body
    try {
        const Updated =await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,data:Updated})
        
    } catch (error) {
        res.status(500).json({success:false,message:'Internal Server Error'})
        console.log(error.message)
        
    }
    

}
export const deleteProduct = async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Not a valid ID"})
        return
    }
    try{
    const data=await Product.findByIdAndDelete(id)
    res.status(200).json({success:true,data:data})

    }
    catch(error){
    res.status(500).json({success:false,message:'Internal Server Error'})
    console.log(error.message)

    }
}