import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllProduct.css';  // Ensure this path matches where your CSS file is located

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('http://localhost:8009/api/productList');
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  const handleStatus = async (productId, isActive) => {
    try {
      const response = await axios.post("http://localhost:8009/api/activeProduct", {
        _id: productId,
        is_active: isActive
      });

      const updatedProducts=products.map(product=>{
        if(product._id===productId){
          console.log("Status changed")
          return{...product,is_active:isActive}
        }
        return product;
      })
      setProducts(updatedProducts)
      
      
    } catch (error) {
      console.error("Error toggling active status:", error);
      // Handle error state
    }
  };

  const handleDelete=async(productId)=>{
  try {
    const response=axios.delete("http://localhost:8009/api/deleteProduct",{
      data:{_id:productId}
    })
    const updatedProducts=products.filter(product=>product._id!==productId)
    setProducts(updatedProducts)
  } catch (error) {
    console.log(error)
  }
  }

  return (
    <div className="container">
      <h1>All Products</h1>
      {error && <p className="error">{error}</p>}
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div className="card" key={product._id}>
              <img src={product.url} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Active: {product.is_active ? 'Yes' : 'No'}</p>
                <p className="card-text">Deleted: {product.is_deleted ? 'Yes' : 'No'}</p>
                <button onClick={() => handleStatus(product._id, !product.is_active)}>
                  {product.is_active ? 'Active' : 'Inactive'}
                </button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllProducts;
