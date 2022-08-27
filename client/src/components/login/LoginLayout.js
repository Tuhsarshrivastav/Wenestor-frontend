import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CONSULTANT, BUSINESS } from "../../constants";
import "./Login.css";
import PropTypes from "prop-types";
import businessLanding from "../../Images/Business-landing.svg";
import consultantLanding from "../../Images/consultant-landing.svg";
import logo from "../../../../build/wenester-logo.png";

const LoginLayout = ({ children, changePersonFunc, person }) => {
  return (
    <div className="login__layout">
      <div className="login__showcase">
        <div className="login__showcase-image">
          <img
            src={person == CONSULTANT ? consultantLanding : businessLanding}
            alt="landing-image"
          />
        </div>
        <div className="login__showcase-text">
          {person === BUSINESS
            ? "Get projects done by our expert consultants worldwide."
            : "Work with our leading clients & companies worldwide."}
        </div>
      </div>
      <div className="login__content">
        <div className="login__content-header">
          <div className="login__content-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div
            className="btn btn-outline"
            onClick={() =>
              changePersonFunc(person == CONSULTANT ? BUSINESS : CONSULTANT)
            }
          >
            Login as {person == BUSINESS ? "expert" : "business"}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

LoginLayout.propTypes = {
  person: PropTypes.string.isRequired,
  changePersonFunc: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
};
export default connect(mapStateToProps)(LoginLayout);
