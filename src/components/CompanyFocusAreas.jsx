import React from "react";

const CompanyFocusAreas = ({ counter, setCounter, answer, setAnswer }) => {
  let focusAreas = [];

  const handleClick = (event) => {
    if (event.target.classList.contains("bg-black")) {
      event.target.classList.remove("bg-black", "text-white");

      focusAreas = focusAreas.filter((focusArea) => {
        return focusArea !== event.target.textContent;
      });
    } else {
      event.target.classList.add("bg-black", "text-white");

      focusAreas.push(event.target.textContent);
    }
  };

  return (
    <>
      <h2 className="text-4xl">Vad sysslar ni med?</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="border border-black p-2" onClick={handleClick}>
          Motion design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Graphic design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Web design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          UX/UI design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          3D design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Product design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Interior design
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Industrial design
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, focusAreas: focusAreas });
        }}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyFocusAreas;
