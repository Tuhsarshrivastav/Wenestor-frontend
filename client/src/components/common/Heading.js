import React from "react";
import PropTypes from "prop-types";
const Heading = (props) => {
  return (
    <div className="row text-center">
      <h1 className="mx-auto">{props.heading}</h1>
    </div>
  );
};
export default Heading;
Heading.propTypes = {
  heading: PropTypes.string,
};
