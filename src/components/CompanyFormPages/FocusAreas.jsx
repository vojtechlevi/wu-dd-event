import { useState } from "react";

const FocusAreas = ({ answer, setAnswer }) => {
  const [focusAreas, setFocusAreas] = useState(answer.focusAreas || []);

  const choices = [
    "Motion",
    "UX",
    "UI",
    "Digitala plattformar",
    "Service design",
    "Film",
    "Apputveckling",
    "Webbutveckling",
    "Systemutveckling",
    "Branding",
    "E-commerce",
    "Annat",
  ];

  const handleClick = (event) => {
    if (Array.isArray(focusAreas) && focusAreas.includes(event.target.value)) {
      // if the button is already selected, deselect it.

      const updatedFocusAreas = focusAreas.filter((focusArea) => {
        return focusArea !== event.target.value;
      });

      setFocusAreas(updatedFocusAreas);
      setAnswer({ ...answer, focusAreas: updatedFocusAreas });
    } else {
      // if the button is not selected, add it to array focusAreas.

      const updatedFocusAreas = Array.isArray(focusAreas)
        ? [...focusAreas, event.target.value]
        : [event.target.value];

      setFocusAreas(updatedFocusAreas);
      setAnswer({ ...answer, focusAreas: updatedFocusAreas });
    }
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red lg:border-b-8 lg:p-8 lg:text-4xl">
        VILKA TYPER AV TJÄNSTER ERBJUDER NI?
      </h2>
      <ul className="grid-cols-2 bg-white lg:grid">
        {choices.map((choice, index) => {
          return (
            <li key={choice}>
              <label
                className={` ${
                  Array.isArray(focusAreas) && focusAreas.includes(choice)
                    ? "border-white bg-yrgo-red"
                    : "border-yrgo-red bg-white"
                } align-center flex border-b-2 p-4 ${index % 2 ? "border-l-4" : ""} transition-all duration-300 ease-in lg:border-b-4`}
              >
                <input
                  defaultChecked={
                    Array.isArray(focusAreas) && focusAreas.includes(choice)
                      ? true
                      : false
                  }
                  className=" border-yrgo-red transition-all duration-300 ease-in checked:border-white"
                  type="checkbox"
                  value={choice}
                  onClick={handleClick}
                  id={choice}
                />
                <span
                  className={` ${
                    Array.isArray(focusAreas) && focusAreas.includes(choice)
                      ? "text-white"
                      : "text-yrgo-red"
                  } cursor-pointer pl-4 font-extrabold uppercase transition-all duration-300 ease-in`}
                >
                  {choice}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FocusAreas;
