import * as types from "./actionTypes";

export function changePerson(person) {
  return { type: types.CHANGE_PERSON, payload: person };
}
