const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    url:{
       type:String,
    },
    is_active:{
        type:Boolean,
        default:true,
    },
    is_deleted:{
        type:"Boolean",
        default:false,
    },
    role:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    loggedIn:{
        type:String,
        required:true,
        default:true
    },

    
    })
const userModel=new mongoose.model("User",userSchema);
module.exports = userModel;