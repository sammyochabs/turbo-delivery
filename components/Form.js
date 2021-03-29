import React from "react";

export default function Form({ picker, login }) {
  return (
    <div className="contact-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="contact-page-item">
              <h2>
                {login === true ? "Login As A" : "Register As A"}
                {picker === true ? "Picker" : "Customer"}
              </h2>
              <p>
                Register with us by filling this form with your name,
                email,address,phone number, and password. Please make sure all
                your information are correct.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="contact-area">
              <h2>
                {picker === true ? "Picker " : "Customer "}
                {login === true ? "Login" : "Register"}
              </h2>
              <div className="contact-form">
                {login === true ? (
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
                  </form>
                ) : (
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
                        You agree to the
                        <a style={{
                          color: 'blue',
                          cursor: 'pointer'
                        }} href="/terms-and-conditions">
                          {" "}
                          terms and conditions
                        </a>{" "}
                        by turbo deliveries.
                      </label>
                    </div>
                    <div className="submit-btn-wrapper">
                      <button type="submit" className="theme-btn-s3">
                        Register
                      </button>
                      <div id="loader">
                        <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
