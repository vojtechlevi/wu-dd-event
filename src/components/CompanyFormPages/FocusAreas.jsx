import { useState } from "react";

const FocusAreas = ({ counter, setCounter, answer, setAnswer }) => {
  const [focusAreas, setFocusAreas] = useState(answer.focusAreas || []);

  const choices = [
    "Motion",
    "UX",
    "UI",
    "Digitala plattformar",
    "Service design",
    "Film",
    "Branding",
    "E-commerce",
    "Annat",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  const handleClick = (event) => {
    if (Array.isArray(focusAreas) && focusAreas.includes(event.target.value)) {
      // if the button is already selected, deselect it.

      const updatedFocusAreas = focusAreas.filter((focusArea) => {
        return focusArea !== event.target.value;
      });

      setFocusAreas(updatedFocusAreas);
    } else {
      // if the button is not selected, add it to array focusAreas.

      const updatedFocusAreas = Array.isArray(focusAreas)
        ? [...focusAreas, event.target.value]
        : [event.target.value];

      setFocusAreas(updatedFocusAreas);
    }

    setAnswer({ ...answer, focusAreas: focusAreas });
  };

  return (
    <>
      <div className=" mx-4 overflow-y-auto border-x-2 border-yrgo-red pt-8">
        <h2 className="border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
          VILKA TYPER AV TJÄNSTER ERBJUDER NI?
        </h2>
        <ul>
          {choices.map((choice) => {
            return (
              <li
                key={choice}
                className={` ${choices.indexOf(choice) == 0 ? "border-y-2 " : "border-b-2"} align-center flex border-yrgo-red p-4`}
              >
                <input
                  defaultChecked={
                    Array.isArray(focusAreas) && focusAreas.includes(choice)
                      ? true
                      : false
                  }
                  className=" my-auto h-4 w-4 appearance-none rounded-full border-2 border-yrgo-red checked:bg-yrgo-red"
                  type="checkbox"
                  value={choice}
                  onClick={handleClick}
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
      </div>
    </>
  );
};

export default FocusAreas;
