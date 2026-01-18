import mongoose from  'mongoose';


const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        lowercase: true
    },   unique: true,
     
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        required: true,
        trim: true
    } 
})

export const User = mongoose.model('User', userSchema)
