import Head from "next/head";
import { Fragment } from "react";
import Banner from "../components/banner";
import Faq from "../components/faq";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import Stepper from "../components/stepper";
import Testimonial from "../components/testimonial";
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
      <Stepper />
      <Faq />
      <Testimonial />
      <Footer />
    </Fragment>
  );
}
