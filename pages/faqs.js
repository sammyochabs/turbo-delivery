import Head from "next/head";
import { Fragment } from "react";
import Faq from "../components/faq";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

export default function FaqPage() {
  return (
    <Fragment>
      <NavBar />
      <Faq />
      <Footer />
    </Fragment>
  );
}
