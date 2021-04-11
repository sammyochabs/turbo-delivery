import React, { Fragment } from "react";
import NavBar from "./navBar";
import BreadCumb from "./breadCumb";
import Footer from "./footer";

export default function CitiesCovered() {
  return (
    <Fragment>
      <NavBar />
      <BreadCumb label={"Cities We Cover"} />

      {/* <div className="container">
        <h2 className="text-center">These Are The Cities We Cover</h2>
        <p>
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action active"
            >
              Cities We cover
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Vancouver
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Washington
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Califonia
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              disabled
            >
              New York
            </button>
          </div>
        </p>
      </div> */}
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
                        <ul>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about-us">About</a>
                          </li>
                          <li>
                            <a href="/services">Services</a>
                          </li>

                          <li>
                            <a href="/contact-us">Contact</a>
                          </li>
                          <li>
                            <a href="/picker">Picker</a>
                          </li>
                          <li>
                            <a href="/customer-register">Become A Customer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12">
              <div class="blog-left-bar">
                <div class="blog-item">
                  <div className="container">
                    <h2 className="text-center mb-4">
                      These Are The Cities We Cover
                    </h2>
                    <p>
                      <div className="list-group">
                        <button
                          type="button"
                          className="list-group-item list-group-item-action active"
                        >
                          Cities We cover
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Vancouver
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Washington
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Califonia
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                          disabled
                        >
                          New York
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Vancouver
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Washington
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Califonia
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                          disabled
                        >
                          New York
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Vancouver
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Washington
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                        >
                          Califonia
                        </button>
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                          disabled
                        >
                          New York
                        </button>
                      </div>
                    </p>
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
