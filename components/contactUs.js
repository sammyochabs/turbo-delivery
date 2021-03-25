import React, { Fragment } from "react";

export default function ContactUs({ services }) {
  return (
    <Fragment>
      <header>
        <div class="header-top">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12 col-12 col-lg-6">
                <ul class="d-flex account_login-area">
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>Mon - Sun
                    8.00 am - 10.00 pm
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-sm-12 col-12 col-lg-6">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <ul class="d-flex header-social">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <ul class="login-r">
                      <li>
                        <a href="/customer-login">Login</a>
                      </li>
                      <li>
                        <a href="picker-register">Become A Picker</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-top header-top-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                <div class="logo">
                  <a href="index-2.html">
                    <img src="assets/images/logo/logo-2.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-md-9 col-sm-12 col-12 col-lg-9">
                <ul class="d-flex account_login-area">
                  <li class="account-item">
                    <img src="assets/images/icon/call.svg" alt="" />
                    <h5 className="text-light">
                      <span className="text-light">Call Us Now</span>T+(008)
                      001-234-567{" "}
                    </h5>
                  </li>
                  <li class="account-item account-item-2">
                    <img src="assets/images/icon/message.svg" alt="" />
                    <h5 className="text-light">
                      <span className="text-light">Mail Us Today</span>
                      youremail@gmail.com
                    </h5>
                  </li>
                  <li class="account-item">
                    <img src="assets/images/icon/map.svg" alt="" />
                    <h5 className="text-light">
                      <span className="text-light">Company Location</span>1230
                      Banena Street, London
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="header-area header-style-2">
          <div class="header-sub" id="sticky-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 d-none d-lg-block">
                  <div class="main-menu">
                    <nav class="nav_mobile_menu">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about-us">About</a>
                        </li>
                        <li>
                          <a href="/services">About</a>
                        </li>
                        <li>
                          <a href="/testimonies">Testimonies</a>
                        </li>
                        <li>
                          <a href="/picker">Picker</a>
                        </li>
                        <li>
                          <a href="/customer-register">Become A Customer</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="col-lg-2 col-md-4 col-sm-6 col-6">
                  <div class="btn-style btn-style2">
                    <a href="#">Request a Quote</a>
                  </div>
                </div>
                <div class="col-12 col-sm-11 col-md-9 d-block d-lg-none">
                  <div class="mobile_menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="breadcumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcumb-wrap text-center">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-page-area section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12">
              <div class="contact-page-item">
                <h2>Our Contacts</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <div class="adress">
                  <h3>Address</h3>
                  <span>245 King Street, Touterie Victoria 8520 Australia</span>
                </div>
                <div class="phone">
                  <h3>Phone</h3>
                  <span>0-123-456-7890</span>
                  <span>0-123-456-7890</span>
                </div>
                <div class="email">
                  <h3>Email</h3>
                  <span>sample@gmail.com</span>
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="contact-area">
                <h2>Quick Contact Form</h2>
                <div class="contact-form">
                  <form
                    method="post"
                    class="contact-validation-active"
                    id="contact-form"
                  >
                    <div class="half-col">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="half-col">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div class="half-col">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        class="form-control"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div class="half-col">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div>
                      <textarea
                        class="form-control"
                        name="note"
                        id="note"
                        placeholder="Case Description..."
                      ></textarea>
                    </div>
                    <div class="submit-btn-wrapper">
                      <button type="submit" class="theme-btn-s3">
                        Send
                      </button>
                      <div id="loader">
                        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                      </div>
                    </div>
                    <div class="clearfix error-handling-messages">
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

      <section class="newsletter-section newsletter-section-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <h2>Subscribe Our Newsletter</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
            <div class="col-lg-8">
              <div class="newsletter">
                <div class="newsletter-form">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6">
                      <form>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </form>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                      <form>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tracking Number"
                        />
                      </form>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6">
                      <button type="submit">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
