import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";
import Select from "react-select";
const Languages = [
  { value: 1, label: "English" },
  { value: 2, label: "Hindi" },
  { value: 3, label: "Sanskrit" },
  { value: 4, label: "French" },
];

const Locations = [
  { id: 1, name: "Banglore" },
  { id: 2, name: "Delhi" },
  { id: 3, name: "Lucknow" },
  { id: 4, name: "Chennai" },
];
const customStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "#F5F5F5" }),
  option: (styles) => {
    return {
      ...styles,
      textTransform: "capitalize",
    };
  },

  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#D9D9D9",
      borderRadius: "10px",
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#4F4F4F",
    padding: "4px",
    textTransform: "capitalize",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#4F4F4F",
    borderRadius: "50%",
    ":hover": {
      backgroundColor: "#ccc",
      color: "#4F4F4F",
    },
  }),
};
const Five = ({ step, values, onChange, fetch, onSubmit }) => {
  window.scrollTo(0, 0);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="one">
      <div className="one__header maxWidth80">
        <div className="title">Enter your credentials</div>
        <span className="bg-green"></span>
        <span className="bg-green"></span>
        <span className="bg-green"></span>
        <span className="bg-green"></span>
        <span></span>
        <span></span>
      </div>
      <div className="one__form-heading mb-20">Give more details about you</div>
      <div className="one__form maxWidth80">
        <div className="one__form__input-field">
          <div className="one__form-label">Location*</div>
          <SelectInput
            className="select-input"
            type="text"
            name="location"
            placeholder="Choose your Location"
            value={values.location}
            onChange={onChange}
            options={Locations}
            // error={errors.type_business}
          />
        </div>
        <div className="one__form__input-field">
          <div className="one__form-label">Languages*</div>
          <Select
            isMulti={true}
            options={Languages}
            name="languages"
            styles={customStyles}
            placeholder="Choose your Languages"
            value={values.languages}
            onChange={(values) => {
              const e = { target: { name: "languages", value: values } };
              onChange(e);
            }}
          />
        </div>
      </div>
      <div className="one__footer five">
        <Link
          to={`/profile-creation/${parseInt(step, 10) - 1}`}
          className="btn btn-outline footer-btns back"
        >
          Back
        </Link>
        <Link className="btn btn-primary footer-btns" onClick={onSubmit}>
          Submit
        </Link>
      </div>
    </div>
  );
};

export default Five;

Five.propTypes = {
  step: PropTypes.number,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
