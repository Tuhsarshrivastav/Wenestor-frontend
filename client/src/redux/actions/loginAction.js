import * as types from "./actionTypes";

export function loginSuccess() {
  return { type: types.LOGIN_SUCCESS };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("person");
  return { type: types.LOGOUT };
}
