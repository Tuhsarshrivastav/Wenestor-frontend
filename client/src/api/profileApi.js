import { CONSULTANT } from "../constants";
import axios from "axios";
import { API_URL } from "../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

export function loadProfile(id) {
  const token = localStorage.getItem("token");
  return axios.get("http://localhost:8000/api/profiles" + id, {
    headers: { Authorization: "Bearer " + token },
  });
}
