import React from "react";

const CompanyName = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Vilket företag kommer du från?</h2>
      <input type="text" placeholder="företagsnamn" className="bg-gray-200" />
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyName;
