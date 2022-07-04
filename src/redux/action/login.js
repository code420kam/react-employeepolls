import * as actionTypes from "./actionTypes";
import { users } from "../../utils/_DATA";

export const login = (userId) => (dispatch) => {
  if (Object.keys(users).includes(userId)) {
    console.log("login is success");
    dispatch({
      type: actionTypes.LOGIN_REQUEST_CHECK,
      payload: { isAuthenticated: true, id: userId },
    });
  } else {
    console.log("something was wrong");
  }
};

export const logOut = () => {
  return {
    type: actionTypes.LOGIN_REQUEST_CHECK,
    payload: { isAuthenticated: false, id: null },
  };
};
