import { useState } from "react";

import ButtonArrowRight from "../components/Buttons/ButtonArrowRight";
import ButtonArrowLeft from "../components/Buttons/ButtonArrowLeft";

// todo: make Greeting a separate page instead of a form page
import Greeting from "../components/CompanyFormPages/Greeting";

import Contact from "../components/CompanyFormPages/Contact";
import Employees from "../components/CompanyFormPages/Employees";
import FocusAreas from "../components/CompanyFormPages/FocusAreas";
import SoftwaresDesign from "../components/CompanyFormPages/SoftwaresDesign";
import SoftwaresDev from "../components/CompanyFormPages/SoftwaresDev";
import QuickQuestions from "../components/CompanyFormPages/QuickQuestions";
import Type from "../components/CompanyFormPages/Type";
import InternTypeCount from "../components/CompanyFormPages/InternTypeCount";
import InternshipDuration from "../components/CompanyFormPages/InternshipDuration";
import PreviewPost from "../components/CompanyFormPages/PreviewPost";

// todo: make Confirmation a popup from preview post instead
import Confirmation from "../components/CompanyFormPages/Confirmation";

// todo: make EventStats a separate page  instead of a form page
import EventStats from "../components/CompanyFormPages/EventStats";

const Company = () => {
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState({
    contact: [],
    employees: "",
    focusAreas: [],
    softwaresDesign: [],
    softwaresDev: [],
    top5: [
      {
        flexTime: null,
        dogFriendly: null,
        OfficeInSweden: null,
        companyTypeInhouse: null,
        remoteWorkFriendly: null,
      },
    ],
    companyType: [
      {
        cool: null,
        fast: null,
        stable: null,
      },
    ],
    internTypeCount: {
      "Digital designer": 0,
      Webbutvecklare: 0,
    },
    internshipStartDate: "",
    internshipEndDate: "",
  });

  const formPages = [
    Greeting,
    Contact,
    Employees,
    FocusAreas,
    SoftwaresDesign,
    SoftwaresDev,
    QuickQuestions,
    Type,
    InternTypeCount,
    InternshipDuration,
    PreviewPost,
    Confirmation,
    EventStats,
  ];

  const FormPage = formPages[counter];

  const formQuestions = [
    // these are counted in the progress bar (last 3 from above excluded)
    Greeting,
    Contact,
    Employees,
    FocusAreas,
    SoftwaresDesign,
    SoftwaresDev,
    QuickQuestions,
    Type,
    InternTypeCount,
    InternshipDuration,
  ];

  // Instead of "Fråga X/Y", for the last pages that aren't questions:
  const message = ["Preview", "Confirmation", "Stats"];

  return (
    <section className="relative grid h-full w-full grid-rows-layout">
      <div className=" w-full bg-white">
        <div className=" h-12 w-full bg-yrgo-red"></div>
        <div className="mx-4 border-x-2  border-yrgo-red">
          <div className="flex justify-between  border-b-2 border-yrgo-red px-4">
            <p className="my-1 font-extrabold uppercase  text-yrgo-red">
              yrgo event 24 april
            </p>
            <div className="border border-yrgo-red"></div>
            <p className=" my-1 font-extrabold uppercase text-yrgo-red">
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
        </div>
      </div>

      <div className=" mx-4 overflow-y-auto border-x-2 border-yrgo-red pt-8">
        <FormPage
          counter={counter}
          setCounter={setCounter}
          answer={answer}
          setAnswer={setAnswer}
        />
      </div>

      <div className="mb-4 flex w-full px-4">
        <ButtonArrowLeft
          onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
        >
          tillbaka
        </ButtonArrowLeft>
        <ButtonArrowRight
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          nästa
        </ButtonArrowRight>
      </div>
    </section>
  );
};

export default Company;
