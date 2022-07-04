import * as actionTypes from "./actionTypes";
import { _getUsers, _getQuestions } from "../../utils/_DATA";

export const getInitialData = () => (dispatch) => {
  _getUsers().then((response) => {
    dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: response });
  });
  _getQuestions().then((response) => {
    dispatch({ type: actionTypes.GET_QUESTIONS, payload: response });
  });
};
