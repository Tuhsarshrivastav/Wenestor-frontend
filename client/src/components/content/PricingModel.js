import React from "react";

export default function PricingModel() {
  return (
    <div className="container">
      <h1 className="text-center text-uppercase font-weight-bold">
        Pricing Model
      </h1>
      <div className="row">
        <div
          className="card col m4"
          style={{ background: "white", height: "200px" }}
        ></div>
        <div
          className="card col m4"
          style={{ background: "white", height: "200px" }}
        ></div>
        <div
          className="card col m4"
          style={{ background: "white", height: "200px" }}
        ></div>
      </div>
    </div>
  );
}
