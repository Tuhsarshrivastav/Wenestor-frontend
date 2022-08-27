import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterLayout.css";
import RegisterBusiness from "./RegisterBusiness";
import { CONSULTANT, BUSINESS } from "../../constants";
import RegisterConsultant from "./RegisterConsultant";
// import { validateFunction } from "../../utils/validateFuntion";
import { formConsultantModel, formBusinessModel } from "../../models/FormModel";
import { fetchOptions } from "../../redux/actions/fetchOptionsAction";
import { changePerson } from "../../redux/actions/personAction";
import { registerUser } from "../../api/regiterUser";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import businessLanding from "../../Images/Business-landing.svg";
import consultantLanding from "../../Images/consultant-landing.svg";
import logo from "../../../../build/wenester-logo.png";
function Register({ person, changePerson, match, history }) {
  const [values, setValues] = useState(
    person === CONSULTANT ? formConsultantModel : formBusinessModel
  );
  const [errors, setErrors] = useState({});
  const [api, setApi] = useState(false);
  const [registersuccess, setSuccess] = useState(false);
  const [registered, setRegistered] = useState(false);
  const step = parseInt(match.params.step, 10);
  console.log("register component rendered !!!!");
  //On Submit
  const onSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    // Form Validation in client side
    // const err = validateFunction(person, values);
    // setErrors(err);

    // if (Object.keys(err).length !== 0) {
    //   return;
    // }
    //
    console.log("reached on submit");

    //Send values to registerations

    // setApi(true);

    registerUser(values, person)
      .then((res) => {
        console.log("posted succesfully", res);
        setApi(true);
        setSuccess(true);
        setTimeout(() => setRegistered(true), 3000);
        setValues(
          person === CONSULTANT ? formConsultantModel : formBusinessModel
        );
      })
      .catch((err) => {
        setApi(true);
        const msg = JSON.parse(err.message);
        setErrors({ ...errors, email: msg.msg });
        if (err.response.status === 500) alert("Something went wrong");
      });
    // history.push("/");
    // alert("You are registered!");
  };
  // console.log(errors);
  const changePersonfunc = (val) => {
    if (val !== person) {
      changePerson(val);
      setValues(val == CONSULTANT ? formConsultantModel : formBusinessModel);
      setErrors({});
      localStorage.deleteItem("person");
      localStorage.setItem("person", val);
      history.push("/register/1");
    }
  };
  const onChange = ({ target }) => {
    const newValue = { ...values, [target.name]: target.value };
    setValues(newValue);
    setErrors({ ...errors, [target.name]: "" });
  };

  const form =
    person === BUSINESS ? (
      <RegisterBusiness
        onSubmit={onSubmit}
        values={values}
        setValues={setValues}
        onChange={onChange}
        errors={errors}
        industryTypes={[
          { id: 1, name: "Sales & Marketing" },
          { id: 2, name: "Corporate Strategy" },
          { id: 3, name: "Digital Transformation & Technology" },
          { id: 4, name: "Operations & Supply Chain Management" },
          { id: 5, name: "Data & Business analytics" },
          { id: 6, name: "Finance & Accounting" },
          { id: 7, name: "Human resources & Organization" },
        ]}
        step={step}
        api={api}
      />
    ) : (
      <RegisterConsultant
        onSubmit={onSubmit}
        values={values}
        onChange={onChange}
        errors={errors}
        firmOptions={[
          { id: 1, name: "I am an individual" },
          { id: 2, name: "I have a team" },
        ]}
        step={step}
      />
    );
  return (
    <>
      {registered && <Redirect to="/login" />}

      <div className="register__layout">
        <div className="register__showcase">
          <div className="register__showcase-image">
            <img
              src={person === CONSULTANT ? consultantLanding : businessLanding}
              alt="landing-image"
            />
          </div>
          <div className="register__showcase-text">
            {person === BUSINESS
              ? "Get projects done by our expert consultants worldwide."
              : "Work with our leading clients & companies worldwide."}
          </div>
        </div>
        <div className="reigster__content">
          <div className="register__content-header">
            <div className="register__content-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div
              className="btn btn-outline"
              onClick={() =>
                changePersonfunc(person === CONSULTANT ? BUSINESS : CONSULTANT)
              }
            >
              Signup as {person == CONSULTANT ? "business" : "expert"}
            </div>
          </div>
          <p className="register__content-heading">
            <small>Enter your credentials to get started!</small>
          </p>
          <div className="register__content-form">
            <div className="register__form-wrapper">
              <div className="register__content-form--error">
                {!registersuccess ? (
                  ""
                ) : (
                  <div
                    className=" mt-3 alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {"You are successfully registered"}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
                {form}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const matchStateToProps = (state) => {
  return { options: state.options, person: state.person };
};
const matchDispatchToProps = {
  fetchOptions,
  changePerson,
};
export default connect(matchStateToProps, matchDispatchToProps)(Register);

Register.propTypes = {
  options: PropTypes.object.isRequired,
  fetchOptions: PropTypes.func.isRequired,
  person: PropTypes.string.isRequired,
  changePerson: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
