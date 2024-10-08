import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDB=async ()=>{
    try{
    const connection =await mongoose.connect(process.env.MONGO_URI)
    console.log("Database is Connected")
}
    catch(error){
        console.log("$error.message")
        process.exit(1)


    }
    }
