import React from "react";
import PropTypes from "prop-types";
export default function Card(props) {
  return (
    <div
      className="card text-center"
      style={{
        height: "300px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px 10px",
      }}
    >
      <div className="card-image" style={{ color: "#1f9cb3" }}>
        {props.children}
      </div>
      <div className="card-content">
        <h5 className="font-weight-bold">{props.text}</h5>
      </div>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
};
