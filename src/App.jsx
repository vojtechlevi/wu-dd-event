import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { supabase } from "./client";
import UserContext from "./UserContext";

import Home from "./pages/Home";
import Student from "./pages/Student";
import Company from "./pages/Company";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import ThemeBox from "./components/ThemeBox";
import Test from "./pages/Test";

function App() {
  const [user, setUser] = useState(null);
  const userContextValue = { user, setUser };
  let navigate = useNavigate();

  useEffect(() => {
    const user = supabase.auth.user;
    setUser(user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const user = session?.user ?? null;
        setUser(user);

        setTimeout(() => {
          if (user) {
            navigate("/student");
          }
        }, 3000);
      },
    );

    // Cleanup the listener
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <>
      <UserContext.Provider value={userContextValue}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company" element={<Company />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute>
                <Student />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
