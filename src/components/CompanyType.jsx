import React from "react";
import { useState } from "react";

const CompanyType = ({ counter, setCounter, answer, setAnswer }) => {
  const [type, setType] = useState("");

  const updateType = (event) => {
    setType(event.target.textContent);
  };

  return (
    <>
      <h2 className="text-4xl">Vilken sorts arbetsplats är ni?</h2>
      <button
        className="border border-black p-2 self-start"
        onClick={updateType}>
        Byrå
      </button>
      <button
        className="border border-black p-2 self-start"
        onClick={updateType}>
        Inhouse
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, type: type });
        }}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyType;
