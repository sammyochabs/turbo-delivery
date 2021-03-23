import React from "react";

export default function JoinUs() {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="assets/images/about/about.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 sec-p">
            <div className="about-content">
              <h2>Benefits You Enjoy As A Dispatcher</h2>
              <p>
                As a dispatcher for Turbo, You will enjoy these benefits and
                many more
              </p>
              <span>Very Competitive Pay</span>
              <span>Good Health Insurance For you and your family</span>
              <span>Annual working leave for You</span>
              <span>Very Competitive Pay</span>
              <span>Good Health Insurance For you and your family</span>
              <span>Annual working leave for You</span>
            </div>
          </div>
        </div>
        <div className="join-dispatch-div">
          <div className="btns">
            <div className="btn-style">
              <a href="/driver-register">Become A Dispatcher Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
