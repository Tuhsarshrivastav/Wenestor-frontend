import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function businessPostReducer(
  state = initialState.projects,
  action
) {
  switch (action.type) {
    case types.EDIT_PROJECT:
      return state.map((project) =>
        project.id === action.payload.id
          ? {
              ...action.payload,
              domains: action.payload.domains.split(", "),
              post_time: project.post_time,
            }
          : project
      );
    case types.ADD_PROJECT:
      return [
        ...state,
        { ...action.payload, domains: action.payload.domains.split(", ") },
      ];
    case types.LOAD_PROJECTS_SUCCESS:
      return action.payload.map((project) => ({
        ...project,
        domains: project.domains.split(", "),
      }));
    case types.DELETE_PROJECT_SUCCESS:
      return state.filter((project) => project.id !== action.payload);
    default:
      return state;
  }
}
