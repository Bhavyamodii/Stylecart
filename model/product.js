const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    is_active:{
        type:Boolean,
        default:true,
        required:true,
    },
    is_deleted:{
        type:Boolean,
        default:false,
        required:true,
    },
})
const productModel=new mongoose.model("Product",productSchema)
module.exports=productModel;