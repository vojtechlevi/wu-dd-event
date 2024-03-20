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

  const formPages = {
    0: FormPage0,
    1: FormPage1,
    2: FormPage2,
    3: FormPage3,
    4: FormPage4,
    5: FormPage5,
    6: FormPage6,
    7: FormPage7,
    8: FormPage8,
    9: FormPage9,
    10: FormPage10,
    // add more form pages as needed
  };

  const FormPage = formPages[counter];

  const handleClickForward = () => {
    setCounter(counter + 1);
  };
  const handleClickBack = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="h-screen w-full relative">
        <button onClick={handleClickBack} className="absolute left-8 top-8">
          <BackArrow />
        </button>
        <div className="h-full flex flex-col justify-center items-center gap-4 p-8">
          <FormPage />
          <button
            onClick={handleClickForward}
            className="border border-black p-2">
            Nästa
          </button>
        </div>
      </div>
    </>
  );
};

export default Company;
