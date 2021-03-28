import React, { Fragment } from "react";
import NavBar from "./navBar";
import BreadCumb from "./breadCumb";
import Footer from "./footer";

export default function TermsAndCondition() {
  return (
    <Fragment>
      <NavBar />
      <BreadCumb label={"Terms And Conditions"} />
      <div className="container">
        <h2 className="text-center">Terms And Conditions</h2>
        <p className="text-justify">
          These are our terms and conditions, Please abide by them always These
          are our terms and conditions, Please abide by them always These are
          our terms and conditions, Please abide by them always These are our
          terms and conditions, Please abide by them always These are our terms
          and conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always These are our terms and
          conditions, Please abide by them always
        </p>
      </div>
      <Footer />
    </Fragment>
  );
}
