import React from "react";

export default function ContactUs({ services }) {
  return (
    <div>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12 col-lg-6">
                <ul className="d-flex account_login-area">
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>Mon -
                    Fri : 6.00 am - 10.00 pm, Sunday Closed
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-12 col-lg-6">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <ul className="d-flex header-social">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <ul className="login-r">
                      <li>
                        <a href="/customer-login">Login</a>
                      </li>
                      <li>
                        <a href="customer-register">Register</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-top header-top-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="logo">
                  <a href="index-2.html">
                    <img src="assets/images/logo/logo-2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-9 col-sm-12 col-12 col-lg-9">
                <ul className="d-flex account_login-area">
                  <li className="account-item">
                    <img src="assets/images/icon/call.svg" alt="" />
                    <h5>
                      <span>Call Us Now</span>+234 090 9000 000{" "}
                    </h5>
                  </li>
                  <li className="account-item account-item-2">
                    <img src="assets/images/icon/message.svg" alt="" />
                    <h5>
                      <span>Mail Us Today</span>turbo@gmail.com
                    </h5>
                  </li>
                  <li className="account-item">
                    <img src="assets/images/icon/map.svg" alt="" />
                    <h5>
                      <span>Company Location</span>1230 Turbo Street, Lagos
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-area header-style-2">
          <div className="header-sub" id="sticky-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav className="nav_mobile_menu">
                      <ul>
                        <li className="active">
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        {services ? (
                          <li>
                            <a href="#">TOP CITIES</a>
                            <ul className="submenu">
                              <li>
                                <a href="#">Lagos</a>
                              </li>
                              <li>
                                <a href="#">Ibadan</a>
                              </li>
                              <li>
                                <a href="#">Oyo</a>
                              </li>
                              <li>
                                <a href="#">Ogun</a>
                              </li>
                              <li>
                                <a href="#">Ondo</a>
                              </li>
                              <li>
                                <a href="#">Abuja</a>
                              </li>
                              <li>
                                <a href="#">P/harcourt</a>
                              </li>
                              <li>
                                <a href="ocean.html">Ekiti</a>
                              </li>
                            </ul>
                          </li>
                        ) : (
                          <li>
                            <a href="/services">Services</a>
                            <ul className="submenu">
                              <li>
                                <a href="#">Land Transport</a>
                              </li>
                              <li>
                                <a href="#">Logistics Solutions</a>
                              </li>
                              <li>
                                <a href="#">Packaging And Store</a>
                              </li>
                              <li>
                                <a href="#">Ocean Freight</a>
                              </li>
                            </ul>
                          </li>
                        )}

                        <li>
                          <a href="/testimonies">Testimonies</a>
                        </li>
                        <li>
                          <a href="/contact-us">Contact</a>
                        </li>
                        <li>
                          <a href="/become-a-dispatcher">Become A Dispatcher</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-12 col-sm-11 col-md-9 d-block d-lg-none">
                  <div className="mobile_menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcumb-wrap text-center">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="contact-page-item">
                <h2>Our Contacts</h2>
                <p>You can Contact us via various channels</p>
                <div className="adress">
                  <h3>Address</h3>
                  <span>245 King Street, Touterie Victoria 8520 Australia</span>
                </div>
                <div className="phone">
                  <h3>Phone</h3>
                  <span>0-123-456-7890</span>
                  <span>0-123-456-7890</span>
                </div>
                <div className="email">
                  <h3>Email</h3>
                  <span>sample@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="contact-area">
                <h2>Quick Contact Form</h2>
                <div className="contact-form">
                  <form
                    method="post"
                    className="contact-validation-active"
                    id="contact-form"
                  >
                    <div className="half-col">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control"
                        name="note"
                        id="note"
                        placeholder="Case Description..."
                      ></textarea>
                    </div>
                    <div className="submit-btn-wrapper">
                      <button type="submit" className="theme-btn-s3">
                        Send
                      </button>
                      <div id="loader">
                        <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                      </div>
                    </div>
                    <div className="clearfix error-handling-messages">
                      <div id="success">Thank you</div>
                      <div id="error">
                        {" "}
                        Error occurred while sending email. Please try again
                        later.{" "}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
