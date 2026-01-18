import mongoose from 'mongoose'
import { ref } from 'process'

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.orderItems,
        ref: 'Products'
    },
    quantity:{
        type: Number,
        required: true 
    }
})

const orderSchema = new mongoose.Schema({

      orderPrice:{
        type: Number,
        required: true
      },

      customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },

      orderItems:{
        type: [orderItemsSchema]
      },

      adress:{
        type: String,
        required: true
      },

      status:{
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
      }

})

export const  Order = mongoose.model('Order', orderSchema)