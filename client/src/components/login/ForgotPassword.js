import React, { useState } from "react";
import "./Login.css";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";
import { changePerson } from "../../redux/actions/personAction";
// import { CONSULTANT, BUSINESS } from "../../constants";
// import { formConsultantModel, formBusinessModel } from "../../models/FormModel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { loginSuccess, logout } from "../../redux/actions/loginAction";
import { forgotPasswordEmail } from "../../api/loginUser";
import LoginLayout from "./LoginLayout";
import tick from "../../Images/tick.svg";
import jwtDecode from "jwt-decode";

function ForgotPassword({ person, changePerson, history }) {
  console.log("forgot password compnent", person);
  const initialValues = { email: "" };
  const [values, setValues] = useState(initialValues);
  const [sentEmail, setSentEmail] = useState(false);
  const [errors, setErrors] = useState("");
  // const [api, setApi] = useState(false);
  const onChange = ({ target }) => {
    setErrors("");
    setValues({ ...values, [target.name]: target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // setApi(true);
    console.log(values);
    forgotPasswordEmail(values, person)
      .then(async (response) => {
        console.log("got res email is sent", response, person);
        const { token } = await response.data;
        const decoded = jwtDecode(token);
        console.log(token, decoded);
        localStorage.setItem("reset-password-token", token);
        setSentEmail(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const changePersonFunc = (changeTo) => {
    console.log("called change person before", person, changeTo);
    if (person !== changeTo) {
      changePerson(changeTo);
      setValues(initialValues);
      history.push("/login");
    }
    console.log("after change", person);
  };
  return (
    <>
      <LoginLayout changePersonFunc={changePersonFunc}>
        <p className="login__content-heading">
          <small>Forgot Password?</small>
        </p>
        <div className="login__content-form">
          <div className="login__form-wrapper forgot-password">
            {" "}
            <form className="login-bus-form" onSubmit={onSubmit}>
              <div className="registered-email-address-desription">
                Enter your registered email address to <br />
                create new password
              </div>
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
              <button type="submit" className="login-business__submit-btn">
                Request New password
              </button>
              {sentEmail && (
                <div className="sent-email">
                  <span>
                    <img src={tick} alt="Done" className="tick-logo" />
                  </span>
                  We have sent verification link to create new password, check
                  you mail inbox.
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
export default connect(matchStateToProps, matchDispatchToProps)(ForgotPassword);

ForgotPassword.propTypes = {
  person: PropTypes.string.isRequired,
  changePerson: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
