import React from "react";

const FormPage0 = ({ counter, setCounter }) => {
  return (
    <>
      <h1 className="text-6xl">Hej Företag</h1>
      <p>
        Info om formulär och varför det är bra. Info om formulär och varför det
        är bra. Info om formulär och varför det är bra.
      </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default FormPage0;
