import { useState } from "react";

const Software = ({ counter, setCounter, answer, setAnswer }) => {
  const [software, setSoftware] = useState(answer.software || []);

  const choices = [
    "Figma",
    "Webflow",
    "React",
    "Adobe",
    "Exempel1",
    "Exempel2",
    "Exempel3",
    "Exempel4",
    "Exempel",
  ];

  const handleClick = (event) => {
    if (
      Array.isArray(software) &&
      software.includes(event.target.textContent)
    ) {
      // if the button is already selected, deselect it.

      event.target.classList.remove("bg-black", "text-white");

      const updatedSoftware = software.filter((sw) => {
        return sw !== event.target.textContent;
      });

      setSoftware(updatedSoftware);
    } else {
      // if the button is not selected, add it to array software.

      event.target.classList.add("bg-black", "text-white");

      const updatedSoftware = Array.isArray(software)
        ? [...software, event.target.textContent]
        : [event.target.textContent];
      setSoftware(updatedSoftware);
    }
  };

  return (
    <>
      <h2 className="text-4xl">Vilka program jobbar ni i?</h2>
      <div className="grid grid-cols-2 gap-4">
        {choices.map((choice) => {
          return (
            <button
              key={choice}
              className={`border border-black p-2 ${
                Array.isArray(software) && software.includes(choice)
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
          setAnswer({ ...answer, software: software });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default Software;
