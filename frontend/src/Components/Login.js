import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [popup,setPopup]=useState({visible: false, message: ''})
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8009/api/login", { email, password });
      setPopup({
        visible: true,
        message:"Please wait while we login!"
      })
      setTimeout(()=>{
        setPopup({
          visivle:false,
          message:""
        })
      })
      console.log("Login Successful", response.data);
      sessionStorage.setItem("userId",response.data.userData._id)
      sessionStorage.setItem("token",response.data.userData.token)
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  

  return (
    <div className="login-container">
      <div className="container">
        <div className="login-box">
          <div className="login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="login-title">Login Page</div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-control-label">EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-control-label">PASSWORD</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-outline-secondary toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="loginbttm">
                <div className="login-text">
                  {error && <p className="error-message">{error}</p>}
                </div>
                <div className="login-button">
                  <button type="submit" className="btn btn-outline-primary">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-link">
            <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
