const bcrypt = require("bcrypt");
const userModel = require("../model/user");
const productModel = require("../model/product");
const cartModel = require("../model/cart");
const paymentModel=require("../model/payment")
const orderModel=require("../model/orderedProduct")
const jwt = require("jsonwebtoken");
const multer = require("multer");
const nodemailer = require("nodemailer")
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();
const key = "qwertyuiop";
const PDFDocument = require('pdfkit');
const fs = require('fs');


const signup = async (req, res) => {
  try {
    const { userName, email, password, url, dob, is_active, is_deleted, loggedIn } = req.body;
    const existingUser = await userModel.findOne({ email, userName });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        msg: "Username already taken or email is wrong"
      });
    }
    const profileImage = `http://localhost:${process.env.PORT || 8009}/uploads/${req.file.filename}`;
    const hashedPassword = await bcrypt.hash(password, 12);

    await userModel.create({
      userName,
      email,
      password: hashedPassword,
      dob,
      url: profileImage,
      is_active,
      is_deleted,
      loggedIn,
      role: "user"
    });

    return res.status(200).json({
      success: true,
      msg: "Signup Successful",
      userName,
      email,
      dob,
      url: profileImage,
      loggedIn
    });

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      msg: "Signup failed"
    });
  }
};

const login = async (req, res) => {
  try {
      const { email, password } = req.body;

      const user = await userModel.findOne({ email: email });

      if (!user) {
          return res.status(401).json({ message: "Incorrect email or password" });
      }
      if (!user.is_active) {
          return res.status(401).json({ message: "User is not active" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: "Incorrect email or password" });
      }

      const token = jwt.sign({ email: user.email }, key, { expiresIn: '1h' });
      console.log(token);

      const subject = "Login Successful";
      const text = `Hello ${user.email}, You have successfully logged into our website.`;
      const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border: 1px solid #dddddd;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #007BFF;
                  color: #ffffff;
                  padding: 10px 20px;
                  text-align: center;
              }
              .header h1 {
                  margin: 0;
              }
              .body {
                  padding: 20px;
              }
              .body p {
                  line-height: 1.6;
              }
              .footer {
                  background-color: #f1f1f1;
                  color: #333333;
                  padding: 10px 20px;
                  text-align: center;
                  font-size: 0.9em;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <div class="header">
                  <h1>Welcome to Our Service</h1>
              </div>
              <div class="body">
                  <p>Hello ${user.email},</p>
                  <p>Thank you for joining us. We are thrilled to have you on board. Here are some details about your account and services:</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nisi. Curabitur quis bibendum ligula. Nulla facilisi. Integer ac sem id velit ornare efficitur. Ut in libero eget ligula semper varius.</p>
                  <p>If you have any questions, feel free to reach out to our support team.</p>
                  <p>Best Regards,</p>
                  <p>Your Company</p>
              </div>
              <div class="footer">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
      `;

      await sendMail(user.email, subject, text, html);

      return res.status(200).json({
          success: true,
          msg: "Login successful",
          userData: {
              userName: user.userName,
              email: user.email,
              DOB: user.DOB,
              is_active: user.is_active,
              is_deleted: user.is_deleted,
              token: token,
              loggedIn: true,
              _id: user._id,
          },
      });

  } catch (err) {
      console.log(err);
      return res.status(400).json({
          success: false,
          msg: err.message,
      });
  }
};

const usersList = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    return res.status(200).json({ data: allUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const userActive = async (req, res) => {
  const userEmail = req.body.email;
  const isActive = req.body.is_active === "true" || req.body.is_active === true;
  try {
    const user = await userModel.findOneAndUpdate(
      { email: userEmail },
      { is_active: isActive },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "User updated successfully",
      user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userDelete = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const deletedUser = await userModel.findOneAndDelete({ email: userEmail });
    if (deletedUser) {
      return res.status(200).json({
        success: true,
        message: "User Account Deleted Successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User Not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const { title, description, price, url, category, is_active, is_deleted } = req.body;
    await productModel.create({
      title,
      description,
      price,
      url,
      category,
      is_active,
      is_deleted,
    });

    return res.status(200).json({
      success: true,
      message: "Product created Successfully",
      title,
      description,
      price,
      url,
      category,
      is_active,
      is_deleted,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

const productList = async (req, res) => {
  try {
    const allProducts = await productModel.find({is_active:true});
    return res.status(200).json({ data: allProducts });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: "false",
      message: "Failed to fetch products",
    });
  }
};

const activeProduct = async (req, res) => {
  const { _id, is_active } = req.body;
  const isActive = is_active === 'true' || is_active === true;
  try {
    const product = await productModel.findOneAndUpdate(
      { _id },
      { is_active: isActive },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      status: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body._id).then((resp) => {
      res.status(200).json({
        status: true,
        message: "Product deleted successfully"
      });
    }).catch(err => {
      console.log("Product not found", err);
      res.status(404).json({
        status: false,
        message: "Product not found"
      });
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const addCartList = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    let existingProduct = await cartModel.findOne({ userId, productId });

    if (existingProduct) {
      existingProduct.quantity = quantity; // Update the quantity to the new value
      await existingProduct.save();
    } else {
      await cartModel.create({ userId, productId, quantity });
    }

    res.status(200).json({
      success: true,
      message: "Product added to cart successfully"
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add product to cart. Please try again later."
    });
  }
};

const cartList = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        msg: "UserId is required.",
      });
    }

    const productList = await cartModel.find({ userId }).populate('productId');

    res.json({ status: true, result: productList });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ status: false, error: 'Internal server error' });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || typeof quantity !== 'number') {
      return res.status(400).json({ success: false, message: 'User ID, Product ID, and quantity are required and quantity must be a number' });
    }

    if (quantity <= 0) {
      // Delete the cart item if the quantity is 0 or less
      const deletedCartItem = await cartModel.findOneAndDelete({ userId: userId, productId: productId });

      if (!deletedCartItem) {
        return res.status(404).json({ success: false, message: 'Cart item not found' });
      }

      return res.status(200).json({ success: true, message: 'Cart item deleted successfully' });
    } else {
      // Update the quantity if greater than 0
      const updatedCartItem = await cartModel.findOneAndUpdate(
        { userId: userId, productId: productId },
        { quantity: quantity },
        { new: true } // Return the updated document
      );

      if (!updatedCartItem) {
        return res.status(404).json({ success: false, message: 'Cart item not found' });
      }

      return res.status(200).json({ success: true, message: 'Cart updated successfully', cartItem: updatedCartItem });
    }
  } catch (error) {
    console.error('Error updating cart:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const paymentDetails = async (req, res) => {
  const { products, userId } = req.body;

  // Validate products array
  if (!Array.isArray(products)) {
    return res.status(400).json({ success: false, message: "Products must be an array" });
  }

  try {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.productId.title,
        },
        unit_amount: product.productId.price * 100,
      },
      quantity: Math.max(1, product.quantity),
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3001/success?userId=${userId}`,
      cancel_url: `http://localhost:3001/cancel`,
    });

    await orderedProduct(req.body);
    
    // const invoiceData = {
    //     invoiceNumber: `INV-${Date.now()}`,
    //     date: new Date().toLocaleDateString(),
    //     items: products.map(product => ({
    //       name: product.productId.title,
    //       price: product.productId.price,
    //       quantity: product.quantity,
    //   })),
    //     subtotal: products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0),
    //     tax: 0.05 * products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0),
    //     shipping: 10.00, // Example shipping cost
    //     totalAmount: 0
    //   };
    //   invoiceData.totalAmount = invoiceData.subtotal + invoiceData.tax + invoiceData.shipping;
    
    //   const invoicePath = `invoices/invoice_${invoiceData.invoiceNumber}.pdf`;
    //   generateInvoicePDF(invoiceData, invoicePath);
      
      

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: "Failed to create payment session" });
  }
};

