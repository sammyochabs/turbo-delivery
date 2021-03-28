import React, { Fragment } from "react";
import Navbar from "./navBar";
import Banner from "./banner";
import Steps from "./Steps";
import WhyChooseUs from "./whyChooseUs";
import DispatcherFaq from "./dispatcherFaq";
import Footer from "./footer";

export default function Picker() {
  return (
    <Fragment>
      <Navbar />
      <div class="breadcumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcumb-wrap text-center">
                <h2>Become A Picker</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Steps picker={true} />
      <WhyChooseUs picker={true} />
      <DispatcherFaq />
      <Footer />
    </Fragment>
  );
}
