import * as actionTypes from "../action/actionTypes";

const question = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        ...action.payload,};
    case actionTypes.CREATE_QUESTION:
      return {
        ...state,
        [action.payload.id]: action.payload,};
    case actionTypes.ANSWER_QUESTION:
      return {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: state[action.payload.qid][
              action.payload.answer
            ].votes.concat([action.payload.authedUser]),
          },},
      };
    default:
      return state;
  }};

export default question;
