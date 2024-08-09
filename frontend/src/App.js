import React from 'react';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Shop from './Components/Shop';
import Testimonal from './Components/Testimonal';
import Header from './Components/Header'
import Signup from './Components/Signup';
import Login from './Components/Login';
import AddToCart from './Components/AddToCart';
import Success from './Components/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route
          path="/about-us"
          element={
            <>
              <Header />
              <AboutUs/>
            </>
          }
        />
        <Route path="/shop" element={
          <>
          <Header/>
          <Shop/>
          </>
        } />
        <Route path="/contact-us" element={
          <>
        <Header/>
        <ContactUs/>
        </>
        } />
        <Route path="/addToCart" element={
          <>
        <Header/>
        <AddToCart/>
        </>
        } />
        <Route path="/testimonial" element={
          <>
          <Header/>
          <Testimonal/>
          </>
        } />
        {/* Redirect to home page for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
