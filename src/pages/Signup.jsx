import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

import { supabase } from "../client";
import ThemeBox from "../components/ThemeBox";
import Modal from "../components/GDPR/Modal";

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    modal ? setModal(false) : null;
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
      "Unable to validate email address: invalid format":
        "Ogiltigt e-post format",
      "Anonymous sign-ins are disabled": "Anonyma konton är inte tillåtet",
      "User already registered":
        "En användare med denna e-postadress finns redan",
      "Signup requires a valid password":
        "Registrering kräver ett giltigt lösenord",
      "Password should be at least 6 characters.":
        "Lösenordet måste vara minst 6 tecken långt",
    };

    return errorTranslations[message] || message;
  }

  async function handleSubmit(event) {
    event.preventDefault();

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
        setModal(false);
      } else if (data) {
        setModal(false);
        setIsSubmitted(true);
        setCountdown(10);
        // Sign the user out after sign-up
        await supabase.auth.signOut();
      }
    } catch (error) {
      alert(error);
    }
  }

  function handleButtonClick(event) {
    event.preventDefault();

    // Check if there are no error messages
    if (!errorMessage) {
      setModal(true);
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
      {modal ? (
        <Modal
          modal={modal}
          setModal={setModal}
          handleSubmit={handleSubmit}
          color={"yrgo-blue"}
        />
      ) : null}
      <ThemeBox backBtn="/login">
        {isSubmitted ? (
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-6 pl-2">
              <p className="w-full text-xl">
                Ditt konto är skapat! <br />
              </p>
              <h1 className="text-5xl font-extrabold uppercase">
                {formData.fullName}
              </h1>
              <p>
                Logga in på din profil och sök bland företag och kanske hitta en
                LIA plats?
              </p>
              <p className="text-xs">Du omdirigeras om: {countdown}</p>
            </div>
            <Link to="/login">
              <button className=" w-full border-y-2 border-yrgo-blue bg-yrgo-blue px-4 py-3 font-extrabold uppercase text-white">
                Logga In
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full">
            <div className="mb-8 pl-2">
              <h2 className=" text-5xl font-extrabold uppercase">
                Skapa Konto
              </h2>
            </div>
            <form className="flex w-full flex-col ">
              <input
                type="text"
                name="fullName"
                placeholder="Namn"
                onChange={handleChange}
                className="w-full border-t-2 border-yrgo-blue px-4 py-6 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Mailadress"
                onChange={handleChange}
                className="w-full border-t-2 border-yrgo-blue px-4 py-6 focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Lösenord"
                onChange={handleChange}
                className="w-full border-t-2 border-yrgo-blue px-4 py-6 focus:outline-none"
              />
              {errorMessage ? (
                <div className="w-full border-t-2 border-yrgo-blue bg-[#f2f2f2]">
                  <p className="py-4 text-center text-yrgo-blue">
                    {errorMessage}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div className="flex justify-start">
                <button
                  onClick={handleButtonClick}
                  className="flex h-12 w-full items-center justify-center border-y-2 border-yrgo-blue bg-yrgo-blue font-extrabold uppercase text-white"
                >
                  Skapa Konto
                </button>
              </div>
            </form>
          </div>
        )}
      </ThemeBox>
    </>
  );
};

export default Signup;
