import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Shop.css'; // Ensure this path matches your project structure

function Shop() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [popup, setPopup] = useState({ visible: false, message: '', loginButton: false });

  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post("http://localhost:8009/api/productList");
        setProducts(response.data.data); // Assuming response.data.data contains the array of products
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userId) {
        try {
          const response = await axios.post("http://localhost:8009/api/cartList", { userId });
          setCartItems(response.data.result); // Assuming response.data.result contains the array of cart items
        } catch (error) {
          console.log('Error fetching cart items:', error);
        }
      }
    };

    fetchCartItems();
  }, [userId]);

 const addToCart = async (item) => {
  if (!userId) {
    setPopup({
      visible: true,
      message: 'You have to login first. Click here to login.',
      loginButton: true
    });
    setTimeout(() => {
      setPopup({ visible: false, message: '', loginButton: false });
    }, 4000); // Hide popup after 4 seconds
    return;
  }

  const existingProduct = cartItems.find(cartItem => cartItem.productId && cartItem.productId._id === item._id);
  if (existingProduct) {
    setPopup({
      visible: true,
      message: 'Product already exists in cart',
    });
    setTimeout(() => {
      setPopup({ visible: false, message: '' });
    }, 3000); // Hide popup after 3 seconds
    return;
  }

  const data = {
    userId: userId,
    productId: item._id,
    quantity: 1 // Initial quantity
  };

  try {
    const response = await axios.post("http://localhost:8009/api/addCartList", data);
    console.log(response.data);
    // Update cartItems state immediately after adding new item
    setCartItems([...cartItems, { productId: { _id: item._id }, ...data }]);
    setPopup({ visible: true, message: `${item.title} has been added to cart` });
    setTimeout(() => {
      setPopup({ visible: false, message: '', loginButton: false });
    }, 3000); // Hide popup after 3 seconds
  } catch (error) {
    console.log('Error adding to cart:', error);
  }
};


  return (
    <>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-6" key={product._id}>
                <div className="box">
                  <a href="#">
                    <div className="img-box">
                      <img src={product.url} alt={product.title} />
                    </div>
                    <div className="detail-box">
                      <h6>{product.title}</h6>
                      <p>{product.description}</p>
                      <h6>
                        Price <span>${product.price}</span>
                      </h6>
                      <p>Category: {product.category}</p>
                      <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="#">View All Products</a>
          </div>
        </div>
      </section>
      {popup.visible && (
        <div className="popup">
          <p>{popup.message}</p>
          {popup.loginButton && (
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          )}
        </div>
      )}
    </>
  );
}

export default Shop;
