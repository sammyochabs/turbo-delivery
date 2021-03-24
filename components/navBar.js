import React from "react";

export default function Navbar({ services }) {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 col-lg-6">
              <ul className="d-flex account_login-area">
                <li>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>Mon - Tues
                  : 6.00 am - 10.00 pm, Sunday Closed
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
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5 col-md-6">
                  <ul className="login-r">
                    <li>
                      <a href="/customer-login">Login </a>
                    </li>
                    <li>
                      <a href="/customer-register">Register</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area" id="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-9 col-sm-9 col-9">
              <div className="logo">
                <a href="index-2.html">
                  <img
                    className="logoImage"
                    src="assets/images/logo/logo.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
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

            <div className="col-12 d-block d-lg-none">
              <div className="mobile_menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
