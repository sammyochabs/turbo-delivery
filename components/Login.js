import Head from "next/head";
import React, { Fragment } from "react";
import NavBar from "../components/navBar";

export default function Login({ driver }) {
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
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">
                      {!driver ? "Customer Log In" : "Driver Log In"}
                    </h4>
                    <form
                      method="POST"
                      className="my-login-validation"
                      novalidate=""
                    >
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

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Dont have an account yet?{" "}
                        <a
                          href={
                            driver ? "/driver-register" : "/customer-register"
                          }
                        >
                          Register
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
