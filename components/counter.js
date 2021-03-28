import React from "react";

export default function Counter() {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="counter-content">
              <h2>Get More Sales With Turbo Delivery As Your Partner</h2>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.Many
                desktop publishing packages and web page editors now
              </p>
              <div className="btns">
                <div className="btn-style btn-style-3">
                  <a href="about-us">Learn More About Us...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="counter-grids">
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="110">
                      00
                    </span>
                  </h2>
                </div>
                <p>Delivered Packages</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="4">
                      00
                    </span>
                  </h2>
                </div>
                <p>Cities Covered</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="15">
                      00
                    </span>
                  </h2>
                </div>
                <p>Satisfied Clients</p>
              </div>
              <div className="grid">
                <div>
                  <h2>
                    <span className="odometer" data-count="200">
                      00
                    </span>
                  </h2>
                </div>
                <p>Distance Covered(km)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
