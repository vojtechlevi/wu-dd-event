import { useState } from "react";

const QuickQuestions = ({ answer, setAnswer }) => {
  const [selectedChoices, setSelectedChoices] = useState({
    dogFriendly: answer.top5.dogPolicy || null,
    remoteWorkFriendly: answer.top5.remoteWorkFriendly || null,
    officeInSweden: answer.top5.officeInSweden || null,
    companyTypeInhouse: answer.top5.companyTypeInhouse || null,
    flexTime: answer.top5.flexTime || null,
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
      name: "officeInSweden",
      updateFunction: (event) => handleChoiceChange("officeInSweden", event),
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
      <h2 className="mt-16 border-b-4 border-yrgo-blue p-4 text-2xl font-extrabold uppercase text-yrgo-blue lg:border-b-8 lg:p-8 lg:text-4xl">
        5 snabba!
      </h2>

      {choices.map((choice, index) => {
        return (
          <form key={choice.name} className={"grid grid-cols-2"}>
            <label
              className={`${
                answer.top5[choice.name] === true
                  ? "border-white bg-yrgo-blue"
                  : "border-yrgo-blue bg-white"
              } flex items-center border-b-2 border-r border-r-yrgo-blue p-4 transition-all duration-300 ease-in lg:border-b-4 lg:border-r-2
              ${index === 4 ? " border-yrgo-blue" : null}
              `}
            >
              <input
                className=" shrink-0 border-yrgo-blue transition-all duration-300 ease-in checked:border-white"
                type="radio"
                value={true}
                id={choice.textBoolTrue}
                onChange={choice.updateFunction}
                checked={answer.top5[choice.name] === true ? true : false}
              />
              <span
                className={`${answer.top5[choice.name] === true ? "text-white" : "text-yrgo-blue"} cursor-pointer pl-4 font-extrabold uppercase transition-all duration-300 ease-in`}
              >
                {choice.textBoolTrue}
              </span>
            </label>

            <label
              className={`${
                answer.top5[choice.name] === false
                  ? "border-white bg-yrgo-blue"
                  : "border-yrgo-blue bg-white"
              } flex items-center border-b-2 border-l border-l-yrgo-blue p-4 transition-all duration-300 ease-in lg:border-b-4 lg:border-l-2
              ${index === 4 ? " border-yrgo-blue" : null}
              `}
            >
              <input
                className=" shrink-0 border-yrgo-blue transition-all duration-300 ease-in checked:border-white"
                type="radio"
                value={false}
                id={choice.textBoolFalse}
                onChange={choice.updateFunction}
                checked={answer.top5[choice.name] === false ? true : false}
              />
              <span
                className={`${answer.top5[choice.name] === false ? "text-white" : "text-yrgo-blue"} cursor-pointer pl-4 font-extrabold uppercase transition-all duration-300 ease-in`}
              >
                {choice.textBoolFalse}
              </span>
            </label>
          </form>
        );
      })}
    </>
  );
};

export default QuickQuestions;
