import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInitialData } from "../redux/action/getInitialData";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import NewQuestion from "../components/NewQuestion";
import QuestionDetails from "../components/QuestionDetails";
import Login from "../components/Login";
import NavBar from "../components/Nav";
import NotFound from "../components/404";
import PrivateRoute from "./privateRouter";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const auth = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <NavBar />
              <Home />
            </PrivateRoute>}/>
        <Route
          path="/leaderboard"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <NavBar />
              <Leaderboard />
            </PrivateRoute>}/>
        <Route
          path="/add"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <NavBar />
              <NewQuestion />
            </PrivateRoute>}/>
        <Route
          path="/questions/:id"
          exact
          element={
            <PrivateRoute isAuthenticated={auth.isAuthenticated}>
              <NavBar />
              <QuestionDetails />
            </PrivateRoute>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );};

export default AppRouter;
