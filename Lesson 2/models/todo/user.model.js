import mongoose from  'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique: true,
        lowercase: true
    },
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
