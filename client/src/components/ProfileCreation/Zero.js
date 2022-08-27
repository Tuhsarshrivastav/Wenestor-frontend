import React, { useState } from "react";
import "./ProfileCreation.css";
import { Link } from "react-router-dom";
import LinkedInPage from "../register/LinkedInPage";

const Zero = () => {
  return (
    <div className="zero">
      <div className="zero__title">
        Great! {"Let's"} create your profile to get projects.
      </div>
      <div className="zero__form">
        <div className="zero__form-heading one-option">
          Select one option to continue
        </div>
        <div className="zero__form__linkedIn-btn">
          <p className="zero__linkedIn btn btn-primary" to="#">
            <LinkedInPage />
          </p>
          <div className="zero__form-sub-title">Enter credentials 2x fast</div>
        </div>

        <div className="zero__form__or">
          <span className="left"></span> <span className="or">or</span>
          <span className="right"></span>
        </div>

        <Link
          className="btn btn-outline zero__enter-manually"
          to="/profile-creation/1"
        >
          Enter Manually
        </Link>
      </div>
    </div>
  );
};

export default Zero;
