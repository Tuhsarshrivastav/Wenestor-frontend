import { CONSULTANT } from "../constants";
import axios from "axios";
import { API_URL } from "../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

export function loadChat(project_id, consultant_id) {
  const token = localStorage.getItem("token");
  return axios.get(
    baseUrl +
      "/api/consultant/chat/?project_id=" +
      project_id +
      (consultant_id ? "&consultant_id=" + consultant_id : ""),
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
}
export function sendMsg(msg, project_id, sender, chat_id, consultant_id) {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  if (msg.file) formData.append("file", msg.file, msg.file.name);
  formData.append("text", msg.text);
  formData.append("project_id", project_id);
  formData.append("chat_id", chat_id);
  formData.append("consultant_id", consultant_id);
  return axios.post(
    baseUrl +
      "/api" +
      (sender === CONSULTANT ? "/consultant" : "/business") +
      "/chat",
    formData,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
}
export function changeStatus(chat_id, status) {
  const token = localStorage.getItem("token");
  return axios.post(
    baseUrl + "/api/business/changestatus",
    { chat_id, status },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
}
