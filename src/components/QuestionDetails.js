import React, {  useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AnswerResultpage from "./AnswerPage";
import { Button } from "react-bootstrap";
import { saveQuestionAnswer } from "../redux/action/questions";
import "./questionDetails.css"

const QuestionDetails = () => {
  const [disabledStatus, setDisabledStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const questions = useSelector((state) => {
    return Object.values(state.question);
  });
  
  const selectedQuestion = questions ? questions.find((question) => question.id === id) : null;

  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.login);
  const selectedUser = users && selectedQuestion !== undefined ? users[selectedQuestion.author] : null;
  const answeredQuestionsStatus = selectedQuestion?.optionOne.votes.includes(auth.id) || selectedQuestion?.optionTwo.votes.includes(auth.id)

  const handleAnswer = (option) => {
    const author = auth["id"];
    dispatch(saveQuestionAnswer(author, id, option));
    navigate("/questions/" + id);
    setDisabledStatus(true);
  };
  return (
    <>
    {selectedQuestion ? 
     (<div className="question-container">
        <img className="avatar" alt="avatar" src={selectedUser.avatarURL} style={{width: "25%", height: "25%"}}></img>
        <h3 className="text">Would You Rather</h3>
        <div className="option-text">
          <Button
            onClick={() => handleAnswer("optionOne")}
            style={{ padding: "3vh", margin: "4vh" }}
            variant="outline-info"
            disabled={disabledStatus}>
            {selectedQuestion.optionOne.text}
          </Button>
          <Button
            onClick={() => handleAnswer("optionTwo")}
            style={{ padding: "3vh", margin: "4vh" }}
            variant="outline-info"
            disabled={disabledStatus}>
            {selectedQuestion.optionTwo.text}
          </Button>
        </div>
        {answeredQuestionsStatus && (
          <AnswerResultpage userId={auth.id} question={selectedQuestion} />
        )}
      </div>)  : (<div className="not-found-question"><div className="not-found-text">Selected question does not exist..</div></div>)}</>
  );};
export default QuestionDetails;
