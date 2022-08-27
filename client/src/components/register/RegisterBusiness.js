import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./RegisterBusiness.css";
import TextInput from "../common/TextInput";
import small from "../../Images/small-business.svg";
import medium from "../../Images/medium-business.svg";
import large from "../../Images/large-business.svg";
export default function RegisterBusiness({
  values,
  onSubmit,
  onChange,
  errors,
  industryTypes,
  // api,
  step,
}) {
  console.log(step, typeof step);
  // console.log("evaluating for step", step);
  // console.log("register-business", industryTypes);
  const opt = industryTypes.map((option) => (
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
        placeholder="Enter your name"
        value={values.name}
        onChange={onChange}
        error={errors.name}
      />
      <div className="input-label">Select company size</div>
      <label className="register-bus-form__small-logo register-bus-form__logo">
        <input
          type="radio"
          name="company_size"
          value="small"
          onChange={onChange}
        />
        <img src={small} alt="small industry" /> <br />
        <span className="text">Small</span>
      </label>
      <label className="register-bus-form__medium-logo register-bus-form__logo">
        <input
          type="radio"
          name="company_size"
          value="medium"
          onChange={onChange}
        />
        <img src={medium} alt="medium industry" /> <br />
        <span className="text">Medium</span>
      </label>
      <label className="register-bus-form__large-logo register-bus-form__logo">
        <input
          type="radio"
          name="company_size"
          value="large"
          onChange={onChange}
        />
        <img src={large} alt="large industry" /> <br />
        <span className="text">Large</span>
      </label>

      <div
        style={{ margin: "10px 0" }}
        className="input-label input-label__business-category"
      >
        Select category
      </div>
      <select
        type="text"
        name="category"
        className="form-control business-category"
        value={values.category}
        onChange={onChange}
        required={true}
      >
        <option className="text-mute">Select any category</option>
        {opt}
      </select>

      <Link
        href="#"
        className="register-business__submit-btn"
        to={`/register/${step + 1}`}
      >
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
        placeholder="you@yourbusiness.com"
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
  // <form className="w-100" onSubmit={onSubmit}>
  //   <TextInput
  //     className="form-control"
  //     type="text"
  //     name="name"
  //     placeholder="Name"
  //     value={values.name}
  //     onChange={onChange}
  //     error={errors.name}
  //     prepend={FaUserTie}
  //   />

  //   <TextInput
  //     className="form-control"
  //     type="text"
  //     name="name_business"
  //     placeholder={"Name of the business"}
  //     value={values.name_business}
  //     onChange={onChange}
  //     error={errors.name_business}
  //     prepend={IoIosBusiness}
  //   />
  //   <TextInput
  //     className="form-control"
  //     type="text"
  //     name="designation"
  //     placeholder={"Designation"}
  //     value={values.designation}
  //     onChange={onChange}
  //     error={errors.designation}
  //     prepend={BsPersonSquare}
  //   />
  //   <SelectInput
  //     type="text"
  //     name="type_business"
  //     placeholder="Type of the business"
  //     value={values.type_business}
  //     onChange={onChange}
  //     error={errors.type_business}
  //     options={options}
  //     prepend={TiBusinessCard}
  //   />
  //   <TextInput
  //     className="form-control"
  //     type="text"
  //     name="contact"
  //     placeholder="Contact No."
  //     value={values.contact}
  //     onChange={onChange}
  //     error={errors.contact}
  //     prepend={GiSmartphone}
  //   />
  //   <TextInput
  //     className="form-control"
  //     type="email"
  //     name="email"
  //     placeholder="Email"
  //     value={values.email}
  //     onChange={onChange}
  //     error={errors.email}
  //     prepend={AiOutlineMail}
  //     info={"We'll never share your email with anyone else."}
  //   />
  //   <TextInput
  //     className="form-control"
  //     type="password"
  //     name="password"
  //     placeholder="Password"
  //     value={values.password}
  //     onChange={onChange}
  //     error={errors.password}
  //     autoComplete={true}
  //     prepend={MdLockOutline}
  //   />
  //   <TextInput
  //     className="form-control"
  //     type="password"
  //     name="confirmpassword"
  //     placeholder="Confirm Password"
  //     value={values.confirmpassword}
  //     onChange={onChange}
  //     error={errors.confirmpassword}
  //     autoComplete={true}
  //     prepend={MdLockOutline}
  //   />
  //   <button disabled={api} className="btn btn-success form-control">
  //     REGISTER
  //   </button>
  // </form>
}

RegisterBusiness.propTypes = {
  values: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  industryTypes: PropTypes.array.isRequired,
  api: PropTypes.bool,
  step: PropTypes.number,
};
