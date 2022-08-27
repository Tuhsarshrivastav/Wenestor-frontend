import axios from "axios";
import { API_URL } from "../services/url";
import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

export async function loginUser(userInfo, person) {
  let url =
    baseUrl +
    `/api/${person === "CONSULTANT" ? "consultant" : "business"}/login`;
  const post = {
    email_id: userInfo.email,
    password: userInfo.password,
  };
  return axios.post(url, post);
}

export const forgotPasswordEmail = async (values, person) => {
  let url =
    baseUrl +
    `/api/${
      person === "CONSULTANT" ? "consultant" : "business"
    }/forget-password`;
  console.log("api", url);
  const post = {
    email_id: values.email,
  };
  return axios.post(url, post, {
    headers: { "Content-Type": "application/json" },
  });
  // .then(handleResponse)
  // .catch(handleError);
};

export const resetPassword = async (values, person, token) => {
  let url =
    baseUrl +
    `/api/${
      person === "CONSULTANT" ? "consultant" : "business"
    }/update-password`;
  console.log("api", url);
  const post = {
    token,
    password: values.password,
  };
  return axios.post(url, post, {
    headers: { "Content-Type": "application/json" },
  });
  // .then(handleResponse)
  // .catch(handleError);
};
