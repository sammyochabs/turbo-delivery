import React, { Fragment } from "react";
import Testimonial from "../components/testimonial";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navBar";

export default function Testimonies() {
  return (
    <Fragment>
      <Navbar />
      <Testimonial />
      <Footer />
    </Fragment>
  );
}
