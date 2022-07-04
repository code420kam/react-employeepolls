import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./leaderboard.css";

const Leaderboard = () => {
  const users = Object.values(useSelector((state) => state.users));
  users.map(
    (user) =>
      (user.score = user.questions.length + Object.keys(user.answers).length));
  const sortedUsersByScore = users.sort((a, b) => b.score - a.score);
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsersByScore.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  style={{ width: "4em" }}
                  alt="avatar"
                  src={`${user.avatarURL}`}/>
                <span>{user.name}</span>
              </td>
              <td>
                <span>{Object.keys(user.answers).length}</span>
              </td>
              <td>
                <span>{user.questions.length}</span>
              </td>
            </tr>))}
        </tbody>
      </Table>
    </div>
  );};

export default Leaderboard;
