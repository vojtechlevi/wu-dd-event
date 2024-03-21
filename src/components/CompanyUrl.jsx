import React from "react";

const CompanyUrl = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Var kan vi läsa mer om er?</h2>
      <input
        type="text"
        placeholder="www.företagsnamn.se"
        className="bg-gray-200"
      />
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyUrl;
