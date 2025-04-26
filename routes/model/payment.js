const mongoose=require("mongoose");
const paymentSchema=new mongoose.Schema({
    customer_id: String,
    payment_method: String,
    amount: Number,
    products: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
})

const Payment=mongoose.model("Payment",paymentSchema);
module.exports=Payment;