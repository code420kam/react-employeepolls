import React, { useEffect } from "react";
import AuthUser from "./AuthedUser";
import { useSelector } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.login);
  const location = useLocation();
  useEffect(() => {
    if (auth.isAuthenticated) {
      if (location.state !== undefined && 'from' in location.state) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }}
  }, [auth.isAuthenticated]);
  return (
    <React.Fragment>
      <AuthUser />
    </React.Fragment>
  );
};

export default Login;
