import Head from "next/head";
import React, { Fragment } from "react";
import DispatcherFaq from "../components/dispatcherFaq";
import Footer from "../components/footer";
import JoinUs from "../components/joinUs";
import NavBar from "../components/navBar";

export default function BecomeADispatcher() {
  return (
    <Fragment>
      <NavBar standAlonePage={true} />
      <JoinUs />
      <DispatcherFaq />
      <Footer />
    </Fragment>
  );
}
