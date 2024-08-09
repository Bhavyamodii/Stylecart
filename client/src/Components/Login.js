import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await axios.post('http://localhost:8009/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login successful', response.data);

      // Store user data in session storage
      sessionStorage.setItem('userId', response.data.userData._id);
      sessionStorage.setItem('token', response.data.userData.token);

      // Navigate to admin dashboard
      navigate('/admindashboard');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to login. Please check your email and password.');
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Form</title>
      <div className="card">
        <h2>Login Form</h2>
        <div className="login_register">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/" className="register">
            Signup
          </Link>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login_btn">
            Login
          </button>
        </form>
        <Link to="#" className="fp">
          Forgot password?
        </Link>
        <div className="footer_card">
          <p>Not a member?</p>
          <Link to="/">Signup now</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
