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
              <div className="social">
                <ul className="d-flex">
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
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
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
                    <a href="/picker">Picker</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 footer-b">
              <div className="Recent-News-area">
                <h3>Recent News</h3>
                <div className="resent-sub">
                  <p>Turbo wins the best delivery start up</p>
                  <span>
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Octobor
                    10, 2018
                  </span>
                </div>
                <p>Turbo wins the best delivery start up</p>
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> Octobor
                  10, 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
