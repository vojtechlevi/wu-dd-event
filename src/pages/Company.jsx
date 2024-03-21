import React from "react";
import { useState } from "react";

import BackArrow from "../components/BackArrow";
import CompanyGreeting from "../components/CompanyGreeting";
import CompanyName from "../components/CompanyName";
import CompanySector from "../components/CompanySector";
import CompanyEmployees from "../components/CompanyEmployees";
import CompanyFocusAreas from "../components/CompanyFocusAreas";
import CompanyUrl from "../components/CompanyUrl";
import CompanyType from "../components/CompanyType";
import CompanySoftware from "../components/CompanySoftware";
import CompanyInternType from "../components/CompanyInternType";
import CompanyInternCount from "../components/CompanyInternCount";
import CompanyInternshipDuration from "../components/CompanyInternshipDuration";
// import more form pages as needed

const Company = () => {
  const [counter, setCounter] = useState(0);

  const formPages = [
    CompanyGreeting,
    CompanyName,
    CompanySector,
    CompanyEmployees,
    CompanyFocusAreas,
    CompanyUrl,
    CompanyType,
    CompanySoftware,
    CompanyInternType,
    CompanyInternCount,
    CompanyInternshipDuration,
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
