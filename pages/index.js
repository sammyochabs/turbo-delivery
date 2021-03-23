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
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/assets/images/icon.png"
        />

        <title> Turbo delivery </title>

        <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" />

        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />

        <link href="/assets/css/animate.css" rel="stylesheet" />
        <link href="/assets/css/owl.carousel.css" rel="stylesheet" />
        <link href="/assets/css/odometer-theme-default.css" rel="stylesheet" />
        <link href="/assets/css/slick.css" rel="stylesheet " />
        <link href="/assets/css/slick-theme.css" rel="stylesheet" />
        <link href="/assets/css/slicknav.min.css" rel="stylesheet" />
        <link href="/assets/css/jquery.fancybox.css" rel="stylesheet" />

        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />

        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      </Head>
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
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery-plugin-collection.js"></script>
      <script src="assets/js/jquery.slicknav.min.js"></script>
      <script src="assets/js/script.js"></script>
    </Fragment>
  );
}
