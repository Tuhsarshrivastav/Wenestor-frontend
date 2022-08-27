import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function personReducer(state = initialState.person, action) {
  switch (action.type) {
    case types.CHANGE_PERSON:
      return action.payload;
    default:
      return state;
  }
}
