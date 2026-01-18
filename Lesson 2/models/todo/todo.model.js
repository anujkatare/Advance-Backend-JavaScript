import mongoose from  'mongoose';
import { type } from 'os';


const todoSchema = new mongoose.Schema({
   content:{
    type: String,
   },
   isCompleted:{
    type: Boolean,
    default: false
   },
   createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
   },
   subTodos:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo'
    }
   ]
})

export const Todo = mongoose.model('Todo', todoSchema)
