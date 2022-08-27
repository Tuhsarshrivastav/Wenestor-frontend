import { handleResponse, handleError } from "./apiUtils";
import { API_URL } from "../services/url";
import axios from "axios";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

export async function registerUser(userInfo, person) {
  if (person === "CONSULTANT") {
    return await registerConsultant(userInfo);
  } else {
    return await registerBusiness(userInfo);
  }
}
const registerBusiness = (userInfo) => {
  const post = {
    name: userInfo.name,
    email_id: userInfo.email,
    category: userInfo.category,
    company_size: userInfo.company_size,
    password: userInfo.password,
  };
  const url = baseUrl + "/api/business/signup";
  return axios.post(url, post, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then(handleResponse)
  // .catch(handleError);
};

const registerConsultant = (userInfo) => {
  const post = {
    name: userInfo.name,
    email_id: userInfo.email,
    category: userInfo.category,
    password: userInfo.password,
  };
  const url = baseUrl + "/api/consultant/signup";
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  // .then(handleResponse)
  // .catch(handleError);
};
