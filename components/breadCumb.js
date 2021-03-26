import React from "react";

export default function BreadCumb({ label }) {
  return (
    <div className="breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcumb-wrap text-center">
              <h2>{label}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