const paymentBook = async (req, res) => {
  const event = req.body;
  console.log("Received event:", event); // Log the entire event object

  if (event.type === 'payment_intent.succeeded') {
      console.log("Payment successfull");
      // Check if the data property exists before accessing it
      if (event.data && event.data.object) {
          const paymentIntent = event.data.object;
          const customer = paymentIntent.customer;
          const paymentMethod = paymentIntent.payment_method;
          const amount = paymentIntent.amount;

          const products = paymentIntent.line_items && paymentIntent.line_items.data
              ? paymentIntent.line_items.data.map((item) => item.price_data.product_data.name)
              : [];

          const payment = {
              customer_id: customer,
              payment_method: paymentMethod,
              amount: amount,
              products: products,
          };
          console.log("Payment:", payment); // Log the payment object

          try {
              const paymentDoc = new paymentModel(payment);
              await paymentDoc.save();
              // console.log('Payment saved to database:', payment);
          } catch (error) {
              console.error('Error saving payment:', error);
              res.status(500).json({ error: 'Internal Server Error' });
              return;
          }
      }
  }


  res.json({
      received: true,
      msg: "Transaction Successful"
  });
};

const clearCart = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: "User Id is required." });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }

    // Fetch products from the cart and populate productId details
    const products = await cartModel.find({ userId }).populate('productId');
    
    // Check if products exist
    if (!products || products.length === 0) {
      return res.status(400).json({ error: "No products found in the cart." });
    }

    // Generate invoice data
    const invoiceData = {
      invoiceNumber: `INV-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      items: products.map(product => ({
        name: product.productId.title,
        price: product.productId.price,
        quantity: product.quantity,
      })),
      subtotal: products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0),
      tax: 0.05 * products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0),
      shipping: 10.00, // Example shipping cost
      totalAmount: 0
    };
    invoiceData.totalAmount = invoiceData.subtotal + invoiceData.tax + invoiceData.shipping;

    // Check if invoice data is properly computed
    if (!invoiceData.items || invoiceData.items.length === 0 || isNaN(invoiceData.totalAmount)) {
      console.error("Invalid invoice data:", invoiceData);
      return res.status(500).json({ error: "Failed to generate invoice data." });
    }

    // Generate PDF invoice
    const invoicePath = `invoices/invoice_${invoiceData.invoiceNumber}.pdf`;
    generateInvoicePDF(invoiceData, invoicePath);

    // Send email notification
    const subject = "Order Placed Successfully";
    const text = `Hello ${user.email}, You have successfully placed an order.`;
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border: 1px solid #dddddd;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #007BFF;
                  color: #ffffff;
                  padding: 10px 20px;
                  text-align: center;
              }
              .header h1 {
                  margin: 0;
              }
              .body {
                  padding: 20px;
              }
              .body p {
                  line-height: 1.6;
              }
              .footer {
                  background-color: #f1f1f1;
                  color: #333333;
                  padding: 10px 20px;
                  text-align: center;
                  font-size: 0.9em;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <div class="header">
                  <h1>Welcome to Our Service</h1>
              </div>
              <div class="body">
                  <p>Hello ${user.email},</p>
                  <p>Thank you for your purchase. Here are the details of your order:</p>
                  <ul>
                    ${invoiceData.items.map(item => `<li>${item.name} - ${item.quantity} x $${item.price.toFixed(2)}</li>`).join('')}
                  </ul>
                  <p>Subtotal: $${invoiceData.subtotal.toFixed(2)}</p>
                  <p>Tax: $${invoiceData.tax.toFixed(2)}</p>
                  <p>Shipping: $${invoiceData.shipping.toFixed(2)}</p>
                  <p>Total Amount: $${invoiceData.totalAmount.toFixed(2)}</p>
                  <p>If you have any questions, feel free to reach out to our support team.</p>
                  <p>Best Regards,</p>
                  <p>Your Company</p>
              </div>
              <div class="footer">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
    `;
    await sendMail(user.email, subject, text, html);

    // Clear the cart
    await cartModel.deleteMany({ userId });

    return res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
      invoicePath: invoicePath // Optional: Return the path to the generated invoice
    });
  } catch (error) {
    console.error("Error clearing cart:", error);
    return res.status(500).json({ error: "An error occurred while clearing the cart." });
  }
};

