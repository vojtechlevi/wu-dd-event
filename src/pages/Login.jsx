import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { MoveLeft } from "lucide-react";

import { supabase } from "../client";
import UserContext from "../UserContext";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const { setUser } = useContext(UserContext);
  let navigate = useNavigate();

  async function signInWithEmail(e) {
    e.preventDefault();

    // Form validation
    if (!formData.email && !formData.password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setErrorMessage(error.message);
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
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="px-4 w-[320px]">
          <div className="w-full p mb-8 text-[#d2d2d2]">
            <Link to="/">
              <MoveLeft size={32} />
            </Link>
          </div>
          <div className="w-full flex flex-col gap-6 justify-center px-8">
            <h1 className="text-6xl">Logga in</h1>
            <p className="text-base w-full justify-center">
              Kort text om varför skapa konto: spara favoriter,
            </p>
          </div>
          <form
            onSubmit={signInWithEmail}
            className="flex flex-col gap-6 my-20 w-full items-center"
          >
            <input
              required
              type="email"
              name="email"
              placeholder="Mailadress"
              onChange={handleChange}
              className="bg-[#DEDEDE] rounded-lg p-2 w-[250px]"
            />
            <input
              required
              type="password"
              name="password"
              placeholder="Lösenord"
              onChange={handleChange}
              className="bg-[#DEDEDE] rounded-lg p-2 w-[250px]"
            />
            {errorMessage && <p>{errorMessage}</p>}
            <div className="flex gap-4">
              <button
                type="submit"
                className="border border-black bg-black text-white text-xl rounded-[32px] px-4 py-3"
              >
                Logga In
              </button>
              <Link to="/signup">
                <button className="border border-black text-xl rounded-[32px] px-4 py-3">
                  Skapa Konto
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
