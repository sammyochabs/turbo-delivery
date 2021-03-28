import React, { Fragment } from "react";
import NavBar from "./navBar";
import BreadCumb from "./breadCumb";
import Footer from "./footer";

export default function Privacy() {
  return (
    <Fragment>
      <NavBar />
      <BreadCumb label={"Privacy Policy"} />
      <div className="container">
        <h2 className="text-center">Our Privacy Policy</h2>
        <p className="text-justify">
          These is our privacy policy. These is our privacy policy. These is our
          privacy policy. These is our privacy policy. These is our privacy
          policy. These is our privacy policy. These is our privacy policy.
          These is our privacy policy. These is our privacy policy. These is our
          privacy policy. These is our privacy policy. These is our privacy
          policy. These is our privacy policy. These is our privacy policy.
          These is our privacy policy.
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}