const orderedProduct = async ({ userId, products }) => {
  try {
    for (const product of products) {
      const order = new orderModel({
        userId,
        product_name: product.title,
        product_price: product.price,
        product_quantity: product.quantity,
        product_url: product.url,
      });
      await order.save();
    }
  } catch (error) {
    console.log("Error saving ordered products:", error);
  }
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "personalhardik90@gmail.com",
    pass: "kqhhlkcldsroshol",
  },
  tls: {
    rejectUnauthorized: false, // This will allow self-signed certificates
  },
});


async function sendMail(to, subject, text, html) {
  // Define mail options inside the function
  const mailOptions = {
      from: "personalhardik90@gmail.com", // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html // html body
  };

  try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
  } catch (error) {
      console.error("Error sending email: " + error);
  }
}

const generateInvoicePDF = (invoiceData, outputPath) => {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream(outputPath));

    // Add text content to the PDF
    doc.fontSize(25)
        .text('Invoice', { align: 'center' })
        .moveDown(); // Move down to the next line

    // Add invoice data
    doc.fontSize(12)
        .text(`Invoice Number: ${invoiceData.invoiceNumber}`)
        .text(`Date: ${invoiceData.date}`)
        .moveDown(); // Move down to the next line

    // Add itemized list
    doc.text('Items:');
    invoiceData.items.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.name}.${item.quantity}: $${item.price.toFixed(2)}`);
    });

    // Add subtotal, tax, shipping, and total amount
    doc.moveDown(); // Move down to the next line
    doc.fontSize(12)
        .text(`Subtotal: $${invoiceData.subtotal.toFixed(2)}`, { align: 'right' })
        .text(`Tax (5%): $${invoiceData.tax.toFixed(2)}`, { align: 'right' })
        .text(`Shipping: $${invoiceData.shipping.toFixed(2)}`, { align: 'right' })
        .moveDown(); // Move down to the next line

    doc.fontSize(16)
        .text(`Total Amount: $${invoiceData.totalAmount.toFixed(2)}`, { align: 'right' });

    doc.end(); // Finalize PDF file
}

const contactUs=async(req,res)=>{
  try {
    const{name,email,phone,message}=req.body;
    console.log(req.body);

    const information = "Request Received Successfully";
    const text = `Hello ${name}, We have successfully received your information.`;
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border: 1px solid #dddddd;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #007BFF;
                color: #ffffff;
                padding: 10px 20px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
            }
            .body {
                padding: 20px;
            }
            .body p {
                line-height: 1.6;
            }
            .footer {
                background-color: #f1f1f1;
                color: #333333;
                padding: 10px 20px;
                text-align: center;
                font-size: 0.9em;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Welcome to Our Service</h1>
            </div>
            <div class="body">
                <p>Hello ${email},</p>
                <p>Thank you for your review. Our team member will get in touch with you shortly:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nisi. Curabitur quis bibendum ligula. Nulla facilisi. Integer ac sem id velit ornare efficitur. Ut in libero eget ligula semper varius.</p>
                <p>If you have any questions, feel free to reach out to our support team.</p>
                <p>Best Regards,</p>
                <p>Your Company</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
    await sendMail(email, information, text, html);
    console.log("Email sent");

    // Respond to the client
    res.status(200).json({ message: 'Message sent successfully' });

  } catch (error) {
    console.log(error)
  }
}

// const webhook=async(req,res)=>{

//   const endpointSecret ="whsec_ca7cad3d4cd40ee6c03c62afa49aa9cbd9c464c4ec35293e198ec68de0325d1a"
//   const sig = req.headers['stripe-signature'];
//   const playload=req.body
  
//   let event;
//   console.log('Received webhook:', req.headers, playload);
//   try {
//     event = stripe.webhooks.constructEvent(playload, sig, endpointSecret );
//   } catch (error) {
//     console.log(error)
//   }
//   // console.log('Event type:', event.type);
//   // console.log('Event data:', event.data.object);
// }

module.exports = {
  signup,
  login,
  usersList,
  userActive,
  userDelete,
  addProduct,
  productList,
  activeProduct,
  deleteProduct,
  addCartList,
  cartList,
  updateCartItem,
  paymentDetails,
  paymentBook,
  clearCart,
  orderedProduct,
  sendMail,
  generateInvoicePDF,
  contactUs,
  // webhook,
};
