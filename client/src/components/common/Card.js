import React from "react";
import PropTypes from "prop-types";
export default function Card(props) {
  return (
    <div className="w-75 mx-auto card border-0 bg-first text-white py-4">
      <div className="card-image center">{props.children}</div>
      <div className="card-content center mt-3">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
};
