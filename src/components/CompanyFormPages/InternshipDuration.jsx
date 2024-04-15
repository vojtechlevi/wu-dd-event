import { useState } from "react";

const InternshipDuration = ({ answer, setAnswer }) => {
  const [durationAnswer, setDurationAnswer] = useState(
    answer.internshipDuration || "",
  );

  const choices = ["hela perioden", "delar av perioden", "vet mer senare"];

  const handleChoiceChange = (event) => {
    const newDurationAnswer = event.target.value;
    setDurationAnswer(newDurationAnswer);

    if (event.target.value === "hela perioden") {
      setAnswer((prevState) => ({
        ...prevState,
        internshipDuration: "hela perioden",
        internshipStartDate: "2024-11-25",
        internshipEndDate: "2025-05-30",
      }));
    } else if (event.target.value === "vet mer senare") {
      setAnswer((prevState) => ({
        ...prevState,
        internshipDuration: "vet mer senare",
        internshipStartDate: null,
        internshipEndDate: null,
      }));
    }
  };

  // for "delar av perioden" value:
  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;

    setAnswer((prevState) => ({
      ...prevState,
      internshipDuration: "delar av perioden",
      internshipStartDate: newStartDate,
    }));
  };

  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value;

    setAnswer((prevState) => ({
      ...prevState,
      internshipDuration: "delar av perioden",
      internshipEndDate: newEndDate,
    }));
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red lg:border-b-8 lg:p-8 lg:text-4xl">
        Hela perioden eller delar?
      </h2>
      <p className="cursor-pointer border-b-2 border-yrgo-red p-4  font-extrabold uppercase text-yrgo-red  lg:border-b-4">
        Vår praktikperiod löper mellan 25 november 2024 – 30 maj 2025.
        <br />
        <br />
        Har ni möjlighet att ta emot under...
      </p>
      <form className="border-yrgo-red lg:w-1/2 lg:border-r-4">
        {choices.map((choice) => {
          return (
            <div
              key={choice}
              className={` ${
                durationAnswer === choice
                  ? "border-white bg-yrgo-red"
                  : "border-yrgo-red bg-white"
              }  border-b-2 p-4 lg:border-b-4 `}
            >
              <label className="align-center flex">
                <input
                  checked={durationAnswer === choice ? true : false}
                  className=" border-yrgo-red checked:border-white"
                  type="radio"
                  value={choice}
                  name={choice}
                  onChange={handleChoiceChange}
                  id={choice}
                />
                <span
                  className={` ${
                    durationAnswer === choice ? "text-white" : "text-yrgo-red"
                  } cursor-pointer pl-4 font-extrabold uppercase`}
                >
                  {choice}
                </span>
              </label>
              {choice == "delar av perioden" &&
              durationAnswer == "delar av perioden" ? (
                <div className="m-4 ml-8 flex flex-col">
                  <span className="mb-1 text-sm font-normal capitalize text-white">
                    från:
                  </span>
                  <input
                    className=" w-min appearance-none border-2 border-white bg-transparent px-2 py-1 font-extrabold uppercase text-white focus:outline-none"
                    defaultValue={answer.internshipStartDate || "2024-11-25"}
                    type="date"
                    name="durationStartDate"
                    onChange={handleStartDateChange}
                  />
                  <br />
                  <span className="mb-1 text-sm font-normal capitalize text-white">
                    till:
                  </span>
                  <input
                    className=" w-min appearance-none border-2 border-white bg-transparent px-2 py-1 font-extrabold uppercase text-white focus:outline-none"
                    defaultValue={answer.internshipEndDate || "2025-05-30"}
                    type="date"
                    name="durationEndDate"
                    onChange={handleEndDateChange}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </form>
    </>
  );
};

export default InternshipDuration;
