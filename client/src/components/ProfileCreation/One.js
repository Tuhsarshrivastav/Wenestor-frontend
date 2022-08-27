import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const One = ({ step, values, onChange, fetch, onSubmit }) => {
  // const [error, setError] = useState("");
  // const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="one">
      <div className="one__header maxWidth80">
        <div className="title">Enter your credentials!</div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="one__form maxWidth80">
        <div className="one__form__input-field">
          <div className="one__form-label">Tagline*</div>
          <input
            type="text"
            placeholder="Enter your tagline"
            name="tagline"
            value={values.tagline}
            onChange={onChange}
          />
        </div>
        <div className="one__form__input-field">
          <div className="one__form-label">Introduction*</div>
          <div className="one__form-Enter-intro">
            <input
              type="text"
              placeholder="Enter your Intro"
              name="introduction"
              value={values.introduction}
              onChange={onChange}
            />
            <div className="one__form-input-caption">300 words max</div>
          </div>
        </div>
        <div className="one__form__input-field">
          <div className="one__form-label">LinkedIn*</div>
          <input
            type="text"
            placeholder="Enter your LinkedIn ID"
            name="linkedin"
            value={values.linkedin}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="one__footer">
        <Link
          to={`/profile-creation/${parseInt(step, 10) - 1}`}
          className="btn btn-outline footer-btns"
        >
          Back
        </Link>
        <Link
          to={`/profile-creation/${parseInt(step, 10) + 1}`}
          className="btn btn-primary footer-btns"
          onClick={onSubmit}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default One;

One.propTypes = {
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
