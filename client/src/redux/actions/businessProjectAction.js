import * as types from "./actionTypes";
import * as projectsApi from "../../api/projectsApi";

// export function editProject(project) {
//   return (dispatch) => {
//     dispatch(editProjectSuccess(project));
//     return projectsApi.editProject(project);
//   };
// }
export function saveProject(project) {
  return function (dispatch) {
    return projectsApi.saveProject(project).then((response) => {
      console.log(response);
      project.id
        ? dispatch(editProjectSuccess(response.data.project))
        : dispatch(addProjectSuccess(response.data.data));
    });
  };
}
export function loadProjects() {
  return function (dispatch) {
    return projectsApi.loadProjects().then((response) => {
      // console.log(response.data.data);
      dispatch(loadProjectsSuccess(response.data.data || []));
    });
  };
}

export function deleteProject(id) {
  return function (dispatch) {
    return projectsApi
      .deleteProject(id)
      .then(dispatch(deleteProjectSuccess(id)));
  };
}
export function deleteProjectSuccess(id) {
  return { type: types.DELETE_PROJECT_SUCCESS, payload: id };
}
export function loadProjectsSuccess(projects) {
  console.log(projects);
  return { type: types.LOAD_PROJECTS_SUCCESS, payload: projects };
}
export function addProjectSuccess(project) {
  return { type: types.ADD_PROJECT, payload: project };
}

export function editProjectSuccess(project) {
  return { type: types.EDIT_PROJECT, payload: project };
}
