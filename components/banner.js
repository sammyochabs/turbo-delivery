import React, { Fragment } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Banner({ picker }) {
  return (
    <Fragment>
      {picker === true ? (
        <section className="hero hero-slider-wrapper hero-style-1 hero-style-2">
          <div className="hero-slider"></div>
        </section>
      ) : (
        <section className="hero hero-slider-wrapper hero-style-1 hero-style-2">
          <div className="hero-slider">
            <div className="slide">
              <img
                src="assets/images/slider/2.jpg"
                alt="true"
                className="slider-bg"
              />
              <div className="container">
                <div className="row">
                  <div className="col col-lg-9 slide-caption">
                    <h2>
                      <span>We Provide the Best Solution</span>{" "}
                      <span>For Your Transport.</span>
                    </h2>
                    <div className="slider-btn-div">
                      <div className="btns">
                        <div className="btn-style">
                          <a href="/customer-register">Become A Customer</a>
                        </div>
                      </div>
                      <div className="btns">
                        <div className="btn-style">
                          <a href="driver-register">Become A Picker</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <img
                src="assets/images/slider/3.jpg"
                alt="true"
                className="slider-bg"
              />
              <div className="container">
                <div className="row">
                  <div className="col col-lg-9 slide-caption">
                    <h2>
                      <span>We Offer The Best delivery Service </span>{" "}
                      <span>You can Imagine</span>
                    </h2>
                    <div className="slider-btn-div">
                      <div className="btns">
                        <div className="btn-style">
                          <a href="/customer-register">Become A Customer</a>
                        </div>
                      </div>
                      <div className="btns">
                        <div className="btn-style">
                          <a href="driver-register">Become A Picker</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <img
                src="assets/images/slider/4.jpg"
                alt="true"
                className="slider-bg"
              />
              <div className="container">
                <div className="row">
                  <div className="col col-lg-9 slide-caption">
                    <h2>
                      <span>With Us, You get The Best Value</span>{" "}
                      <span>For Your Money.</span>
                    </h2>
                    <div className="slider-btn-div">
                      <div className="btns">
                        <div className="btn-style">
                          <a href="/customer-register">Become A Customer</a>
                        </div>
                      </div>
                      <div className="btns">
                        <div className="btn-style">
                          <a href="driver-register">Become A Picker</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}
