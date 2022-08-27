import { handleResponse, handleError } from "./apiUtils";
import { API_URL } from "../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;


import axios from "axios";
export default async function fetchTypes() {
  let data = (await fetchBusinessType()).data;
  const business_types = data.map((type) => {
    return { id: type.business_id, name: type.name };
  });
  data = (await fetchIndustryType()).data;
  const industry_types = data.map((type) => {
    return { id: type.industry_id, name: type.name };
  });
  data = (await fetchDomainType()).data.data;
  const domain_types = data.map((type) => {
    return { id: type.domain_id, name: type.domain_name };
  });
  return { business_types, industry_types, domain_types };
}
const fetchBusinessType = () => {

    return fetch(baseUrl + "/api/fetch/businesstypes", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(handleResponse)
    .catch(handleError);
};
const fetchIndustryType = () => {
  return fetch(baseUrl + "/api/fetch/industrytypes", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(handleResponse)
    .catch(handleError);
};

const fetchDomainType = () => {
  return axios.get(baseUrl + "/api/fetch/domaintypes");
};
