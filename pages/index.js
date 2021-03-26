import Head from "next/head";
import { Fragment } from "react";
import Banner from "../components/banner";
import Benefits from "../components/benefits";
import Counter from "../components/counter";
import Faq from "../components/faq";
import Footer from "../components/footer";
import InstantDelivery from "../components/instantDelivery";
import NavBar from "../components/navBar";
import OurService from "../components/our-services";
import ParnerWithUs from "../components/parnerWithUs";
import Stepper from "../components/stepper";
import Steps from "../components/Steps";
import Testimonial from "../components/testimonial";
import WhyChooseUs from "../components/whyChooseUs";
import Partners from "../components/partners";
import styles from "../styles/Home.module.css";

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
      <ParnerWithUs />
      <WhyChooseUs />
      <Counter />
      <Faq />
      {/* <Testimonial /> */}
      <Partners />
      <Footer />
    </Fragment>
  );
}
