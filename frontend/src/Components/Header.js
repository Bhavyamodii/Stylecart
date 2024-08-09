import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import './Header.scss'; // Make sure to include your styles

function Header() {
  const navigate = useNavigate();

  const logout = async () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <NavLink className="navbar-brand" to="/">
            <span>Giftos</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" end to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  Why Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testimonial">
                  Testimonial
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="user_option">
              <Link to="/login">
                <div className="nav-link" style={{ cursor: 'pointer' }}>
                  <i className="" aria-hidden="false"></i>
                  <b>Login</b>
                </div>
              </Link>
              <NavLink className="nav-link" to="/addToCart">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </NavLink>
              <form className="form-inline">
                {/* <button className="btn nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button> */}
              </form>
            </div>
          </div>
        </nav>
      </header>
      <button className="logout_button" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default Header;
