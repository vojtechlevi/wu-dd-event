import { useState } from "react";

const InternTypeCount = ({ counter, setCounter, answer, setAnswer }) => {
  const [internType, setInternType] = useState(answer.internType || []);

  const choices = ["Digital designer", "Webbutvecklare"];

  const handleClick = (event) => {
    if (
      Array.isArray(internType) &&
      internType.includes(event.target.textContent)
    ) {
      // if the button is already selected, deselect it.

      event.target.classList.remove("bg-black", "text-white");

      const updatedInternType = internType.filter((type) => {
        return type !== event.target.textContent;
      });

      setInternType(updatedInternType);
    } else {
      // if the button is not selected, add it to array internType.

      event.target.classList.add("bg-black", "text-white");

      const updatedInternType = Array.isArray(internType)
        ? [...internType, event.target.textContent]
        : [event.target.textContent];
      setInternType(updatedInternType);
    }
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        Vilken typ av praktikant söker ni?
      </h2>
      <ul>
        {choices.map((choice) => {
          return (
            <li
              key={choice}
              className={` ${choices.indexOf(choice) == 0 ? "border-y-2 " : "border-b-2"} align-center flex border-yrgo-red p-4`}
            >
              <input
                // checked={employeesCount === choice ? true : false}
                className=" my-auto h-4 w-4 appearance-none rounded-full border-2 border-yrgo-red checked:bg-yrgo-red"
                type="radio"
                value={choice}
                name={choice}
                // onChange={handleChoiceChange}
                id={choice}
              />
              <label
                htmlFor={choice}
                className="pl-4 font-extrabold uppercase text-yrgo-red"
              >
                {choice}
              </label>
              <br />
            </li>
          );
        })}
      </ul>
      {choices.map((choice) => {
        return (
          <button
            key={choice}
            className={`self-start border border-black p-2 ${
              Array.isArray(internType) && internType.includes(choice)
                ? "bg-black text-white"
                : ""
            }`}
            onClick={handleClick}
          >
            {choice}
          </button>
        );
      })}
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, internType: internType });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default InternTypeCount;
