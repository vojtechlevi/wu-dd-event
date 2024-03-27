import { useState } from "react";

const InternType = ({ counter, setCounter, answer, setAnswer }) => {
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
      <h2 className="text-4xl">Vilken typ av praktikant söker ni?</h2>
      {choices.map((choice) => {
        return (
          <button
            key={choice}
            className={`border border-black p-2 self-start ${
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

export default InternType;
