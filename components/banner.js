import React, { Fragment } from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="hero hero-slider-wrapper hero-style-1 hero-style-2">
      <div className="hero-slider">
        <div className="slide">
          <Image
            src="/assets/images/slider/1.jpg"
            alt=""
            className="slider-bg"
            layout="fill"
          />
          <div className="container">
            <div className="row">
              <div className="col col-lg-9 slide-caption">
                <h2>
                  <span>Turbo Provides the Best Solution</span>{" "}
                  <span>For Your Transport.</span>
                </h2>
                <div className="btns">
                  <div className="btn-style">
                    <a href="#">Contact us now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <Image
            src="/assets/images/slider/2.jpg"
            alt=""
            className="slider-bg"
            layout="fill"
          />
          <div className="container">
            <div className="row">
              <div className="col col-lg-9 slide-caption">
                <h2>
                  <span>Turbo Provides the Best Solution</span>{" "}
                  <span>For Your Transport.</span>
                </h2>
                <div className="btns">
                  <div className="btn-style">
                    <a href="#">Contact us now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <Image
            src="/assets/images/slider/3.jpg"
            alt=""
            className="slider-bg"
            layout="fill"
          />
          <div className="container">
            <div className="row">
              <div className="col col-lg-9 slide-caption">
                <h2>
                  <span>Turbo Provides the Best Solution</span>{" "}
                  <span>For Your Transport.</span>
                </h2>
                <div className="btns">
                  <div className="btn-style">
                    <a href="#">Contact us now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <Image
            src="/assets/images/slider/4.jpg"
            alt=""
            className="slider-bg"
            layout="fill"
          />
          <div className="container">
            <div className="row">
              <div className="col col-lg-9 slide-caption">
                <h2>
                  <span>Turbo Provides the Best Solution</span>{" "}
                  <span>For Your Transport.</span>
                </h2>
                <div className="btns">
                  <div className="btn-style">
                    <a href="#">Contact us now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
