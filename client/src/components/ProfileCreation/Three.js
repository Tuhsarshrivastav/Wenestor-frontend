import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { values } from "lodash";

const Three = ({ step, values, onChange, fetch, onSubmit }) => {
  window.scrollTo(0, 0);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="one">
      <div className="one__header maxWidth80">
        <div className="title">Enter your credentials!</div>
        <span className="bg-green"></span>
        <span className="bg-green"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="one__form-heading">Education details</div>
      <div className="one__form maxWidth80">
        <div className="one__form__input-field">
          <div className="one__form-label">Degree*</div>
          <input
            type="text"
            placeholder="Enter your degree"
            name="degree"
            value={values.degree}
            onChange={onChange}
          />
        </div>
        <div className="one__form__input-field">
          <div className="one__form-label">University*</div>
          <input
            type="text"
            placeholder="Enter your University"
            name="university"
            value={values.university}
            onChange={onChange}
          />
        </div>
        <div className="one__form__input-field date">
          <div className="form__date-from">
            <div className="one__form-label from">From*</div>
            <div className="from">
              <input
                type="text"
                placeholder="Month"
                name="education_from_month"
                value={values.education_from_month}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Year"
                name="education_from_year"
                value={values.education_from_year}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form__date-to">
            <div className="one__form-label to">To*</div>
            <div className="to">
              <input
                type="text"
                placeholder="Month"
                name="education_to_month"
                value={values.education_to_month}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Year"
                name="education_to_year"
                value={values.education_to_year}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="one__form-currently-working">
            <input type="checkbox" />
            <div className="currently-working">Currently working</div>
          </div>
        </div>
        <Link to="#" className="add-education-btn">
          Add Education
        </Link>
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

export default Three;

Three.propTypes = {
  step: PropTypes.string,
};
