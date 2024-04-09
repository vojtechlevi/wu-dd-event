import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../client";
import UserContext from "../UserContext";
import ThemeBox from "../components/ThemeBox";

const Login = () => {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setErrorMessage("");
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function signInWithEmail(e) {
    e.preventDefault();

    // Form validation
    if (!formData.email && !formData.password) {
      setErrorMessage("Mailadress och lösenord krävs.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage(translateErrorMessage(error.message));
        return;
      }

      if (data) {
        setUser(data);
        navigate("/student");
      }
    } catch (error) {
      alert(error);
    }
  }

  function translateErrorMessage(message) {
    const errorTranslations = {
      "Email and password are required.": "E-post och lösenord krävs.",
      "Invalid login credentials": "Ogiltiga inloggningsuppgifter",
    };

    return errorTranslations[message] || message;
  }
  return (
    <>
      <ThemeBox backBtn="/">
        <div className="w-full">
          <div className="mb-8 pl-2">
            <h2 className=" text-5xl font-extrabold uppercase">Logga in</h2>
          </div>
          <form onSubmit={signInWithEmail} className="flex w-full flex-col">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Mailadress"
              className="w-full border-t-2 border-yrgo-blue px-4 py-6 outline-none"
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Lösenord"
              className="w-full border-t-2 border-yrgo-blue px-4 py-6 outline-none"
            />
            {errorMessage ? (
              <div className="w-full border-t-2 border-yrgo-blue ">
                <p className="py-4 text-center text-yrgo-blue">
                  {errorMessage}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="flex h-12 w-full border-y-2 border-yrgo-blue">
              <button
                className="h-full w-1/2 bg-yrgo-blue px-2 font-extrabold uppercase text-white"
                type="submit"
              >
                Logga In
              </button>
              <Link to="/signup" className="h-full w-1/2 ">
                <button className=" h-full w-full px-2 font-extrabold uppercase text-yrgo-blue">
                  Skapa Konto
                </button>
              </Link>
            </div>
          </form>
        </div>
      </ThemeBox>
    </>
  );
};

export default Login;
