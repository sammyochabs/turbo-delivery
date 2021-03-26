import Head from "next/head";
import React, { Fragment } from "react";
import Navbar from "../components/navBar";
import NavBar from "../components/navBar";
import BreadCumb from "./breadCumb";
import Footer from "./footer";
import Form from "./Form";

export default function SignUp({ picker }) {
  return (
    <Fragment>
      <Navbar />
      <BreadCumb label={picker === true ? "Picker Login" : "Customer Login"} />
      <Form picker={picker} login={true} />
      <Footer />
    </Fragment>
  );
}
