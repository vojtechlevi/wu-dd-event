import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
        <div className="w-full lg:w-auto">
          <div className="mb-8 flex pl-2 lg:items-center lg:justify-center">
            <h2 className=" text-5xl font-extrabold uppercase lg:text-7xl">
              Logga in
            </h2>
          </div>
          <form
            onSubmit={signInWithEmail}
            className="flex w-full flex-col lg:gap-4"
          >
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Mailadress"
              className="w-full border-t-2 border-yrgo-blue px-4 py-6 outline-none lg:w-[445px] lg:border-2"
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Lösenord"
              className="w-full border-t-2 border-yrgo-blue px-4 py-6 outline-none lg:w-[445px] lg:border-2"
            />
            {errorMessage ? (
              <div className="w-full border-t-2 border-yrgo-blue bg-[#f2f2f2] lg:border-none ">
                <p className="py-4 text-center text-yrgo-blue">
                  {errorMessage}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="lg:hidden">
              <Link
                to="/"
                className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center border-r-2 border-t-2 border-yrgo-blue"
              >
                <ArrowLeft />
              </Link>
              <div className="flex h-12 w-full border-y-2 border-yrgo-blue lg:hidden">
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
            </div>
            <div className="absolute bottom-0 left-0 hidden w-full justify-between border-t-4 border-yrgo-blue lg:flex">
              <Link
                to="/"
                className="flex h-14 w-14 items-center justify-center border-r-4  border-yrgo-blue"
              >
                <ArrowLeft />
              </Link>
              <div className="flex h-12  border-y-2 border-yrgo-blue lg:h-14 lg:border-t-2 lg:border-none">
                <Link to="/signup" className="h-full w-1/2 lg:w-[230px]">
                  <button className=" h-full w-full border-l-4 border-yrgo-blue px-2 font-extrabold uppercase text-yrgo-blue">
                    Skapa Konto
                  </button>
                </Link>
                <button
                  className="h-full w-1/2 bg-yrgo-blue px-2 font-extrabold uppercase text-white lg:w-[230px]"
                  type="submit"
                >
                  Logga In
                </button>
              </div>
            </div>
          </form>
        </div>
      </ThemeBox>
    </>
  );
};

export default Login;
