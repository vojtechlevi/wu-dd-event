import React from "react";
import { useState } from "react";

import BackArrow from "../components/BackArrow";
import Greeting from "../components/CompanyFormPages/Greeting";
import Name from "../components/CompanyFormPages/Name";
import Sector from "../components/CompanyFormPages/Sector";
import Employees from "../components/CompanyFormPages/Employees";
import FocusAreas from "../components/CompanyFormPages/FocusAreas";
import Url from "../components/CompanyFormPages/Url";
import Type from "../components/CompanyFormPages/Type";
import Software from "../components/CompanyFormPages/Software";
import QuickQuestions from "../components/CompanyFormPages/QuickQuestions";
import InternType from "../components/CompanyFormPages/InternType";
import InternCount from "../components/CompanyFormPages/InternCount";
import InternshipDuration from "../components/CompanyFormPages/InternshipDuration";
import SkillsRequested from "../components/CompanyFormPages/SkillsRequested";
import Description from "../components/CompanyFormPages/Description";
import PreviewPost from "../components/CompanyFormPages/PreviewPost";
import Confirmation from "../components/CompanyFormPages/Confirmation";
import EventStats from "../components/CompanyFormPages/EventStats";
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
    Greeting,
    Name,
    Sector,
    Employees,
    FocusAreas,
    Url,
    Type,
    Software,
    QuickQuestions,
    InternType,
    InternCount,
    InternshipDuration,
    SkillsRequested,
    Description,
    PreviewPost,
    Confirmation,
    EventStats,
    // add more form pages as needed
  ];

  const FormPage = formPages[counter];

  return (
    <>
      <div className="h-screen w-full relative">
        <button
          onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
          className="absolute left-8 top-8"
        >
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
