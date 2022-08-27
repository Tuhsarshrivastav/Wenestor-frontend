import React from "react";
import { useState } from "react";
import Layout from "../Layout";
import "./company.css";
import axios from "axios";
import { API_URL } from "../../../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;


const AddCompany = () => {
  const [company, setCompany] = useState({
    companyname: "",
    companydomain: "",
    companysize: "",
    companylocation: "",
  });
  const onChange = ({ target }) => {
    setCompany({ ...company, [target.name]: target.value });
  };
  const onSubmit = async () => {
    console.log(company);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(baseUrl+"/api/business/addcompany", {
        company_name: company.companyname,
        domain: company.companydomain,
        size: company.companysize,
        location: company.companylocation,
      },{
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      // setStatus("Successfully submitted for approval of Admin.");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <div className="add-company-form">
        <div className="company-heading text-center mt-4">
          <h3>Add Company</h3>
        </div>
        <form className="mx-auto ">
          <div className="form-group w-75 mx-auto">
            <label
              htmlFor="exampleInputEmail1 input-lebal"
              className="input-lebal"
            >
              Company Name
            </label>
            <input
              name="companyname"
              value={company.companyname}
              onChange={onChange}
              type="text"
              className="form-control p-4 input_color"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="form-group w-75 mx-auto">
            <label htmlFor="exampleInputEmail1 " className="input-lebal">
              Company Domain
            </label>
            <input
              name="companydomain"
              value={company.companydomain}
              onChange={onChange}
              type="text"
              className="form-control p-4 input_color "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Company Domain"
            />
          </div>
          <div className="form-group w-75 mx-auto">
            <label htmlFor="exampleInputEmail1 " className="input-lebal">
              Company Size
            </label>
            <input
              name="companysize"
              value={company.companysize}
              onChange={onChange}
              type="text"
              className="form-control p-4 input_color"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Company Size"
            />
          </div>
          <div className="form-group w-75 mx-auto">
            <label htmlFor="exampleInputEmail1 " className="input-lebal">
              Company Location
            </label>
            <input
              name="companylocation"
              value={company.companylocation}
              onChange={onChange}
              type="text"
              className="form-control p-4 input_color"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Company Location"
            />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button className="btn bg-light text-dark">Back</button>
          <button onClick={onSubmit} className="btn">
            Create
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddCompany;
