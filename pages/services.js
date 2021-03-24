import React, { Fragment } from "react";
import OurServices from "../components/ourServices";
import Head from "next/head";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

export default function Services() {
  return (
    <Fragment>
      <NavBar services={true} />
      <OurServices />
      <Footer />

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/jquery-plugin-collection.js"></script>
      <script src="assets/js/jquery.slicknav.min.js"></script>
      <script src="assets/js/script.js"></script>
    </Fragment>
  );
}
