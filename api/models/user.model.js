import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        uneque:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        uneque:true,
        required:true
    },
    mobile:{
        type:String,
        uneque:true
    },
    role:{
        type:String,
    },
    skills:{
        type:Array
    },
    location:{
        type:String
    },
},{timestamps:true});

const User =mongoose.model('User',userSchema)

export default User;