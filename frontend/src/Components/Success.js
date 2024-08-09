import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  const clearCart = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        console.log("User ID required");
        return;
      }

      await axios.delete(`http://localhost:8009/api/clearCart?userId=${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  useEffect(() => {
    clearCart();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <h1>Payment Successful!</h1>
      <p>You will be redirected shortly.</p>
    </div>
  );
}

export default Success;
