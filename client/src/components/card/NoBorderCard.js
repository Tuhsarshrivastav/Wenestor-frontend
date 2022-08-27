import React from "react";
import PropTypes from "prop-types";
export default function NoBorderCard(props) {
  return (
    <div className="col-lg-3 col-sm-6 col-md-6 text-center mx-auto mt-5">
      {props.children}
      <p>{props.text}</p>
    </div>
  );
}
NoBorderCard.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
};
