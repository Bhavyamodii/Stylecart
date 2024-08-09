const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const connectToMongoDB = require("./connection");
const userRoute = require("./routes/userRoute");
const bodyParser = require('body-parser');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const path = require("path");

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// MongoDB connection
connectToMongoDB("mongodb+srv://hardikkhandelwal2514:snVRIBirhP7QxR3u@hardijk.riigjae.mongodb.net/?retryWrites=true&w=majority&appName=Hardijk")
    .then(() => {
        console.log("MongoDB Started");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });

// Middleware to verify Stripe webhook signatures
// function verifyWebhookSignature(req, res, next) {
//     const sig = req.headers['stripe-signature'];
//     const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

//     let event;
//     try {
//         // Construct the event using the raw body for verification
//         event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
//         req.event = event; // Attach event to request object
//         next();
//     } catch (err) {
//         console.error("Webhook Error:", err.message);
//         return res.status(400).send(`Webhook Error: ${err.message}`);
//     }
// }

// Webhook endpoint for Stripe
// app.post('/api/webhook', bodyParser.raw({ type: 'application/json' }), verifyWebhookSignature, (req, res) => {
//     const event = req.event;

//     // Handle the event
//     switch (event.type) {
//         case 'payment_intent.succeeded':
//             const paymentIntent = event.data.object;
//             console.log('PaymentIntent was successful!', paymentIntent);
//             break;
//         case 'payment_intent.failed':
//             const failedPaymentIntent = event.data.object;
//             console.log('PaymentIntent failed.', failedPaymentIntent);
//             break;
//         default:
//             console.log('Unhandled event type:', event.type);
//             return res.status(400).end();
//     }

//     res.json({ received: true });
// });

// API routes
app.use("/api", userRoute);

// Start server
const PORT = process.env.PORT || 8009;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
