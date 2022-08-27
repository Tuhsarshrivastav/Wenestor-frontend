import React, { useState } from "react";
import "./Login.css";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";
import { changePerson } from "../../redux/actions/personAction";
import { CONSULTANT, BUSINESS } from "../../constants";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../api/loginUser";
import { loginSuccess, logout } from "../../redux/actions/loginAction";
import LoginLayout from "./LoginLayout";
import jwtDecode from "jwt-decode";

function Login({ person, changePerson, history, loginSuccess, logout }) {
  console.log("login as person ", person);
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);
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
    loginUser(values, person)
      .then((response) => {
        // setApi(false);
        console.log("response from login", response);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("person", person);
        const decoded = jwtDecode(response.data.token);
        console.log("decoded is", decoded);
        localStorage.setItem("consultant_token", response.data.token);
        localStorage.setItem("consultant_id", decoded.data.consultant_id);
        loginSuccess(response.data.token);

        if (person === BUSINESS) history.push("/business/dashboard/projects");
        // else history.push("/profile-creation/0");
        else history.push("/dashboard");
      })
      .catch((err) => {
        const response = err.response;
        logout();
        // setApi(false);
        if (response.status == 401) setErrors("User id or password is wrong");
        else if (response.status == 400)
          setErrors("No acount with this email found");
        else history.push("/500");
      });
  };
  const changePersonFunc = (changeTo) => {
    if (person !== changeTo) {
      changePerson(changeTo);
      console.log("changePersonFunc", changeTo);
      localStorage.setItem("person", changeTo);
      console.log("ye wala", localStorage.getItem("person"));
      setValues(initialValues);
      history.push("/login");
    }
  };
  return (
    <>
      <LoginLayout changePersonFunc={changePersonFunc}>
        <p className="login__content-heading">
          <small>Enter login credentials to continue!</small>
        </p>
        <div className="login__content-form">
          <div className="login__form-wrapper">
            {" "}
            <form className="login-bus-form" onSubmit={onSubmit}>
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
              <Link to="/login/forgot-password" className="forgot-password">
                Forgot password?
              </Link>

              <button type="submit" className="login-business__submit-btn">
                Login
              </button>
              <div className="call-to-register">
                Already have an account?{"  "}
                <Link to="/register/1" className="register-here">
                  Sign Up here
                </Link>
              </div>
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
  loginSuccess,
  logout,
};
export default connect(matchStateToProps, matchDispatchToProps)(Login);

Login.propTypes = {
  person: PropTypes.string.isRequired,
  changePerson: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
