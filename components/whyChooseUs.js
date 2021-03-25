import React from "react";

export default function WhyChooseUs({ picker }) {
  return (
    <div className="service-area-wcu service-area service-s2">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>
              {" "}
              {picker === true
                ? "Why You Should Become Our Picker"
                : "Why Choose Us"}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="service-item">
              <div className="service-single">
                <div className="service-icon">
                  <i className="fi flaticon-truck"></i>
                </div>
                <h2>
                  {" "}
                  {picker === true
                    ? "Guaranteed Payments"
                    : "Guaranteed Delivery"}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo, obcaecati.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="service-item">
              <div className="service-single">
                <div className="service-icon">
                  <i className="fi flaticon-ship"></i>
                </div>
                <h2>
                  {" "}
                  {picker === true
                    ? "Very Competitive Salary"
                    : "Fast Response"}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo, obcaecati.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="service-item">
              <div className="service-single">
                <div className="service-icon">
                  <i className="fi flaticon-plane"></i>
                </div>
                <h2>
                  {" "}
                  {picker === true
                    ? "Flexible Working Hours"
                    : "Cost Effective"}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illo, obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
