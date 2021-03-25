import Head from "next/head";
import React, { Fragment } from "react";
import NavBar from "../components/navBar";

export default function SignUp({ picker }) {
  return (
    <Fragment>
      <div className="contact-page-area sign-up-area-bg section-padding">
        <div className="w-100 mb-5 d-flex flex-row justify-content-center signup-home-logo">
          <a href="/">
            <img src="/assets/images/logo/logo.png" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="contact-page-item ">
                <h2 className="text-light">
                  {picker !== true ? "Become A Customer" : "Become A Picker"}
                </h2>
                <p className="text-light">
                  Register and become a{" "}
                  {picker === true ? "picker" : "customer"} by filling this form
                  with your name, email, phone number, password and aggreing to
                  the terms and conditions. Please ensure that all your details
                  are correct.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="contact-area contact-form-white">
                <h2>
                  {" "}
                  {picker !== true ? "Customer Sign Up" : "Picker Sign Up"}
                </h2>
                <div className="contact-form">
                  <form
                    method="post"
                    className="contact-validation-active"
                    id="contact-form"
                  >
                    <div className="half-col">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="half-col">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        placeholder="Last Name"
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
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
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
                    <div className="w-100 ml-3 mb-3 agree-checkbox d-flex flex-row align-items-center">
                      <input type="checkbox" id="agree" />
                      <label htmlFor="agree" className="mt-2">
                        You agree to the terms and conditions by turbo
                        deliveries.
                      </label>
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
    </Fragment>
  );
}
