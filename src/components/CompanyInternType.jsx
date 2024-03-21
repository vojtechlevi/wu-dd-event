import React from "react";

const CompanyInternType = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Vilken typ av praktikant söker ni?</h2>
      <button className="border border-black p-2 self-start">
        Digital Designer
      </button>
      <button className="border border-black p-2 self-start">
        Webbutvecklare
      </button>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyInternType;
