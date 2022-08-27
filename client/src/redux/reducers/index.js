import { combineReducers } from "redux";
import options from "./optionsReducer";
import person from "./personReducer";
import login from "./loginReducer";
import projects from "./businessProjectReducer";
const rootReducer = combineReducers({ login, options, person, projects });

export default rootReducer;
