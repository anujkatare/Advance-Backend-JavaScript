import mongoose from 'mongoose'

const productsSchema = new mongoose.Schema({
       productName: {
        type: String,
        required: true,
       },

       description:{
        type: String,
        required: true,
       },

       price:{
        type: Number,
        required: true
       },

       productImage:{
        type: String,
        required: true
       },

       stock:{
        type: Number,
        default: 0
       },

       category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
       },

       owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
       }
})

export const  Products = mongoose.model('Products', productsSchema)