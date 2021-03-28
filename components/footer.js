import React from "react";

export default function Footer() {
  return (
    <div className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
              <div className="footer-logo">
                <img src="assets/images/logo/logo.png" alt="" />
              </div>
              <p>
                Turbo is a delivery service that ensures your goods get
                delivered intact, in time
              </p>
              <p>Turbo Delivery services</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
              <div className="footer-link">
                <h3>Quick Link</h3>
                <ul>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  {/* <li>
                    <a href="/testimonies">Testimonial</a>
                  </li> */}
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                  <li>
                    <a href="/customer-register">Sign Up</a>
                  </li>
                  <li>
                    <a href="/picker-register">Become A Picker</a>
                  </li>
                  <li>
                    <a href="/customer-register">Become A Customer</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-b">
              <div className="footer-link">
                <h3>Other Menu</h3>
                <ul>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  {/* <li>
                    <a href="/testimonies">Testimonial</a>
                  </li> */}
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms And Condition</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/cities">Cities Covered</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-b">
              <div className="footer-link">
                <h3>Connect With Us</h3>
                <div className="social">
                  <ul className="d-flex ">
                    <li>
                      <a className="footer-fa" href="#">
                        <i
                          className="fa orange-icon fa-facebook"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a className="footer-fa" href="#">
                        <i
                          className="fa orange-icon fa-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a className="footer-fa" href="#">
                        <i
                          className="fa orange-icon fa-linkedin"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
