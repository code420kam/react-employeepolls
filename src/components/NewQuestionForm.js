import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "../redux/action/questions";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./newQuestionForm.css"

const NewQuestionForm = () => {
  const [options, setOptions] = useState({});
  const navigate = useNavigate();
  const auth = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setOptions({ ...options, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const author = auth["id"];
      if (options.optionOneText && options.optionTwoText) {
        dispatch(createQuestion({ ...options, author }));
        window.alert("Successfull submit!!!");
        navigate("/");
      } else {
        window.alert("Error: Please fill all options");
      }
    } catch (error) {
      window.alert("Something went wrong... try again!");}
  };
  return (
    <div className="formContainer mt-4">
      <h2>Would You Rather</h2>
      <p>Create Your Own Poll</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>First Option</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="optionOneText"
            placeholder="Option One"/>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Second Option</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="optionTwoText"
            placeholder="Option Two"/>
        </Form.Group>
        <Button variant="outline-info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewQuestionForm;