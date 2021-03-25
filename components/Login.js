import Head from "next/head";
import React, { Fragment } from "react";
import NavBar from "../components/navBar";

export default function Login({ picker }) {
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
                  {picker !== true
                    ? "Login To Your Customer Account"
                    : "Login To Your Picker Account"}
                </h2>
                <p className="text-light">
                  Login to your {picker === true ? "picker" : "customer"}{" "}
                  account by filling this form with your email, and password.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="contact-area contact-form-white">
                <h2> {picker !== true ? "Customer Login" : "Picker Log In"}</h2>
                <div className="contact-form">
                  <form
                    method="post"
                    className="contact-validation-active"
                    id="contact-form"
                  >
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
