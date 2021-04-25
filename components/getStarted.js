import React, { Fragment } from "react";
import NavBar from "./navBar";
import BreadCumb from "./breadCumb";
import Footer from "./footer";

export default function GetStarted() {
  return (
    <Fragment>
      <NavBar />
      <BreadCumb label={"Get Started"} />
      <div class="blog-page-area section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="blog-right-bar blog-right-bar-2">
                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="catagory-item">
                      <div class="widget-title">
                        <h3 class="text-left">Menu</h3>
                      </div>
                      <div class="category-section">
                        <nav className="nav_mobile_menu">
                          <ul>
                            <li className="active">
                              <a href="/">Home</a>
                            </li>
                            <li>
                              <a href="/about-us">About Us</a>
                            </li>
                            <li>
                              <a href="/how-it-works">How It Works</a>
                            </li>
                            <li>
                              <a href="/picker">Picker</a>
                            </li>
                            <li>
                              <a href="/contact-us">Contact</a>
                            </li>
                            <li>
                              <a href="/get-started">Get Started</a>
                            </li>
                            <li>
                              <a href="/services">Services</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12">
              <div class="blog-left-bar">
                <div class="blog-item">
                  <div class="blog-content-2">
                    <h2 className="text-center mt-4">Get Started</h2>
                    <div className="getStartedButtonsContainer d-flex flex-row justify-content-center align-items-center">
                      <div className="btns">
                        <div className="btn-style">
                          <a
                            className="getStartedLink"
                            href="/customer-register"
                          >
                            Become A Customer
                          </a>
                        </div>
                      </div>
                      <div className="btns">
                        <div className="btn-style">
                          <a className="getStartedLink" href="/picker-register">
                            Become A Picker
                          </a>
                        </div>
                      </div>
                    </div>
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
