import React from 'react'
import './AdminDashboard.css'
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import news1 from '../assets/img/news-1.jpg'
import news2 from '../assets/img/news-2.jpg'
import news3 from '../assets/img/news-3.jpg'
import news4 from '../assets/img/news-4.jpg'
import news5 from '../assets/img/news-5.jpg'
import message1 from '../assets/img/messages-1.jpg'
import message2 from '../assets/img/messages-2.jpg'
import message3 from '../assets/img/messages-3.jpg'
import profile from '../assets/img/profile-img.jpg'
import product1 from '../assets/img/product-1.jpg'
import product2 from '../assets/img/product-2.jpg'
import product3 from '../assets/img/product-3.jpg'
import product4 from '../assets/img/product-4.jpg'
import product5 from '../assets/img/product-5.jpg'
import budget from '../assets/img/budget.png'
import chart from '../assets/img/chart.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Admindashboard() {
  const logout=async ()=>{
    sessionStorage.clear();
    window.location.reload()
   }
  return (

    <>
      {/* ======= Header ======= */}
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={logo} alt="" />
            <span className="d-none d-lg-block">Admin</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="/"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="/">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
                <i className="bi bi-bell" />
                <span className="badge bg-primary badge-number">4</span>

              </a>
              {/* End Notification Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="/">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger" />
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success" />
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary" />
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="/">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}
            <li className="nav-item dropdown">
              <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text" />
                <span className="badge bg-success badge-number">3</span>
              </a>
              {/* End Messages Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <a href="/">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="/">
                    <img
                      src={message1}
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="/">
                    <img
                      src={message2}
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="/">
                    <img
                      src={message3}
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="/">Show all messages</a>
                </li>
              </ul>
              {/* End Messages Dropdown Items */}
            </li>
            {/* End Messages Nav */}
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="/"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  K. Anderson
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear" />
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle" />
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="/">
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>

            </li>

          </ul>
        </nav>

      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Users
            </button>
            
            <ul className="dropdown-menu">
              <li><Link to="/allUsers" className="dropdown-item">View All Users</Link></li>

            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </button>

           
            <ul className="dropdown-menu">
              <li><Link to="/allProducts" className="dropdown-item">View All Product</Link></li>
              <li><Link to="/addProduct" className="dropdown-item">Add Product</Link></li>
    <li className="dropdown-item"  onClick={logout}>Logout
    
    </li>


            </ul>
          </div>
        </ul>
      </aside>

      <button className="btn-getstarted" href="index.html/about" onClick={logout}>
      Logout
    </button>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row">
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Sales <span>| Today</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart" />
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                          <span className="text-success small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sales Card */}
                {/* Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Revenue <span>| This Month</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar" />
                        </div>
                        <div className="ps-3">
                          <h6>$3,264</h6>
                          <span className="text-success small pt-1 fw-bold">
                            8%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Revenue Card */}
                {/* Customers Card */}
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Customers <span>| This Year</span>
                      </h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people" />
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Customers Card */}
                {/* Reports */}
                <div className="col-12">
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Reports <span>/Today</span>
                      </h5>
                      {/* Line Chart */}
                      <div id="reportsChart" />
                      {/* End Line Chart */}
                    </div>
                  </div>
                </div>
                {/* End Reports */}
                {/* Recent Sales */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Recent Sales <span>| Today</span>
                      </h5>
                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">/</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="/">/2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="/" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="/" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="/" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="/" className="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="/" className="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Recent Sales */}
                {/* Top Selling */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <a className="icon" href="/" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Month
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            This Year
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Top Selling <span>| Today</span>
                      </h5>
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="/">
                                <img src={product1} alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="/" className="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                              </a>
                            </td>
                            <td>$64</td>
                            <td className="fw-bold">124</td>
                            <td>$5,828</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">
                                <img src={product2} alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="/" className="text-primary fw-bold">
                                Exercitationem similique doloremque
                              </a>
                            </td>
                            <td>$46</td>
                            <td className="fw-bold">98</td>
                            <td>$4,508</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">
                                <img src={product3} alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="/" className="text-primary fw-bold">
                                Doloribus nisi exercitationem
                              </a>
                            </td>
                            <td>$59</td>
                            <td className="fw-bold">74</td>
                            <td>$4,366</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">
                                <img src={product4} alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="/" className="text-primary fw-bold">
                                Officiis quaerat sint rerum error
                              </a>
                            </td>
                            <td>$32</td>
                            <td className="fw-bold">63</td>
                            <td>$2,016</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">
                                <img src={product5} alt="" />
                              </a>
                            </th>
                            <td>
                              <a href="/" className="text-primary fw-bold">
                                Sit unde debitis delectus repellendus
                              </a>
                            </td>
                            <td>$79</td>
                            <td className="fw-bold">41</td>
                            <td>$3,239</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* End Top Selling */}
              </div>
            </div>
            {/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4">
              {/* Recent Activity */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Quia quae rerum{" "}
                        <a href="/" className="fw-bold text-dark">
                          explicabo officiis
                        </a>{" "}
                        beatae
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                      <div className="activity-content">
                        Tempore autem saepe{" "}
                        <a href="/" className="fw-bold text-dark">
                          occaecati voluptatem
                        </a>{" "}
                        tempore
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>
                    {/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                      </div>
                    </div>
                    {/* End activity item*/}
                  </div>
                </div>
              </div>
              {/* End Recent Activity */}
              {/* Budget Report */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0 text-center"> {/* Added 'text-center' class */}
                  <h5 className="card-title">
                    Budget Report <span>| This Month</span>
                  </h5>
                  <a href="/">
                    <img src={budget} alt="" className="img-fluid" /> {/* Added 'img-fluid' class */}
                  </a>
                  <div
                    id="budgetChart"
                    style={{ minHeight: 50 }}
                    className="echart"
                  />
                </div>
              </div>


              {/* End Budget Report */}
              {/* Website Traffic */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                  
                    <li>
                      <a className="dropdown-item" href="/">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Website Traffic <span>| Today</span>
                  </h5>
                  <a href="/">
                    <img src={chart} alt="" className="img-fluid" /> {/* Added 'img-fluid' class */}
                  </a>
                  <div
                    id="trafficChart"
                    style={{ minHeight: 50 }}
                    className="echart"
                  />
                </div>
              </div>
              {/* End Website Traffic */}
              {/* News & Updates Traffic */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="/" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    News &amp; Updates <span>| Today</span>
                  </h5>
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src={news1} alt="" />
                      <h4>
                        <a href="/">Nihil blanditiis at in nihil autem</a>
                      </h4>
                      <p>
                        Sit recusandae non aspernatur laboriosam. Quia enim eligendi
                        sed ut harum...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src={news2} alt="" />
                      <h4>
                        <a href="/">Quidem autem et impedit</a>
                      </h4>
                      <p>
                        Illo nemo neque maiores vitae officiis cum eum turos elan
                        dries werona nande...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src={news3} alt="" />
                      <h4>
                        <a href="/">
                          Id quia et et ut maxime similique occaecati ut
                        </a>
                      </h4>
                      <p>
                        Fugiat voluptas vero eaque accusantium eos. Consequuntur sed
                        ipsam et totam...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src={news4} alt="" />
                      <h4>
                        <a href="/">Laborum corporis quo dara net para</a>
                      </h4>
                      <p>
                        Qui enim quia optio. Eligendi aut asperiores enim
                        repellendusvel rerum cuder...
                      </p>
                    </div>
                    <div className="post-item clearfix">
                      <img src={news5} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <p>
                        Odit ut eveniet modi reiciendis. Atque cupiditate libero
                        beatae dignissimos eius...
                      </p>
                    </div>
                  </div>
                  {/* End sidebar recent posts*/}
                </div>
              </div>
              {/* End News & Updates */}
            </div>
            {/* End Right side columns */}
          </div>
        </section>
      </main>
      {/* End /main */}
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>
      {/* End Footer */}
    </>


  )
}

export default Admindashboard
