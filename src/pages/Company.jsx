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
import CompanyQuickQuestions from "../components/CompanyQuickQuestions";
import CompanyInternType from "../components/CompanyInternType";
import CompanyInternCount from "../components/CompanyInternCount";
import CompanyInternshipDuration from "../components/CompanyInternshipDuration";
import CompanySkillsRequested from "../components/CompanySkillsRequested";
import CompanyDescription from "../components/CompanyDescription";
import CompanyPreviewPost from "../components/CompanyPreviewPost";
import CompanyConfirmation from "../components/CompanyConfirmation";
import CompanyEventStats from "../components/CompanyEventStats";
// import more form pages as needed

const Company = () => {
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState({
    name: "",
    sector: "",
    employees: 0,
    focusAreas: {},
    url: "",
    type: "",
    software: {},
    quickQuestions: {},
    internType: "",
    internCount: 1,
    internshipDuration: "",
    skillsRequested: {},
    description: "",
  });

  const formPages = [
    CompanyGreeting,
    CompanyName,
    CompanySector,
    CompanyEmployees,
    CompanyFocusAreas,
    CompanyUrl,
    CompanyType,
    CompanySoftware,
    CompanyQuickQuestions,
    CompanyInternType,
    CompanyInternCount,
    CompanyInternshipDuration,
    CompanySkillsRequested,
    CompanyDescription,
    CompanyPreviewPost,
    CompanyConfirmation,
    CompanyEventStats,
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
          <FormPage
            counter={counter}
            setCounter={setCounter}
            answer={answer}
            setAnswer={setAnswer}
          />
        </div>
      </div>
    </>
  );
};

export default Company;
