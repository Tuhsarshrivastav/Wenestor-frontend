import React, { useEffect, useState } from "react";
import "./Login.css";
import TextInput from "../../common/TextInput";
import PropTypes from "prop-types";
import LoginLayout from "./LoginLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";
import { API_URL } from "../../services/url";
import { useDispatch } from "react-redux";
import {authActions} from '../../store/auth-slice';
function Login({ person }) {
  console.log("login as person ", person);
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [api, setApi] = useState(false);

  const onChange = ({ target }) => {
    setErrors("");
    setValues({ ...values, [target.name]: target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(API_URL);
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/admin/login`, {
        email_id: values.email,
        password: values.password,
      });
      if (res.status === 200) {
        const token = res.data.hash;
        const admin = jwt(token);
        localStorage.setItem("admin", token);
        dispatch(authActions.loginSuccess());
        navigate("/dashboard/consultants");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    let admin = localStorage.getItem("admin");
    if (admin) {
      navigate("/dashboard/consultants");
    }
  });
  return (
    <>
      <LoginLayout>
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
              {/* <Link to="/login/forgot-password" className="forgot-password">
                Forgot password?
              </Link> */}
              <button type="submit" className="login-business__submit-btn">
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </LoginLayout>
    </>
  );
}

export default Login;

Login.propTypes = {
  person: PropTypes.string.isRequired,
  changePerson: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
