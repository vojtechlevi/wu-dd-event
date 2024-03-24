import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If the user is authenticated, render the children components
  return children;
}

export default ProtectedRoute;
