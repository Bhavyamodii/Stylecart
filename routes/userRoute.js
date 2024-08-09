const express=require("express");
const router=express.Router();
const multer=require("multer")
const fs=require("fs")
const path=require("path")

    
const{signup,login,usersList,userActive,userDelete,addProduct,productList,activeProduct,deleteProduct,addCartList,cartList
    ,updateCartItem,paymentDetails,paymentBook,clearCart,orderedProduct,contactUs,webhook
}=require("../controller/adminController")

const uploadDir=path.join("__dirname","../uploads")
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir,{recursive:true})
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });


router.post("/sign-up",upload.single("profileImage"),signup);
router.post("/login",login);
router.post("/usersList",usersList);
router.post("/userActive",userActive);
router.post("/userDelete",userDelete);
router.post("/addProduct",addProduct);
router.post("/productList",productList);
router.post("/activeProduct",activeProduct);
router.delete("/deleteProduct",deleteProduct);
router.post("/addCartList",addCartList);
router.post("/cartList",cartList);
router.post("/updateCart",updateCartItem);
router.post("/paymentDetails",paymentDetails);
router.post("/paymentBook",paymentBook);
router.delete("/clearCart",clearCart);
router.post("/orderedProduct",orderedProduct);
router.post("/contactUs",contactUs);
//  router.post("/webhook",express.raw({type: 'application/json'}),webhook);

module.exports=router; 