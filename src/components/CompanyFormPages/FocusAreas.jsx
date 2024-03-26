import { useState } from "react";

const FocusAreas = ({ counter, setCounter, answer, setAnswer }) => {
  const [focusAreas, setFocusAreas] = useState(answer.focusAreas || []);

  const choices = [
    "Motion design",
    "Graphic design",
    "Web design",
    "UX design",
    "Product design",
    "UI design",
    "3D design",
    "Industrial design",
  ];

  const handleClick = (event) => {
    if (
      Array.isArray(focusAreas) &&
      focusAreas.includes(event.target.textContent)
    ) {
      // if the button is already selected, deselect it.

      event.target.classList.remove("bg-black", "text-white");

      const updatedFocusAreas = focusAreas.filter((focusArea) => {
        return focusArea !== event.target.textContent;
      });

      setFocusAreas(updatedFocusAreas);
    } else {
      // if the button is not selected, add it to array focusAreas.

      event.target.classList.add("bg-black", "text-white");

      const updatedFocusAreas = Array.isArray(focusAreas)
        ? [...focusAreas, event.target.textContent]
        : [event.target.textContent];
      setFocusAreas(updatedFocusAreas);
    }
  };

  return (
    <>
      <h2 className="text-4xl">Vad sysslar ni med?</h2>
      <div className="grid grid-cols-2 gap-4">
        {choices.map((choice) => {
          return (
            <button
              key={choice}
              className={`border border-black p-2 ${
                Array.isArray(focusAreas) && focusAreas.includes(choice)
                  ? "bg-black text-white"
                  : ""
              }`}
              onClick={handleClick}
            >
              {choice}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, focusAreas: focusAreas });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default FocusAreas;
