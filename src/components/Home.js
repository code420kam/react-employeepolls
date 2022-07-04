import React from "react";
import { Alert } from "react-bootstrap";
import "./home.css"
import { useSelector } from "react-redux";
import Question from "./Question";

const Home = () => {
  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.login);

  const questions = useSelector((state) =>
    Object.values(state.question)
  );

  const answeredQuestions = questions.filter(
    (question) =>
      question.optionOne.votes.includes(auth.id) ||
      question.optionTwo.votes.includes(auth.id)
  ).sort((a, b) => b.timestamp - a.timestamp);;

  const newQuestions = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(auth.id) &&
      !question.optionTwo.votes.includes(auth.id)
  ).sort((a, b) => b.timestamp - a.timestamp);;

  return (
    <div>
      <section className="container">
        <div className="left-half">
          <h2>New Questions</h2>
          <div className="card-container">
            {newQuestions.length > 0 ? (
              newQuestions.map((newQuestion) => (
                <Question
                  key={newQuestion.id}
                  question={newQuestion}
                  user={users[newQuestion.author]}/>))) 
                  :
                  (<Alert variant="info">
                <p className="mb-0">No new question...</p>
              </Alert>
            )}
          </div>
        </div>
        <div className="right-half">
          <h2>Done</h2>
          <div className="card-container">
            {answeredQuestions?.length > 0 ? (
              answeredQuestions.map((answeredQuestion) => (
                <Question
                  key={answeredQuestion.id}
                  question={answeredQuestion}
                  user={users[answeredQuestion.author]}/>)))
                  :
                  (<Alert variant="success">
                <p className="mb-0">No answered question...</p>
              </Alert>
            )}
          </div>
        </div>
      </section>
    </div>
  );};

export default Home;
