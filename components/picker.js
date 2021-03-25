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
      <Banner picker={true} />
      <Steps picker={true} />
      <WhyChooseUs picker={true} />
      <DispatcherFaq />
      <Footer />
    </Fragment>
  );
}
