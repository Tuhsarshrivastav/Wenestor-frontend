import React from "react";
import slider1 from "../../Images/home1.jpg";
import slider2 from "../../Images/home2.jpeg";
import slider3 from "../../Images/home3.jpeg";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            background: `url(${slider1})`,
          }}
        >
          <div className="carousel-text">
            <h1 className="display-4 text-light text-uppercase font-weight-bold">
              Consulting Redefined
            </h1>
            <Link
              className="btn btn-primary btn-lg"
              to="/register"
              role="button"
            >
              Join now
            </Link>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            background: `url(${slider2})`,
          }}
        >
          <div className="carousel-text">
            <h1 className="display-4 text-light text-uppercase font-weight-bold">
              Consulting Redefined
            </h1>
            <Link
              className="btn btn-primary btn-lg"
              to="/register"
              role="button"
            >
              Join now
            </Link>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            background: `url(${slider3})`,
          }}
        >
          <div className="carousel-text">
            <h1 className="display-4 text-light text-uppercase font-weight-bold">
              Consulting Redefined
            </h1>
            <Link
              className="btn btn-primary btn-lg"
              to="/register"
              role="button"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
