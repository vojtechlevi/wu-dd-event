import React from "react";
import { useState } from "react";

import { MoveLeft, MoveRight } from "lucide-react";

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
    employees: "",
    focusAreas: {},
    url: "",
    type: "",
    software: {},
    quickQuestions: {},
    internType: {},
    internCount: 1,
    internshipDurationAnswer: "", // not written to db
    internshipStartDate: "",
    internshipEndDate: "",
    skillsRequested: "",
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

  const formQuestions = [
    // these are counted in the progress bar (last 3 from above excluded)
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
  ];

  // Instead of "Fråga X/Y", for the last pages that aren't questions:
  const message = ["Preview", "Confirmation", "Stats"];

  return (
    <section className="flex h-screen w-full flex-col">
      <div className=" h-12 bg-yrgo-red"></div>
      <div className=" mx-4 mb-4 flex h-full flex-col border-x-2 border-yrgo-red">
        <div className=" flex w-full justify-between border-b-2 border-yrgo-red">
          <p className="my-1 ml-4 font-extrabold uppercase  text-yrgo-red">
            yrgo event 24 april
          </p>
          <div className="border border-yrgo-red"></div>
          <p className=" my-1 mr-4 font-extrabold uppercase text-yrgo-red">
            {counter < formQuestions.length
              ? `fråga ${counter}/${formQuestions.length - 1}`
              : message[counter - formQuestions.length]}
          </p>
        </div>
        <div className=" flex h-6 w-full justify-between border-b-2 border-yrgo-red">
          {formQuestions.map((x) => {
            return (
              <div
                className={`${formQuestions.indexOf(x) < counter ? "bg-yrgo-red" : ""} w-full`}
                key={formQuestions.indexOf(x)}
              ></div>
            );
          })}
        </div>
        <FormPage
          counter={counter}
          setCounter={setCounter}
          answer={answer}
          setAnswer={setAnswer}
        />
      </div>
    </section>
  );
};

export default Company;
