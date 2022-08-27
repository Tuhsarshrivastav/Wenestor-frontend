import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { values } from "lodash";

const Two = ({ step, values, onChange, fetch, onSubmit }) => {
  window.scrollTo(0, 0);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="one">
      <div className="one__header maxWidth80">
        <div className="title">Enter your credentials!</div>
        <span className="bg-green"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="one__form-heading">Work Experience</div>
      <div className="one__form maxWidth80">
        <div className="one__form-role-and-company">
          <div className="one__form__input-field role">
            <div className="one__form-label">Role*</div>
            <input
              type="text"
              placeholder="Enter your role"
              value={values.role}
              name="role"
              onChange={onChange}
            />
          </div>
          <div className="one__form__input-field company">
            <div className="one__form-label">Company*</div>
            <input
              type="text"
              placeholder="Enter your company"
              name="company"
              value={values.company}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="one__form__input-field">
          <div className="one__form-label">Responsibilities*</div>
          <div className="one__form-Enter-intro">
            <input
              type="text"
              placeholder="Enter your responsibilities"
              name="responsibilities"
              value={values.responsibilities}
              onChange={onChange}
            />
            <div className="one__form-input-caption">300 words max</div>
          </div>
        </div>
        <div className="one__form__input-field date">
          <div className="form__date-from">
            <div className="one__form-label from">From*</div>
            <div className="from">
              <input
                type="text"
                placeholder="Month"
                name="work_from_month"
                value={values.work_from_month}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Year"
                name="work_from_year"
                value={values.work_from_year}
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
                name="work_to_month"
                value={values.work_to_month}
                onChange={onChange}
              />
              <input
                type="text"
                placeholder="Year"
                name="work_to_year"
                value={values.work_to_year}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="one__form-currently-working">
            <input
              type="checkbox"
              name="currently_working"
              value={values.currently_working}
              onChange={onChange}
            />
            <div className="currently-working">Currently working</div>
          </div>
        </div>
        <Link to="#" className="add-work-experience-btn">
          Add work experience
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
          onSubmit={() => {
            console.log("ran");
            onSubmit();
          }}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Two;

Two.propTypes = {
  step: PropTypes.number,
};
