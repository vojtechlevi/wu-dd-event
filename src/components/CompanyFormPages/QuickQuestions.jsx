import { useState } from "react";

const QuickQuestions = ({ answer, setAnswer }) => {
  const [selectedChoices, setSelectedChoices] = useState({
    dogFriendly: answer.top5.dogPolicy || null,
    remoteWorkFriendly: answer.top5.remoteWorkFriendly || null,
    OfficeInSweden: answer.top5.OfficeInSweden || null,
    companyTypeInhouse: answer.top5.companyTypeInhouse || null,
    flexTime: answer.top5.flexTime || null,
    // add other choices here...
  });

  const handleChoiceChange = (choiceName, event) => {
    const updatedChoices = {
      ...selectedChoices,
      [choiceName]: event.target.value === "true",
    };
    setSelectedChoices(updatedChoices);
    setAnswer({ ...answer, top5: updatedChoices });
  };

  const choices = [
    {
      name: "dogFriendly",
      updateFunction: (event) => handleChoiceChange("dogFriendly", event),
      textBoolTrue: "hund = ja!",
      textBoolFalse: "no dogs :(",
    },
    {
      name: "remoteWorkFriendly",
      updateFunction: (event) =>
        handleChoiceChange("remoteWorkFriendly", event),
      textBoolTrue: "jobba hemma",
      textBoolFalse: "kontor är bäst",
    },
    {
      name: "OfficeInSweden",
      updateFunction: (event) => handleChoiceChange("OfficeInSweden", event),
      textBoolTrue: "bara sverige",
      textBoolFalse: "kontor utomlands",
    },
    {
      name: "companyTypeInhouse",
      updateFunction: (event) =>
        handleChoiceChange("companyTypeInhouse", event),
      textBoolTrue: "inhouse",
      textBoolFalse: "byrå",
    },
    {
      name: "flexTime",
      updateFunction: (event) => handleChoiceChange("flexTime", event),
      textBoolTrue: "flex",
      textBoolFalse: "workin 9–5, 4-ever",
    },
  ];

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        5 snabba!
      </h2>

      {choices.map((choice, index) => {
        return (
          <form key={choice.name} className={"grid grid-cols-2"}>
            <div
              className={`${
                answer.top5[choice.name] === true
                  ? "border-white bg-yrgo-red"
                  : "border-yrgo-red bg-white"
              } flex items-center border-b-2 border-r border-r-yrgo-red p-4 
              ${index === 4 ? " border-yrgo-red" : null}
              `}
            >
              <input
                className=" shrink-0 checked:border-white "
                type="radio"
                value={true}
                id={choice.textBoolTrue}
                onChange={choice.updateFunction}
                checked={answer.top5[choice.name] === true ? true : false}
              />
              <label
                htmlFor={choice.textBoolTrue}
                className={`${answer.top5[choice.name] === true ? "text-white" : "text-yrgo-red"} cursor-pointer pl-4 font-extrabold uppercase`}
              >
                {choice.textBoolTrue}
              </label>
            </div>

            <div
              className={`${
                answer.top5[choice.name] === false
                  ? "border-white bg-yrgo-red"
                  : "border-yrgo-red bg-white"
              } flex items-center border-b-2 border-l border-l-yrgo-red p-4
              ${index === 4 ? " border-yrgo-red" : null}
              `}
            >
              <input
                className=" shrink-0 checked:border-white "
                type="radio"
                value={false}
                id={choice.textBoolFalse}
                onChange={choice.updateFunction}
                checked={answer.top5[choice.name] === false ? true : false}
              />
              <label
                htmlFor={choice.textBoolFalse}
                className={`${answer.top5[choice.name] === false ? "text-white" : "text-yrgo-red"} cursor-pointer pl-4 font-extrabold uppercase`}
              >
                {choice.textBoolFalse}
              </label>
            </div>
          </form>
        );
      })}
    </>
  );
};

export default QuickQuestions;
