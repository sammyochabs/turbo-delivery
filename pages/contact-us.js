import Head from "next/head";
import React, { Fragment } from "react";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <Fragment>
      <ContactUs />
      <Footer />
    </Fragment>
  );
}
