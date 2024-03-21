import React from "react";
import { useState } from "react";

import BackArrow from "../components/BackArrow";
import FormPage0 from "../components/FormPage0";
import FormPage1 from "../components/FormPage1";
import FormPage2 from "../components/FormPage2";
import FormPage3 from "../components/FormPage3";
import FormPage4 from "../components/FormPage4";
import FormPage5 from "../components/FormPage5";
import FormPage6 from "../components/FormPage6";
import FormPage7 from "../components/FormPage7";
import FormPage8 from "../components/FormPage8";
import FormPage9 from "../components/FormPage9";
import FormPage10 from "../components/FormPage10";
// import more form pages as needed

const Company = () => {
  const [counter, setCounter] = useState(0);

  const formPages = [
    FormPage0,
    FormPage1,
    FormPage2,
    FormPage3,
    FormPage4,
    FormPage5,
    FormPage6,
    FormPage7,
    FormPage8,
    FormPage9,
    FormPage10,
    // add more form pages as needed
  ];

  const FormPage = formPages[counter];

  return (
    <>
      <div className="h-screen w-full relative">
        <button
          onClick={() => setCounter(counter - 1)}
          className="absolute left-8 top-8">
          <BackArrow />
        </button>
        <div className="h-full flex flex-col justify-center items-center gap-4 p-8">
          <FormPage counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  );
};

export default Company;
