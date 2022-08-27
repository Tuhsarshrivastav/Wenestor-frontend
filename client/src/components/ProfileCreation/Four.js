import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import SelectInput from "../common/SelectInput";
import Select from "react-select";

const IndustryTypes = [
  { value: 1, label: "Agriculture" },
  { value: 2, label: "Consumer Goods" },
  { value: 3, label: "Consumer Services" },
  { value: 4, label: "Education" },
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

// const Chip = ({ text, onRemove }) => {
//   return (
//     <div className="chip">
//       <div className="text">
//         {text}
//         <span className="chip__cross" onClick={onRemove}>
//           X
//         </span>
//       </div>
//     </div>
//   );
// };

const Four = ({ onChange, values, step, fetch, onSubmit }) => {
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
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="one__form-heading mb-20">Enter your skills</div>
      <div className="one__form maxWidth80">
        <div className="one__form__input-field">
          <div className="one__form-label">Skills*</div>
          <div className="one__form-Enter-intro skills">
            <input
              type="text"
              placeholder="Enter your skills"
              name="skills"
              value={values.skills}
              onChange={onChange}
            />
            <div className="one__form-input-caption">Minimum 10 skills</div>
          </div>
        </div>
        <div className="one__form__input-field">
          <div className="one__form-label">Industry*</div>
          <div className="form-group">
            <Select
              isMulti={true}
              options={IndustryTypes}
              name="industry"
              styles={customStyles}
              placeholder="Choose your industry"
              value={values.industry}
              onChange={(values) => {
                const e = { target: { name: "industry", value: values } };
                onChange(e);
              }}
            />
          </div>
        </div>
      </div>
      <div className="one__footer four">
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

export default Four;

Four.propTypes = {
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};
