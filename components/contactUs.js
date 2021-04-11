import React, { Fragment } from "react";
import Navbar from "./navBar";

export default function ContactUs({ services }) {
  return (
    <Fragment>
      <Navbar />

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
              <h2>Be The First To Know</h2>
              <p>Enter Your name and email and be the first to know</p>
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
                          placeholder="Your Name"
                        />
                      </form>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                      <form>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
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
