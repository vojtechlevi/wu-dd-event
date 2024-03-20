import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import UserContext from "./UserContext";

import Home from "./pages/Home";
import Student from "./pages/Student";
import Company from "./pages/Company";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const userContextValue = { user, setUser };
  return (
    <>
      <UserContext.Provider value={userContextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company" element={<Company />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute>
                <Student />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
