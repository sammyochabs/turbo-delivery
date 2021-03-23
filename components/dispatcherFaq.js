import React from "react";

export default function DispatcherFaq() {
  return (
    <div className="service-area service-s2">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
        </div>
        <div className="row">
          <div className="container py-3">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="accordion" id="faqExample">
                  <div className="card">
                    <div className="card-header p-2" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How much do i get paid
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        Your salary will depend on how much experience you have,
                        and how much goods you dispatch per week
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-2" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Will i pay an application fee?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        No. application to become a dispatcher at turbo is
                        totally free
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-2" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Do i need to work with my personal vehicle?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        No. Turbo will provide an official dispatch vehicle to
                        you
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-2" id="headingFour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Do i get benefits as a dispatcher?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        Turbo gives you alot of benefits as a dispatcher
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
