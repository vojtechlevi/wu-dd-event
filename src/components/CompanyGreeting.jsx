import React from "react";

const CompanyGreeting = ({ counter, setCounter }) => {
  return (
    <>
      <h1 className="text-6xl">Hej Företag</h1>
      <p>
        Info om formulär och varför det är bra. Info om formulär och varför det
        är bra. Info om formulär och varför det är bra.
      </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border bg-black text-white p-2">
        Formulär
      </button>
      <button className="border border-black p-2">Läs mer</button>
    </>
  );
};

export default CompanyGreeting;
