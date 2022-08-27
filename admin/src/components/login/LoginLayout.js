import React from "react";
// import { CONSULTANT, BUSINESS } from "../../constants";
import "./Login.css";
// import businessLanding from "../../Images/Business-landing.svg";
// import consultantLanding from "../../Images/consultant-landing.svg";
import logo from "../../wenestor.png";

const LoginLayout = ({ children }) => {
  return (
    <div className="login__layout">
      <div className="login__showcase">
        <div className="login__showcase-image">
          {/* <img
            src={person == CONSULTANT ? consultantLanding : businessLanding}
            alt="landing-image"
          /> */}
        </div>
      </div>
      <div className="login__content">
        <div className="login__content-header">
          <div className="login__content-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
