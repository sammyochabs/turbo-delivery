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
                          Who is a picker
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
                        A picker is someone who picks up and delivers items for
                        customers
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
                          How much do i get paid
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
                        It depends on how hard you work
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
                          Are the working hours flexible?
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
                        The working hours are very flexible
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
                          Must i have my own delivery vehicle to work on turbo?
                        </div>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#faqExample"
                    >
                      <div className="card-body">
                        No, we have vehicles for that
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
