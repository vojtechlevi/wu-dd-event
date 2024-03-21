import React from "react";

const CompanyEmployees = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Hur många jobbar hos er?</h2>
      <input type="range" className="bg-gray-200" />
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyEmployees;
