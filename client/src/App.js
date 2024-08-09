import './App.css';
import React, { Fragment } from 'react';

import { BrowserRouter, Routes, Route,useEffect,Navigate } from 'react-router-dom';

import Admindashboard from './Admin/AdminDashboard';
import AllUsers from './Components/AllUsers';
import Signup from'./Components/Signup'
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import AllProducts from './Components/AllProducts';

function App() {
  const isAuthenticated=sessionStorage.getItem("token")
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>

    <Route path="/allUsers" element={isAuthenticated ? <AllUsers/>:(
      <>
      <AlertMessage/>
      <Navigate to="/login"></Navigate>
      </>
    )}> </Route>
    <Route path="/adminDashboard" element={isAuthenticated ? <Admindashboard/>:(
      <>
      <AlertMessage/>
      <Navigate to="/login"></Navigate>      </>
    )}/>
    <Route path="/addProduct" element={isAuthenticated ? <AddProduct/>:(
      <>
      <AlertMessage/>
      <Navigate to="/login"></Navigate>
      </>
    ) }/>
    <Route path="/allProducts" element={isAuthenticated ?<AllProducts/>:(
      <>
      <AlertMessage/>
      <Navigate to="/login"></Navigate>
      </>
    )}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}
const AlertMessage = () => {
  // Show alert message when redirecting to login page
  React.useEffect(() => {
    alert("You have to login first");
  }, []);

  return null;
};


export default App;
