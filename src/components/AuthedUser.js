import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/login";
import { Form } from "react-bootstrap";
import "./authedUser.css"
import { useNavigate } from "react-router-dom";

const AuthUser = () => {
  const [loginInfo, setLoginInfo] = useState("");
  const navigate = useNavigate();
  const users = Object.values(useSelector((state) => state.users));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLoginInfo(e.target.value);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (loginInfo !== "") {
      dispatch(login(loginInfo));
    } else {
      window.alert("Please select a user...");
      navigate("/login");
    }};

  return (
    <div className="authForm">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <div data-testid="kamil"></div>
                <Form.Select data-testid="selUser" id="selUser" size="lg" name="selUser" onChange={handleChange}>
                  <option value="">Please select a user</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>))}
                </Form.Select>
              </div>
              <button data-testid="submitButton" disabled={loginInfo === ""} type="submit" className="btn btn-success mt-2" size="lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );};

export default AuthUser;
