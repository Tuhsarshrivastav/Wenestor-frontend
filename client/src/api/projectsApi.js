import axios from "axios";
import { API_URL } from "../services/url";
// const baseUrl = process.env.API_URL;
const baseUrl = API_URL;

export function deleteProject(id) {
  const token = localStorage.getItem("token");
  return axios.delete(baseUrl + "/api/business/project/" + id, {
    headers: { Authorization: "Bearer " + token },
  });
}
export function loadProjects() {
  console.log("lodingg... projects ");
  const token = localStorage.getItem("token");
  return axios
    .get(baseUrl + "/api/business/project", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log("response recieved ", res);
      return res;
    })
    .catch((err) => {
      console.log("error loading projct ", err);
    });
}
export function loadProjectByCategory(id) {
  const token = localStorage.getItem("token");
  return axios.get(baseUrl + "/api/consultant/project/" + id, {
    headers: { Authorization: "Bearer " + token },
  });
}
export function loadProjectByPreference(preference) {
  const token = localStorage.getItem("token");
  console.log(preference);
  console.log("aaraha h kya !!!");
  return axios.get(
    baseUrl +
      `/api/consultant/project?business_type=${preference.business_type}&domain_type=${preference.domain_text}`,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
}

export function saveProject(project) {
  console.log("inside api save project function", project);
  if (!project.id) return addProject(project);
  else return editProject(project);
}
export function editProject(project) {
  const formData = new FormData();
  project.files_to_be_uploaded.forEach((file) =>
    formData.append("file", file, file.name)
  );
  formData.append("title", project.title);
  formData.append("description", project.description);
  formData.append("questions", JSON.stringify(project.questions));
  console.log(project.questions);
  formData.append("domains", JSON.stringify(project.domains));
  formData.append("files", JSON.stringify(project.files));
  const token = localStorage.getItem("token");
  console.log(formData);
  return axios.put(baseUrl + "/api/business/project/" + project.id, formData, {
    headers: { Authorization: "Bearer " + token },
  });
}
export function addProject(project) {
  const formData = new FormData();
  project.files_to_be_uploaded.forEach((file) =>
    formData.append("file", file, file.name)
  );
  formData.append("title", project.title);
  formData.append("description", project.description);
  formData.append("questions", JSON.stringify(project.questions));
  formData.append("domains", JSON.stringify(project.domains));
  console.log("Adding project ==> ", formData);
  const token = localStorage.getItem("token");
  return axios
    .post(baseUrl + "/api/business/project", formData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("succesfully created project", res);
      return res;
    })
    .catch((err) => console.log("erroe adding project", err));
}
export function loadReplies(projectId) {
  console.log("loading replies for this project", projectId);
  const token = localStorage.getItem("token");
  return axios
    .get(baseUrl + "/api/business/invcons/" + projectId, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => console.log("res for load replies", res))
    .catch((err) => console.log("error loading repleis", err));
}

export function loadInvites(projectId) {
  const token = localStorage.getItem("token");
  return axios.get(baseUrl + "/api/business/uninvited/" + projectId, {
    headers: { Authorization: "Bearer " + token },
  });
}

export function loadBusinessByProject(projectId) {
  return axios.get(baseUrl + "/api/consultant/fetchbusiness/" + projectId);
}
