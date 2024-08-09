import React from 'react'

function Client() {
  return (
    <>
    
    <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
    </div>
    <div className="container px-0">
      <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Morijorch
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Rochak
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box">
              <div className="client_info">
                <div className="client_name">
                  <h5>
                    Brad Johns
                  </h5>
                  <h6>
                    Default model text
                  </h6>
                </div>
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              </div>
              <p>
                Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
              </p>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="info_section  layout_padding2-top">
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
        <div className="info_container ">
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
                <div className="info_form ">
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
        <footer className=" footer_section">
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

export default Client
