import React from "react";

export default function OurService() {
  return (
    <div className="service-area service-style-3gg">
      {/* <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <span>We Provide the Best</span>
            <h2>Our Service</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="service-icon">
                <i className="fi flaticon-truck"></i>
              </div>
              <div className="service-text">
                <h3>Curbside Pickup/Delivery</h3>
                <p>There are many variations of passages of Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="service-icon">
                <i className="fi flaticon-ship-1"></i>
              </div>
              <div className="service-text">
                <h3>Document Pickup/Delivery</h3>
                <p>There are many variations of passages of Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item">
              <div className="service-icon">
                <i className="fi flaticon-plane"></i>
              </div>
              <div className="service-text">
                <h3>Packages Pickup/Delivery</h3>
                <p>There are many variations of passages of Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container">
        <div class="col-l2">
          <div class="section-title text-center">
            <span>We Provide the Best</span>
            <h2>Our Service</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="service-item">
              <div class="service-single">
                <div class="service-img">
                  <img src="assets/images/service/1.jpg" alt="" />
                </div>
                <div class="service-content">
                  <h3>Curbside Pickup/Delivery</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <a href="#">See More...</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="service-item">
              <div class="service-single">
                <div class="service-img">
                  <img src="assets/images/service/2.jpg" alt="" />
                </div>
                <div class="service-content service-content2">
                  <h3>Documents Pickup/Delivery</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <a href="#">See More...</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="service-item">
              <div class="service-single">
                <div class="service-img">
                  <img src="assets/images/service/3.jpg" alt="" />
                </div>
                <div class="service-content service-content3">
                  <h3>Packages Pickup/delivery</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <a href="#">See More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
