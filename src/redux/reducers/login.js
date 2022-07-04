import initialState from "./initialState";
import * as actionTypes from "../action/actionTypes";

export default function login(state = initialState.AuthState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST_CHECK:
      return action.payload;
      default: 
      return state;
  }}
