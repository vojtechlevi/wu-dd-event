import React from "react";

const CompanyFocusAreas = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Vad sysslar ni med?</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
        <button className="border border-black p-2">Motion design</button>
      </div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyFocusAreas;
