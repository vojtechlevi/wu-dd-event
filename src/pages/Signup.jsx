import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { ArrowLeft } from "lucide-react";

import { supabase } from "../client";
import ThemeBox from "../components/ThemeBox";
import Modal from "../components/Modals/GdprModal";

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
          <div className="flex  flex-col gap-6">
            <div className="flex w-full flex-col gap-6 pl-2">
              <p className="w-full text-xl">Ditt konto är skapat!</p>
              <h1 className="text-5xl font-extrabold uppercase">
                {formData.fullName}
              </h1>
              <p>
                Logga in på din profil och sök bland företag, kanske hitta en
                LIA plats?
              </p>
              <p className="text-xs">Du omdirigeras om: {countdown}</p>
            </div>
            <Link to="/login">
              <button className="ml-2 border-y-2 border-yrgo-blue bg-yrgo-blue px-4 py-3 font-extrabold uppercase text-white">
                Logga In
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full lg:w-auto">
            <div className="mb-8 pl-2">
              <h2 className=" text-5xl font-extrabold uppercase lg:text-7xl ">
                Skapa Konto
              </h2>
            </div>
            <form className="flex w-full flex-col lg:items-center lg:justify-center lg:gap-4 ">
              <input
                type="text"
                name="fullName"
                placeholder="Namn"
                onChange={handleChange}
                className="w-full border-t-2 border-yrgo-blue px-4 py-6 focus:outline-none lg:w-[445px] lg:border-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Mailadress"
                onChange={handleChange}
                className="w-full border-t-2 border-yrgo-blue px-4 py-6 focus:outline-none lg:w-[445px] lg:border-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Lösenord"
                onChange={handleChange}
                className="w-full border-t-2 border-yrgo-blue px-4 py-6 focus:outline-none lg:w-[445px] lg:border-2"
              />
              {errorMessage ? (
                <div className="w-full border-t-2 border-yrgo-blue bg-[#f2f2f2] lg:w-[445px] lg:border-none">
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
                    onClick={handleButtonClick}
                    className=" h-full w-full bg-yrgo-blue px-2 font-extrabold uppercase text-white"
                  >
                    Skapa Konto
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 hidden w-full justify-between border-t-4 border-yrgo-blue lg:flex">
                <Link
                  to="/login"
                  className="flex h-14 w-14 items-center justify-center border-r-4  border-yrgo-blue"
                >
                  <ArrowLeft />
                </Link>
                <div className="flex h-12  border-y-4 border-yrgo-blue lg:h-14 lg:border-t-4 lg:border-none">
                  <button
                    onClick={handleButtonClick}
                    className=" h-full w-1/2 border-l-4 border-yrgo-blue bg-yrgo-blue px-2 font-extrabold uppercase text-white lg:w-[230px]"
                  >
                    Skapa Konto
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </ThemeBox>
    </>
  );
};

export default Signup;
