import React from "react";
import {  Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  let path = useLocation();
  if (!isAuthenticated) {
    if (path !== undefined && 'pathname' in path) {
      return <Navigate to="/login" state={{ from: path.pathname }} replace />;} 
      else 
      {
      return <Navigate to="/login" replace />;
      }}
  return children;
};

export default PrivateRoute;
