import React, { Fragment } from "react";
import Navbar from "./navBar";

export default function OurServices() {
  return (
    <Fragment>
      <Navbar />

      <div class="breadcumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcumb-wrap text-center">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-area section-style-2 section-style-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-9 col-sm-12 col-d c-pd">
              <div class="section-wrap">
                <div class="section-item-2">
                  <div class="section-icon">
                    <i class="fi flaticon-ship"></i>
                  </div>
                  <div class="section-content">
                    <p>Curbside Pickup/Delivery</p>
                    <span>we offer Curbside Pickup and delivery services</span>
                  </div>
                </div>
                <div class="section-item-2">
                  <div class="section-icon">
                    <i class="fi flaticon-truck"></i>
                  </div>
                  <div class="section-content">
                    <p>Document Pickup/Delivery</p>
                    <span>we offer Document Pickup and delivery services</span>
                  </div>
                </div>
                <div class="section-item-2">
                  <div class="section-icon">
                    <i class="fi flaticon-plane"></i>
                  </div>
                  <div class="section-content">
                    <p>packages Pickup/Delivery</p>
                    <span>we offer Packages Pickup and delivery services</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="tr-wrap">
                <div class="t-text">
                  <h2>Turbo Delivery Services</h2>
                  <p>
                    We Provide you the best service in the world.It is a long
                    established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English.
                  </p>
                </div>
                <div class="tr-s">
                  <span>
                    Ipsum is that it has a more-or-less normal distribution of
                    letters
                  </span>
                  <span>
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution{" "}
                  </span>
                  <span>We Provide you the best service in the world.</span>
                  <span>
                    It is a long established fact that a reader will be
                    distracted by the readable{" "}
                  </span>
                  <span>normal distribution of letters, as opposed </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
