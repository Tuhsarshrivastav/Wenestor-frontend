import { API_URL } from "../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

export async function fetchFile(file_id) {
  let url = baseUrl + `/api/file/projectfile/${file_id}`;
  window.open(url);
}

export async function fetchChatFile(file_id) {
  let url = baseUrl + `/api/file/chatfile/${file_id}`;
  window.open(url);
}
