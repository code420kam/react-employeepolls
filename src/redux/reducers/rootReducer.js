import { combineReducers } from "redux";
import users from "./users";
import login from "./login";
import question from "./questions";

const rootReducer = combineReducers({
  users,
  login,
  question,
});

export default rootReducer;
