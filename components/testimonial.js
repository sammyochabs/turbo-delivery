import React from "react";

export default function Testimonial() {
  return (
    <div className="testimonials-clean">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Testimonials </h2>
          <p className="text-center">
            Our customers love us! Read what they have to say below. these are
            proofs that we always deliver
          </p>
        </div>
        <div className="row people">
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Turbo is avery fast, safe and nice delivery service, they
                delivered my goods in no time
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="assets/images/testimonial/2.jpg"
              />
              <h5 className="name">Ben Johnson</h5>
              <p className="title">CEO of Company Inc.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Turbo is avery fast, safe and nice delivery service, they
                delivered my goods in no time
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="assets/images/testimonial/2.jpg"
              />
              <h5 className="name">Carl Kent</h5>
              <p className="title">Founder of Style Co.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 item">
            <div className="box">
              <p className="description">
                Turbo is avery fast, safe and nice delivery service, they
                delivered my goods in no time
              </p>
            </div>
            <div className="author">
              <img
                className="rounded-circle"
                src="assets/images/testimonial/2.jpg"
              />
              <h5 className="name">Emily Clark</h5>
              <p className="title">Owner of Creative Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
