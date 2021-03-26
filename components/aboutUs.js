import React, { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navBar";

export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />

      <div class="breadcumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcumb-wrap text-center">
                <h2>Turbo Delivery</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="Freight-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-12">
              <div class="row">
                <div class="col-lg-12 col-md-6">
                  <div class="contact-us-area">
                    <h3>Contuct Us</h3>
                    <div class="contact-s">
                      <span>
                        <i class="fa fa-phone" aria-hidden="true"></i>Call Us
                      </span>
                      <p>Tel: +555 965 325</p>
                    </div>
                    <div class="contact-s">
                      <span>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>Email
                        Us
                      </span>
                      <p>youremail@gmail.com</p>
                    </div>
                    <div class="contact-s">
                      <span>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>Our
                        Location
                      </span>
                      <p>123 Banena Street, London</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-6">
                  <div class="catagory-item">
                    <div class="widget-title">
                      <h3 class="text-left">Message Us</h3>
                    </div>
                    <div class="category-section">
                      <div className="contact-form">
                        <form
                          method="post"
                          className="contact-validation-active "
                          id="contact-form"
                        >
                          <div className="half-col ">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="half-col mt-2">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="half-col mt-2">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              className="form-control"
                              placeholder="Your Address"
                            />
                          </div>
                          <div className="mt-2">
                            <textarea
                              className="form-control "
                              name="note"
                              id="note"
                              placeholder="Whats Your Message..."
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
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="Freight-item">
                <h3>Turbo Delivery</h3>
                <p>
                  We Provide you the best service in the world.It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <img src="assets/images/air/1.jpg" alt="" />
                <p>
                  We Provide you the best service in the world.It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.{" "}
                </p>
                <div class="Freight-s">
                  <div class="Freight-img">
                    <img src="assets/images/air/2.jpg" alt="" />
                  </div>
                  <div class="f-s">
                    <span>
                      Ipsum is that it has a more-or-less normal distribution
                    </span>
                    <span>
                      The point of using Lorem Ipsum is that it has any probl
                    </span>
                    <span>We Provide you the best service in the world.</span>
                    <span>
                      It is a long established fact that a reader will do this
                    </span>
                    <span>Normal distribution of letters, as opposed</span>
                    <span>We can ensure your delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
