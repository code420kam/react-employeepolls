import initialState from "./initialState";
import * as actionTypes from "../action/actionTypes";

export default function users(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return action.payload;
    case actionTypes.ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: state[action.payload.author].questions.concat([
            action.payload.id,
          ])},
      };
    case actionTypes.ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          }},
      };
      default: 
      return state;
  }}