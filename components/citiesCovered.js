import React, { Fragment } from "react";
import NavBar from "./navBar";
import BreadCumb from "./breadCumb";
import Footer from "./footer";

export default function CitiesCovered() {
  return (
    <Fragment>
      <NavBar />
      <BreadCumb label={"Cities We Cover"} />
      <div className="container">
        <h2 className="text-center">These Are The Cities We Cover</h2>
        <p>
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-action active"
            >
              Cities We cover
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Vancouver
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Washington
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Califonia
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              disabled
            >
              New York
            </button>
          </div>
        </p>
      </div>

      <Footer />
    </Fragment>
  );
}
