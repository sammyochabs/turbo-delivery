import Head from "next/head";
import React, { Fragment } from "react";
import DispatcherFaq from "../components/dispatcherFaq";
import Footer from "../components/footer";
import JoinUs from "../components/joinUs";
import NavBar from "../components/navBar";

export default function BecomeADispatcher() {
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
      <NavBar services={true} />
      <JoinUs />
      <DispatcherFaq />
      <Footer />
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery-plugin-collection.js"></script>
      <script src="assets/js/jquery.slicknav.min.js"></script>
      <script src="assets/js/script.js"></script>
    </Fragment>
  );
}
