import mongoose from 'mongoose'

const categoriesSchema = new mongoose.Schema({
      productName: {
        type:String,
        required:true,
        lowercase: true
    },   unique: true,
     
})

export const  Categories = mongoose.model('Categories', categoriesSchema)