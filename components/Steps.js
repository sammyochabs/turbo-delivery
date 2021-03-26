import React from "react";

export default function Steps({ picker }) {
  return (
    <div className="section-area section-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-d">
            <div className="section-item-2">
              <div className="section-icon">
                <i className="bi bi-person-lines-fill"></i>
              </div>
              <div className="section-content">
                <p>
                  <a href="ocean.html">
                    {picker === true ? "Get Paid Quickly" : "Create An Account"}
                  </a>
                </p>
                <span>
                  There are many variations of passages of Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-d">
            <div className="section-item-2">
              <div className="section-icon">
                <i class="bi bi-telephone-outbound"></i>
              </div>
              <div className="section-content">
                <p>
                  {" "}
                  <a href="road.html">
                    {" "}
                    {picker === true ? "Very Good Salary" : "Place Your Order"}
                  </a>
                </p>
                <span>
                  There are many variations of passages of Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-d">
            <div className="section-item-2">
              <div className="section-icon">
                <i className="fi flaticon-truck"></i>
              </div>
              <div className="section-content">
                <p>
                  {" "}
                  <a href="Freight.html">
                    {" "}
                    {picker === true
                      ? "Flexible Hours"
                      : "We Pick-Up & Deliver"}
                  </a>
                </p>
                <span>
                  There are many variations of passages of Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
