import React from "react";

export default function Faq() {
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
              <div className="col-lg-10 col-md-12 mx-auto">
                <div className="accordion" id="faqExample">
                  <div className="card">
                    <div className="card-header p-2" id="headingOne">
                      <h5 className="mb-0">
                        <div
                          className="faq-div btn-link collapsed text-wrap"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is Turbo
                        </div>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        Turbo is a delivery service that moves your goods from
                        one location to another
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-2" id="headingTwo">
                      <h5 className="mb-0">
                        <div
                          className="faq-div btn-link collapsed text-wrap"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How much does turbo charge
                        </div>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        It depends on the weight of your goods
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-2" id="headingThree">
                      <h5 className="mb-0">
                        <div
                          className="faq-div btn-link collapsed text-wrap"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What locations does turbo cover
                        </div>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        Turbo covers locations all over the country
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-2" id="headingFour">
                      <h5 className="mb-0">
                        <div
                          className="faq-div btn-link collapsed text-wrap"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Is turbo fast?
                        </div>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">Turbo is very fast</div>
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
