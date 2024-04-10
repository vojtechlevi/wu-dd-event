import { useState } from "react";

import { supabase } from "../client";

import ButtonArrowRight from "../components/Buttons/ButtonArrowRight";
import ButtonArrowLeft from "../components/Buttons/ButtonArrowLeft";
import SuccessModal from "../components/Modals/SuccessModal";
import GdprModal from "../components/Modals/GdprModal";

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
  const [successModal, setSuccessModal] = useState(false);
  const [gdprModal, setGdprModal] = useState(false);
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
    top5: [
      {
        flexTime: null,
        dogFriendly: null,
        officeInSweden: null,
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
    internshipDuration: "", // not written to db
  });

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

  return (
    <>
      {successModal ? (
        <SuccessModal
          modal={successModal}
          setModal={setSuccessModal}
          linkTo={"/event-info"}
        />
      ) : null}
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
      <main className="relative grid h-full w-full grid-rows-layout">
        <header className=" w-full bg-white">
          <div className=" h-12 w-full bg-yrgo-red"></div>
          {counter !== formPages.length - 1 ? (
            <div className="mx-4 border-x-2  border-yrgo-red">
              <div className="flex justify-between  border-b-2 border-yrgo-red px-4">
                <p className="my-1 font-extrabold uppercase  text-yrgo-red">
                  yrgo event 24 april
                </p>
                <div className="border border-yrgo-red"></div>
                <p className=" my-1 font-extrabold uppercase text-yrgo-red">
                  fråga {counter + 1}/{formPages.length - 1}
                </p>
              </div>
              <div className=" flex h-6 w-full justify-between border-b-2 border-yrgo-red">
                {formPages.map((page) => {
                  return (
                    <div
                      className={`${formPages.indexOf(page) <= counter ? "bg-yrgo-red" : ""} w-full`}
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

        {counter !== formPages.length - 1 ? (
          <section className="mx-4 overflow-y-auto border-x-2 border-yrgo-red pt-8">
            <FormPage answer={answer} setAnswer={setAnswer} />
          </section>
        ) : (
          <section className="overflow-y-auto px-4 ">
            <FormPage answer={answer} setAnswer={setAnswer} />
          </section>
        )}

        <section className="mb-4 flex w-full px-4">
          {counter === 0 ? ( // first form page
            <ButtonArrowLeft isLink={true} linkTo={"/company"}>
              tillbaka
            </ButtonArrowLeft>
          ) : (
            <ButtonArrowLeft onClick={() => setCounter(counter - 1)}>
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
