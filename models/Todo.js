const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:255,
    },
    description:{
        type:String,
        required:true,
        maxLength:255,

    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
});
module.exports=mongoose.model('Todo',todoSchema);