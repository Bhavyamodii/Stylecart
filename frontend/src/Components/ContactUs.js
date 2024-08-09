import React from 'react'

function ContactUs() {
  return (
    <> 
    
    <section className="contact_section">
  <div className="container px-0">
    <div className="heading_container">
      <h2 className="heading_center">Contact Us</h2>
    </div>
  </div>
  <div className="container container-bg">
    <div className="row">
      <div className="col-lg-7 col-md-6 px-0">
        <div className="map_container">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
              width={600}
              height={300}
              frameBorder={0}
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-5 px-0">
        <form action="#">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Phone" />
          </div>
          <div>
            <input
              type="text"
              className="message-box"
              placeholder="Message"
            />
          </div>
          <div className="d-flex">
            <button>SEND</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
<section className="info_section layout_padding2-top">
  <div className="social_container">
    <div className="social_box">
      <a href="">
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
      <a href="">
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
      <a href="">
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
      <a href="">
        <i className="fa fa-youtube" aria-hidden="true" />
      </a>
    </div>
  </div>
  <div className="info_container">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <h6>ABOUT US</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doLorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_form">
            <h5>Newsletter</h5>
            <form action="#">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6>NEED HELP</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doLorem ipsum dolor sit amet,
          </p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6>CONTACT US</h6>
          <div className="info_link-box">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <span> Gb road 123 london Uk </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>+01 12345678901</span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span> demo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <p>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
  {/* footer section */}
</section>
</>
    )
}

export default ContactUs
