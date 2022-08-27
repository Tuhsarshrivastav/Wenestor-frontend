import React, { useState } from "react";
import "./Login.css";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";
import { changePerson } from "../../redux/actions/personAction";
// import { CONSULTANT, BUSINESS } from "../../constants";
// import { formConsultantModel, formBusinessModel } from "../../models/FormModel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { loginUser } from "../../api/loginUser";
// import { loginSuccess, logout } from "../../redux/actions/loginAction";
import LoginLayout from "./LoginLayout";
import { resetPassword } from "../../api/loginUser";
import tick from "../../Images/tick.svg";

function CreateNewPassword({ person, changePerson, history, location }) {
  const initialValues = { password: "", confirmPassword: "" };
  const [values, setValues] = useState(initialValues);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  console.log("reoaded create password", passwordUpdated);
  const [errors, setErrors] = useState("");
  // const [api, setApi] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const onChange = ({ target }) => {
    setErrors("");
    setValues({ ...values, [target.name]: target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // setApi(true);
    console.log(values);

    resetPassword(values, person, token)
      .then((res) => {
        setPasswordUpdated(true);
        console.log(res);
        console.log(passwordUpdated);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const changePersonFunc = (changeTo) => {
    if (person !== changeTo) {
      changePerson(changeTo);
      setValues(initialValues);
      history.push("/login");
    }
  };
  return (
    <>
      <LoginLayout changePersonFunc={changePersonFunc}>
        <p className="login__content-heading">
          <small>Create new password</small>
        </p>
        <div className="login__content-form">
          <div className="login__form-wrapper create-new-password">
            {" "}
            <form className="login-bus-form" onSubmit={onSubmit}>
              <div className="input-label">New password</div>
              <TextInput
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter password"
                value={values.password}
                onChange={onChange}
                error={errors.password}
              />
              <div className="input-label">Confirm new password</div>
              <TextInput
                className="form-control"
                type="password"
                name="confirmPassword"
                placeholder="Enter password"
                value={values.confirmPassword}
                onChange={onChange}
                error={errors.password}
              />

              <button type="submit" className="login-business__submit-btn">
                Create Password
              </button>
              {passwordUpdated && (
                <div className="updated-password">
                  <span>
                    <img src={tick} alt="Done" className="tick-logo" />
                  </span>
                  Your password has been updated successfully.{" "}
                  <Link to="/login" className="continue-to-login">
                    Continue to login
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      </LoginLayout>
    </>
  );
}
const matchStateToProps = (state) => {
  return { person: state.person };
};
const matchDispatchToProps = {
  changePerson,
  // loginSuccess,
  // logout,
};
export default connect(
  matchStateToProps,
  matchDispatchToProps
)(CreateNewPassword);

CreateNewPassword.propTypes = {
  person: PropTypes.string.isRequired,
  changePerson: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
