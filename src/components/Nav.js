import React from "react";
import { useDispatch } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../redux/action/login";
import { useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.login);
  const author = users[auth.id];
  
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <div>{" "}
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand>
              <Link to="/">
                Home
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/leaderboard">
                Leaderboard
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/add">
                New
              </Link>
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link><img className="avatar" style={{ width: "25px" }} alt="avatar" src={author.avatarURL}></img></Nav.Link>
            <Nav.Link>{author.name}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => logoutHandler()}>logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );};

export default NavBar;
