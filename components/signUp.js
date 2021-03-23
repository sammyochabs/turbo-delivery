import Head from "next/head";
import React, { Fragment } from "react";
import NavBar from "../components/navBar";

export default function SignUp({ driver }) {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/my-login.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        ></link>
      </Head>
      {/* <NavBar /> */}
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">
                      {!driver ? "Customer Sign Up" : "Driver Sign Up"}
                    </h4>
                    <form
                      method="POST"
                      className="my-login-validation"
                      novalidate=""
                    >
                      <div className="form-group">
                        <label for="name">First Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="firstName"
                          required
                          autofocus
                        />
                        <div className="invalid-feedback">First Name</div>
                      </div>
                      <div className="form-group">
                        <label for="name">Last Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="lastName"
                          required
                          autofocus
                        />
                        <div className="invalid-feedback">Last Name</div>
                      </div>

                      <div className="form-group">
                        <label for="email">E-Mail Address</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          required
                        />
                        <div className="invalid-feedback">
                          Your email is invalid
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="password">Phone</label>
                        <input
                          id="phone"
                          type="number"
                          className="form-control"
                          name="phone"
                          required
                          data-eye
                        />
                        <div className="invalid-feedback">
                          Enter Your Phone Number
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          required
                          data-eye
                        />
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className="custom-control-input"
                            required=""
                          />
                          <label for="agree" className="custom-control-label">
                            I agree to the <a href="#">Terms and Conditions</a>
                          </label>
                          <div className="invalid-feedback">
                            You must agree with our Terms and Conditions
                          </div>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Already have an account?{" "}
                        <a href={driver ? "/driver-login" : "/customer-login"}>
                          Login
                        </a>
                      </div>
                      <div className="mt-4 text-center">
                        <a href="/">Back To Home</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
