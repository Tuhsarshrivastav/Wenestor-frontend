import * as types from "./actionTypes";
import fetchTypes from "../../api/fetchTypes";

export function loadOptionsSuccess(options) {
  return { type: types.LOAD_OPTIONS, payload: options };
}
export function fetchOptions() {
  return function (dispatch) {
    return fetchTypes().then((options) => {
      dispatch(loadOptionsSuccess(options));
    });
  };
}
