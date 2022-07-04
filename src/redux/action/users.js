import * as actionTypes from "./actionTypes";

export const addQuestionToUser = (question) => {
  return { type: actionTypes.ADD_QUESTION_TO_USER, payload: question };
};

export const addAnswerToUser = (question) => {
  return { type: actionTypes.ADD_ANSWER_TO_USER, payload: question };
};
