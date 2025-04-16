import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const app=express()
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('DB connected');
    
}).catch((err)=>{
    console.log(err);
    
});
app.listen(3000,()=>{
    console.log('server running on 3000');
    
})