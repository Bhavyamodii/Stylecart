import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddToCart.css';
import { loadStripe } from '@stripe/stripe-js';

function AddToCart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  const userId = sessionStorage.getItem("userId");
  const [taxRate] = useState(0.02);
  const [shippingCharge] = useState(5);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId) {
          setError("Please login first");
          return;
        }

        const data = { userId };
        const response = await axios.post("http://localhost:8009/api/cartList", data);

        if (response.data.status) {
          setCart(response.data.result);
          calculateTotalPrice(response.data.result);
          setError("");
        } else {
          setError("Failed to fetch cart data from server.");
        }
      } catch (err) {
        console.error("Error fetching cart data:", err);
        setError("Failed to fetch cart data. Please try again later.");
      }
    };

    fetchData();
  }, [userId]);

  const updateCartItem = async (action, index) => {
    try {
      const updatedCart = [...cart];
      let newQuantity;

      if (action === 'increment') {
        newQuantity = updatedCart[index].quantity + 1;
      } else if (action === 'decrement') {
        newQuantity = updatedCart[index].quantity - 1;
      }

      await axios.post("http://localhost:8009/api/updateCart", {
        userId,
        productId: updatedCart[index].productId._id,
        quantity: newQuantity
      });

      if (newQuantity <= 0) {
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index].quantity = newQuantity;
      }

      setCart(updatedCart);
      calculateTotalPrice(updatedCart);
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  const calculateTotalPrice = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      setSubTotal(0);
      setTotalPrice(0);
      return;
    }

    let subtotal = 0;

    cartItems.forEach(item => {
      subtotal += item.productId.price * item.quantity;
    });

    const total = subtotal + shippingCharge + (subtotal * taxRate);

    setSubTotal(subtotal);
    setTotalPrice(total);
  };

  const makePayment = async () => {
    try {
      const stripe = await loadStripe('pk_test_51PN9vERpIGMlBtUA2NzgETORMVnJkDwQzhLlIzfE9AtJvdIvU5GPdn40t70CU5IkgQPofhiPWPTQa1rfuW1eHBQe00MW3ek16A');
      const body = { products: cart, userId };
      const headers = { 'Content-Type': 'application/json' };
      const response = await fetch('http://localhost:8009/api/paymentDetails', {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      });
      const session = await response.json();
      
      if (session.id) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error('Payment session creation failed:', session);
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  return (
   <div className="cart-wrapper">
  <h1 className="cart-title">Shopping Cart</h1>
  {error && <p className="error">{error}</p>}
  <div className="cart-container">
    <ul>
      {cart.map((item, index) => (
        <li key={`${item.productId._id}-${index}`} className="cart-item">
          <img
            src={item.productId.url}
            alt={item.productId.title}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h2>{item.productId.title}</h2>
            <div>
              <p>
                Quantity:
                <button
                  className="quantity-btn"
                  onClick={() => updateCartItem('decrement', index)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="quantity-btn"
                  onClick={() => updateCartItem('increment', index)}
                >
                  +
                </button>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="cart-summary">
      <p>Subtotal: ${subTotal.toFixed(2)}</p>
      <p>Shipping: ${shippingCharge.toFixed(2)}</p>
      <p>Tax (2%): ${(subTotal * taxRate).toFixed(2)}</p>
      <p className="total">Total: ${totalPrice.toFixed(2)}</p>
    </div>
    <button onClick={makePayment}>Buy Now</button>
  </div>
</div>

  );
}

export default AddToCart;
