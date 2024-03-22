import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

import { supabase } from "../client";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
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

  async function handleSubmit(e) {
    e.preventDefault();
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
      if (data) setIsSubmitted(true);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      {isSubmitted ? (
        <section className="w-full h-screen flex flex-col justify-center items-center">
          <div className="px-16 flex flex-col gap-6">
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-5xl">{formData.fullName}</h1>
              <p className="text-base w-full">
                Ditt konto är skapat! Logga in på din profil och sök LIA
              </p>
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
