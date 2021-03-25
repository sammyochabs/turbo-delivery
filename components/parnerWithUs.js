import React from "react";

export default function ParnerWithUs() {
  return (
    <section className="track-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="track">
              <h3>Like To Partner With Us? Let Us Call You Back.</h3>
              <div className="tracking-form">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </form>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <form>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </form>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </form>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <button type="submit">Submit</button>
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
