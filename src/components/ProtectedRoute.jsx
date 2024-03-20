import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;
