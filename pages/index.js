import Head from "next/head";
import { Fragment } from "react";
import Banner from "../components/banner";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import InstantDelivery from "../components/instantDelivery";
import NavBar from "../components/navBar";
import OurService from "../components/our-services";
import OurServices from "../components/ourServices";
import Steps from "../components/Steps";
import WhyChooseUs from "../components/whyChooseUs";

export default function HomePage() {
  return (
    <Fragment>
      <div className="page-loader">
        <div className="page-loader-inner">
          <div className="inner"></div>
        </div>
      </div>
      <NavBar />
      <Banner />
      <Steps />
      <InstantDelivery />
      <OurService />

      <Benefits />
      {/* <ParnerWithUs /> */}
      <WhyChooseUs />
      {/* <Counter /> */}
      {/* <Faq /> */}
      {/* <Testimonial /> */}
      {/* <Partners /> */}
      {/* <AutoPlay /> */}
      <Footer />
    </Fragment>
  );
}
