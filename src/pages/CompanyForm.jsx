import { useState } from "react";

import { supabase } from "../client";

// Icons
import yrgologo from "../assets/yrgo-text-white.png";

// Buttons and Modals
import ButtonArrowRight from "../components/Buttons/ButtonArrowRight";
import ButtonArrowLeft from "../components/Buttons/ButtonArrowLeft";
import GdprModal from "../components/Modals/GdprModal";
import BlueQuestionsModal from "../components/Modals/BlueQuestionsModal";
import SuccessModal from "../components/Modals/SuccessModal";

// Form pages
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

const CompanyForm = () => {
  const [counter, setCounter] = useState(0);

  const [answer, setAnswer] = useState({
    contact: {
      name: "",
      url: "",
      email: "",
    },
    employees: "",
    focusAreas: [],
    softwaresDesign: [],
    softwaresDev: [],
    top5: {
      flexTime: null,
      dogFriendly: null,
      officeInSweden: null,
      companyTypeInhouse: null,
      remoteWorkFriendly: null,
    },
    companyType: {
      cool: null,
      fast: null,
      stable: null,
    },

    internTypeCount: {
      "Digital designer": 0,
      Webbutvecklare: 0,
    },
    internType: [],
    internshipStartDate: "2024-11-25", // default
    internshipEndDate: "2025-05-30", // default
    internshipDuration: "",
  });

  // modals:
  const [successModal, setSuccessModal] = useState(false);
  const [gdprModal, setGdprModal] = useState(false);
  const [blueQuestionsModal, setBlueQuestionsModal] = useState(false);

  const formPages = [
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
  ];

  const FormPage = formPages[counter];

  async function writeToDatabase() {
    try {
      const { error } = await supabase.from("companies").insert(answer);
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  // the default is red theme. only pages 5 and 6 have the blue theme
  let blueTheme = false;
  if (counter === 5 || counter == 6) {
    blueTheme = true;
  }

  return (
    <>
      {gdprModal ? (
        <GdprModal
          modal={gdprModal}
          setModal={setGdprModal}
          color={"yrgo-red"}
          handleSubmit={() => {
            setCounter(counter + 1);
            setGdprModal(!gdprModal);
          }}
        />
      ) : null}

      {blueQuestionsModal ? (
        <BlueQuestionsModal
          modal={gdprModal}
          setModal={setGdprModal}
          color={"yrgo-blue"}
          goBack={() => {
            setBlueQuestionsModal(!blueQuestionsModal);
          }}
          continue={() => {
            setCounter(counter + 1);
            setBlueQuestionsModal(!blueQuestionsModal);
          }}
        />
      ) : null}

      {successModal ? (
        <SuccessModal
          modal={successModal}
          setModal={setSuccessModal}
          linkTo={"/event-info"}
        />
      ) : null}

      <main className="relative grid h-full w-full grid-rows-layout">
        <header className=" w-full bg-white">
          <div
            className={`h-12 w-full  ${blueTheme ? "bg-yrgo-blue" : "bg-yrgo-red"} lg:hidden`}
          ></div>
          <div
            className={`hidden items-center justify-center lg:mx-16 lg:mt-4 lg:flex lg:h-24 ${blueTheme ? "bg-yrgo-blue" : "bg-yrgo-red"} `}
          >
            <img src={yrgologo} alt="Yrgo logo text" />
          </div>
          {/*  don't display the progress bar on the last page (preview page): */}
          {counter !== formPages.length - 1 ? (
            <div
              className={`mx-4 border-x-2  lg:mx-16 lg:border-x-4 ${blueTheme ? "border-yrgo-blue" : "border-yrgo-red"}`}
            >
              <div
                className={`flex justify-between  border-b-2 lg:border-b-4 ${blueTheme ? "border-yrgo-blue" : "border-yrgo-red"} `}
              >
                <p
                  className={`px-4 py-1 font-extrabold uppercase lg:py-4  ${blueTheme ? "text-yrgo-blue" : "text-yrgo-red"}`}
                >
                  yrgo event 24 april
                </p>

                <p
                  className={`border-l-2 px-4 py-1 font-extrabold uppercase  lg:border-l-4 lg:py-4 ${blueTheme ? "border-yrgo-blue text-yrgo-blue" : "border-yrgo-red text-yrgo-red"}`}
                >
                  fråga {counter + 1}/{formPages.length - 1}
                </p>
              </div>
              <div
                className={`flex h-6 w-full justify-between border-b-2 lg:border-b-4 ${blueTheme ? "border-yrgo-blue" : "border-yrgo-red"}`}
              >
                {formPages.map((page) => {
                  return (
                    <div
                      className={`${formPages.indexOf(page) <= counter && blueTheme ? "bg-yrgo-blue" : formPages.indexOf(page) <= counter ? "bg-yrgo-red" : ""} w-full`}
                      key={formPages.indexOf(page)}
                    ></div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </header>

        {/*  all but last page (preview page): */}
        {counter !== formPages.length - 1 ? (
          <section
            className={`mx-4 overflow-y-auto  border-x-2 lg:mx-16 lg:border-x-4 ${blueTheme ? "border-yrgo-blue" : "border-yrgo-red"} py-8`}
          >
            <FormPage answer={answer} setAnswer={setAnswer} />
          </section>
        ) : (
          <section className="overflow-y-auto lg:mx-16">
            <FormPage answer={answer} setAnswer={setAnswer} />
          </section>
        )}

        <section
          className={`${blueTheme ? "border-yrgo-blue" : "border-yrgo-red"} mx-4 mb-4  flex border-2 lg:mx-16 lg:justify-between lg:border-4`}
        >
          {counter === 0 ? ( // first form page
            <ButtonArrowLeft isLink={true} linkTo={"/company"}>
              tillbaka
            </ButtonArrowLeft>
          ) : (
            <ButtonArrowLeft
              onClick={() => setCounter(counter - 1)}
              color={blueTheme ? "blue" : "red"}
            >
              tillbaka
            </ButtonArrowLeft>
          )}

          {counter === 0 ? ( // first form page
            <ButtonArrowRight
              onClick={() => {
                setGdprModal(true);
              }}
            >
              nästa
            </ButtonArrowRight>
          ) : counter === 4 ? ( // page before the blue pages
            <ButtonArrowRight
              onClick={() => {
                setBlueQuestionsModal(true);
              }}
            >
              nästa
            </ButtonArrowRight>
          ) : counter === formPages.length - 1 ? ( // last page
            <ButtonArrowRight
              onClick={() => {
                setSuccessModal(true);
                writeToDatabase();
              }}
            >
              klar
            </ButtonArrowRight>
          ) : (
            <ButtonArrowRight
              color={blueTheme ? "blue" : "red"}
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              nästa
            </ButtonArrowRight>
          )}
        </section>
      </main>
    </>
  );
};

export default CompanyForm;
