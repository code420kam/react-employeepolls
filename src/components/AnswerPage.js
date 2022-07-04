import React from "react";
import { Alert } from "react-bootstrap";

const AnswerResultPage = ({ question, userId }) => {
  const optionOneVotes = question?.optionOne.votes;
  const optionTwoVotes = question?.optionTwo.votes;

  const chosenOptionOne = optionOneVotes.includes(userId);
  const chosenOptionTwo = optionTwoVotes.includes(userId);
  function calcRates(optionOneVotes, optionTwoVotes) {
    const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  
    const optionOneVoteRate = Math.round(
      (optionOneVotes.length / totalVotes) * 100
    );
    const optionTwoVoteRate = Math.round(
      (optionTwoVotes.length / totalVotes) * 100
    );
  return { optionOneVoteRate, optionTwoVoteRate };
  }
  

  const rates = calcRates(optionOneVotes, optionTwoVotes);

  return (
    <div>
      {!chosenOptionOne && (
        <Alert style={{ width: "25em", margin: "3vh" }} variant="success">
          <Alert.Heading>
            Selected Option: {question.optionTwo.text}
          </Alert.Heading>
          <p>{optionTwoVotes.length} Employees voted for answers</p>
          <hr />
          <p className="mb-3">{rates.optionTwoVoteRate}%</p>
        </Alert>)}
          {!chosenOptionTwo && 
          (<Alert style={{ width: "25em", margin: "3vh" }} variant="info">
              <Alert.Heading>
                Selected Option: {question.optionOne.text}
              </Alert.Heading>
              <p>{optionOneVotes.length} Employees voted for answers:</p>
              <hr />
              <p className="mb-3">
                Total Votes: {optionOneVotes.length + optionTwoVotes.length} - Rate:{" "}
                {rates.optionOneVoteRate}%
              </p>
            </Alert>)}
    </div>
    );};

export default AnswerResultPage;
