import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import "./RegisterBusiness.css";
import { Link } from "react-router-dom";

// const customStyles = {
//   control: (styles) => ({ ...styles, backgroundColor: "white" }),
//   option: (styles) => {
//     return {
//       ...styles,
//       textTransform: "capitalize",
//     };
//   },

//   multiValue: (styles) => {
//     return {
//       ...styles,
//       backgroundColor: "#3090C7",
//       borderRadius: "10px",
//     };
//   },
//   multiValueLabel: (styles) => ({
//     ...styles,
//     color: "white",
//     padding: "4px",
//     textTransform: "capitalize",
//   }),
//   multiValueRemove: (styles) => ({
//     ...styles,
//     color: "white",
//     borderRadius: "4px",
//     ":hover": {
//       backgroundColor: "#2B60DE",
//       color: "#DD4132",
//     },
//   }),
// };
export default function RegisterConsultant({
  values,
  onSubmit,
  onChange,
  errors,
  firmOptions,
  step,
  // api,
}) {
  let opt = firmOptions.map((option) => (
    <option className="text-capitalize" key={option.id} value={option.name}>
      {option.name}
    </option>
  ));
  return step == 1 ? (
    <form className="register-bus-form" onSubmit={onSubmit}>
      <div className="input-label input-label__name" htmlFor="">
        Name
      </div>
      <TextInput
        className="form-control"
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={values.name}
        onChange={onChange}
        error={errors.name}
      />

      <div
        style={{ margin: "10px 0" }}
        className="input-label input-label__firm-category"
      >
        Select firm
      </div>
      <select
        type="text"
        name="category"
        className="form-control consul-firm-category"
        value={values.category}
        onChange={onChange}
        required={true}
      >
        <option className="text-mute">Select any category</option>
        {opt}
      </select>

      <Link to="/register/2" className="register-business__submit-btn">
        Next
      </Link>
      <div className="call-to-login">
        Already have an account?{" "}
        <Link to="/login" className="login-here">
          login here
        </Link>
      </div>
    </form>
  ) : (
    <form className="register-bus-form" onSubmit={onSubmit}>
      <div className="input-label input-label__name" htmlFor="">
        Email
      </div>
      <TextInput
        className="form-control"
        type="email"
        name="email"
        placeholder="Enter you email ID"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <div className="input-label">Password</div>
      <TextInput
        className="form-control"
        type="password"
        name="password"
        placeholder="Enter password"
        value={values.password}
        onChange={onChange}
        error={errors.password}
      />

      <label htmlFor="terms-and-conditions">
        <span>
          <input
            type="checkbox"
            name="terms-and-conditions"
            className="register-bus-form__terms-and-conditions"
            required={true}
          />
        </span>{" "}
        By signing up you agree to{" "}
        <span>
          <Link to="#" className="terms-and-condition-link">
            Terms and conditions
          </Link>
        </span>{" "}
        and{" "}
        <span>
          <Link to="#" className="terms-and-condition-link">
            Company guidelines.
          </Link>
        </span>
      </label>

      <button type="submit" className="register-business__submit-btn">
        Register
      </button>
      <div className="call-to-login">
        Already have an account?{"  "}
        <Link to="/login" className="login-here">
          login here
        </Link>
      </div>
    </form>
  );
  //   <form className="w-100" onSubmit={onSubmit}>
  //     <TextInput
  //       className="form-control"
  //       type="text"
  //       name="name"
  //       placeholder="Name"
  //       value={values.name}
  //       onChange={onChange}
  //       error={errors.name}
  //       prepend={FaUserTie}
  //     />
  //     <div className="form-group">
  //       <Select
  //         isMulti={true}
  //         options={domainTypes}
  //         name="experience"
  //         placeholder="Experience in domains"
  //         styles={customStyles}
  //         values={values.domainsTypes}
  //         onChange={(values) => {
  //           const e = { target: { name: "experience", value: values } };
  //           onChange(e);
  //         }}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <Select
  //         isMulti={true}
  //         options={industryTypes}
  //         name="industry"
  //         styles={customStyles}
  //         placeholder="Industry"
  //         value={values.industryTypes}
  //         onChange={(values) => {
  //           const e = { target: { name: "industry", value: values } };
  //           onChange(e);
  //         }}
  //       />
  //       <small id="industryhelp" className="form-text text-info">
  //         {"Please select upto five industry types"}
  //       </small>
  //     </div>
  //     <TextInput
  //       className="form-control"
  //       type="text"
  //       name="contact"
  //       placeholder="Contact No."
  //       value={values.contact}
  //       onChange={onChange}
  //       error={errors.contact}
  //       prepend={GiSmartphone}
  //     />
  //     <TextInput
  //       className="form-control"
  //       type="email"
  //       name="email"
  //       placeholder="Email"
  //       value={values.email}
  //       onChange={onChange}
  //       error={errors.email}
  //       prepend={AiOutlineMail}
  //       info={"We'll never share your email with anyone else."}
  //     />
  //     <TextInput
  //       className="form-control"
  //       type="password"
  //       name="password"
  //       placeholder="Password"
  //       value={values.password}
  //       onChange={onChange}
  //       error={errors.password}
  //       autoComplete={true}
  //       prepend={MdLockOutline}
  //     />
  //     <TextInput
  //       className="form-control"
  //       type="password"
  //       name="confirmpassword"
  //       placeholder="Confirm Password"
  //       value={values.confirmpassword}
  //       onChange={onChange}
  //       error={errors.confirmpassword}
  //       autoComplete={true}
  //       prepend={MdLockOutline}
  //     />
  //     <button disabled={api} className="btn btn-success form-control">
  //       REGISTER
  //     </button>
  //   </form>
  // );
}

RegisterConsultant.propTypes = {
  values: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  industryTypes: PropTypes.array.isRequired,
  domainTypes: PropTypes.array.isRequired,
  api: PropTypes.bool,
  step: PropTypes.number,
  firmOptions: PropTypes.object.isRequired,
};
