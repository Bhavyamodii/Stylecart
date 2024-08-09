const mongoose=require("mongoose")
const orderedSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    product_name:{
        type:String
    },
    product_price:{
        type:Number
    },
    product_quantity:{
        type:Number
    },
    product_url:{
        type:String
    },
})
const orderedModel=new mongoose.model("Ordered",orderedSchema)

module.exports=orderedModel

