import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Question = (props) => {
  return (
    <Card style={{ width: "16em", margin: "3vh" }}>
      <Card.Img src={props.user.avatarURL} variant="top" />
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>
          {new Date(props.question.timestamp).toLocaleString()}
        </Card.Text>
        <Link to={`/questions/${props.question.id}`}>
          <Button variant="outline-info">Show</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Question;
