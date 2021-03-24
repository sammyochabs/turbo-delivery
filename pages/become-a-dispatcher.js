import Head from "next/head";
import React, { Fragment } from "react";
import DispatcherFaq from "../components/dispatcherFaq";
import Footer from "../components/footer";
import JoinUs from "../components/joinUs";
import NavBar from "../components/navBar";

export default function BecomeADispatcher() {
  return (
    <Fragment>
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
