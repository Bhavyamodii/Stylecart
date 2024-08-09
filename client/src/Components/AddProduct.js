import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.scss';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [popup,setPopup]=useState({visible:false,message:""})

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!title || !price || !description || !category) {
        setMessage('Please fill all the fields');
        return;
      }
      const newProduct = { title, price, category, description, url };
      const response = await axios.post("http://localhost:8009/api/addProduct", newProduct);
      console.log("Product added successfully", response.data);
      setPopup({
        visible:true,
        message:"Product added successfully"
      });
      setTimeout(()=>{
     setPopup({visiblele:false,message:""})
      },6000)
      setMessage('Product added successfully');
      setTitle('');
      setCategory('');
      setDescription('');
      setUrl('');
      setPrice('');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <div className="Page__heading">
          <h1 className="Page__title">Add Product</h1>
          <div className="Hamburger">
            <button type="button" className="js-menu-trigger">
              <span className="Hamburger__inner" />
            </button>
            <div className="Menu js-menu">
              <div className="Menu__heading">
                <div className="Menu__title">Menu</div>
                <div className="Menu__close">
                  <button type="button" className="js-menu-close-trigger">
                    <span>Close</span>
                  </button>
                </div>
              </div>
              <div className="Menu__content js-menu-content" />
            </div>
          </div>
        </div>
        <div className="Page__button">
          <button type="button" className="js-button-add">
            <span>Add Product</span>
          </button>
        </div>
      </header>
      <main>
        <div className="Tabs js-tabs">
          <div className="Tabs__item">
            <input type="radio" id="tab-1" name="tab" defaultChecked="" />
            <label htmlFor="tab-1" className="Tabs__label">
              Add Product
            </label>
            <div className="Tabs__content">
              <form className="AddProduct__form" onSubmit={handleSubmit}>
                <div className="AddProduct__input-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter product title"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter product description"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="url">Image URL:</label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter product image URL"
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="category">Category:</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter product category"
                    required
                  />
                </div>
                <button type="submit" className="AddProduct__submit-btn">
                  Add Product
                </button>
                {message && <p className="Product created successfully">{message}</p>}
              </form>
            </div>
          </div>
          <div className="Tabs__item">
            <input type="radio" id="tab-2" name="tab" />
            <label htmlFor="tab-2" className="Tabs__label">
              Customer
            </label>
            <div className="Tabs__content">Customer</div>
          </div>
          <div className="Tabs__item">
            <input type="radio" id="tab-3" name="tab" />
            <label htmlFor="tab-3" className="Tabs__label">
              Settings
            </label>
            <div className="Tabs__content">Settings</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddProduct;
