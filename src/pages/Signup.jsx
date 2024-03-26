import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

import { supabase } from "../client";

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
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

  function translateErrorMessage(message) {
    const errorTranslations = {
      "User already registered":
        "En användare med denna e-postadress finns redan",
      "Signup requires a valid password":
        "Registrering kräver ett giltigt lösenord",
      "Password should be at least 6 characters.":
        "Lösenordet måste vara minst 6 tecken långt",
    };

    return errorTranslations[message] || message;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.fullName.trim() === "") {
      setErrorMessage("Du behöver ange ditt namn");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) {
        setErrorMessage(translateErrorMessage(error.message));
      } else if (data) {
        setIsSubmitted(true);
        setCountdown(5);
        // Sign the user out after sign-up
        await supabase.auth.signOut();
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (countdown === 0) {
      navigate("/login");
    }
  }, [countdown, navigate]);

  return (
    <>
      {isSubmitted ? (
        <section className="w-full h-screen flex flex-col justify-center items-center">
          <div className="px-16 flex flex-col gap-6">
            <div className="w-full flex flex-col gap-6">
              <p className="text-base w-full">
                Ditt konto är skapat! <br />
              </p>
              <h1 className="text-5xl">{formData.fullName}</h1>
              <p>
                Logga in på din profil och sök bland företag och kanske hitta en
                LIA plats?
              </p>
              <p className="text-xs">Du omdirigeras om: {countdown}</p>
            </div>
            <Link to="/login">
              <button className="border border-black rounded-[32px] px-4 py-3">
                Logga In
              </button>
            </Link>
          </div>
        </section>
      ) : (
        <section className="w-full h-screen flex flex-col justify-center items-center">
          <div className="px-4 w-[320px]">
            <div className="w-full mb-8 text-[#d2d2d2]">
              <Link to="/login">
                <MoveLeft size={32} />
              </Link>
            </div>
            <div className="w-full flex flex-col gap-6 justify-center px-8">
              <h1 className="text-6xl">Skapa Konto</h1>
              <p className="text-base w-full justify-center">
                Kort text om varför skapa konto: spara favoriter,
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 my-20 w-full items-center"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Namn"
                onChange={handleChange}
                className="bg-[#DEDEDE] rounded-lg p-2 w-[250px]"
              />
              <input
                type="email"
                name="email"
                placeholder="Mailadress"
                onChange={handleChange}
                className="bg-[#DEDEDE] rounded-lg p-2 w-[250px]"
              />
              <input
                type="password"
                name="password"
                placeholder="Lösenord"
                onChange={handleChange}
                className="bg-[#DEDEDE] rounded-lg p-2 w-[250px]"
              />
              <p className="text-xs text-center text-red-600">{errorMessage}</p>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="w-full border border-black rounded-[32px] px-4 py-3 text-xl text-white bg-black"
                >
                  Skapa Konto
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Signup;
