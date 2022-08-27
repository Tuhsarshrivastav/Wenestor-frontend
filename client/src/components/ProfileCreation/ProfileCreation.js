import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ProfileCreation.css";
import { profileFormModel } from "../../models/ProfileFormModel";
import SideImg from "../../Images/profile-creation__side-img.png";
import logo from "../../../../build/wenester-logo.png";
import PageNotFound from "../PageNotFound";
import Zero from "./Zero";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

const ProfileCreation = (props) => {
  const step = props.match.params.step;
  if (step < 0 || step > 6) return <PageNotFound />;
  const [values, setValues] = useState(profileFormModel);

  const fetchProfileDetails = async () => {
    let token = localStorage.getItem("token"); // get token fron localstorage
    const id = localStorage.getItem("consultant_id");
    try {
      const response = await axios.get(
        `http://localhost:8000/api/profiles/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status !== 200) {
        onSubmit();
        return;
      }
      console.log(response.data.data);
      setValues(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  const onChange = ({ target }) => {
    const newValue = { ...values, [target.name]: target.value };
    setValues(newValue);
    console.log(newValue);
  };

  async function onSubmit() {
    console.log("submiting...", values);
    const id = localStorage.getItem("consultant_id");
    // console.log(values.industry, typeof values.industry);
    // const industries = values.industry.join(",");
    // console.log(industries);
    // const languagesString = values.languages.join(",");
    // console.log(languagesString);
    const data = {
      tagline: values.tagline,
      introduction: values.introduction,
      linkedin: values.linkedin,
      role: values.role,
      company: values.company,
      responsibilities: values.responsibilities,
      work_from: `${values.work_from_month}/${values.work_from_year}`,
      work_to: `${values.work_to_month}/${values.work_to_year}`,
      currently_working: values.currently_working,
      degree: values.degree,
      university: values.university,
      education_from: `${values.education_from_month}/${values.education_from_year}`,
      education_to: `${values.education_to_month}/${values.education_to_year}`,
      skills: values.skills,
      industry: values.industry,
      location: values.location,
      languages: values.languages,
      consultant_id: id,
    };
    console.log("here is the data", data);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `http://35.225.88.225/api/addprofile`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  let tmp = <Zero step={step} />;
  if (step == 1)
    tmp = (
      <One
        step={step}
        values={values}
        onChange={onChange}
        fetch={fetchProfileDetails}
        onSubmit={onSubmit}
      />
    );
  else if (step == 2)
    tmp = (
      <Two
        step={step}
        values={values}
        onChange={onChange}
        fetch={fetchProfileDetails}
        onSubmit={onSubmit}
      />
    );
  else if (step == 3)
    tmp = (
      <Three
        step={step}
        values={values}
        onChange={onChange}
        fetch={fetchProfileDetails}
        onSubmit={onSubmit}
      />
    );
  else if (step == 4)
    tmp = (
      <Four
        step={step}
        values={values}
        onChange={onChange}
        fetch={fetchProfileDetails}
        onSubmit={onSubmit}
      />
    );
  else if (step == 5)
    tmp = (
      <Five
        step={step}
        values={values}
        onChange={onChange}
        fetch={fetchProfileDetails}
        onSubmit={onSubmit}
      />
    );
  return (
    <div className="profile-creation">
      <div className="profile-creation__side-img">
        <img src={SideImg} alt="" />
      </div>
      <div className="profile-creation__content">
        <div className="profile-creation__header">
          <Link to="/">
            <img src={logo} className="profile-creation__header-logo" />
          </Link>
          <Link to="#">Help and support</Link>
        </div>
        <div className="profile-creation__main">{tmp}</div>
      </div>
    </div>
  );
};

export default ProfileCreation;

ProfileCreation.propTypes = {
  match: PropTypes.object.isRequired,
};
