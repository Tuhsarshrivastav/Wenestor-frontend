import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true;
    case types.LOGOUT:
      return false;
    default:
      return state;
  }
}
