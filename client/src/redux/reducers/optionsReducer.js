import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function optionsReducer(state = initialState.options, action) {
  switch (action.type) {
    case types.LOAD_OPTIONS:
      return action.payload;
    default:
      return state;
  }
}
