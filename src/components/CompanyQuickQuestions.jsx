import React from "react";

const CompanyQuickQuestions = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">5 snabba</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="border border-black p-2">No dogs</button>
        <button className="border border-black p-2">Hundar = JA</button>
        <button className="border border-black p-2">Remote work = NEJ</button>
        <button className="border border-black p-2">Remote work = JA</button>
        <button className="border border-black p-2">Kontor i Sverige</button>
        <button className="border border-black p-2">Kontor utomlands</button>
        <button className="border border-black p-2">Byrå</button>
        <button className="border border-black p-2">Inhouse</button>
        <button className="border border-black p-2">bla bla </button>
        <button className="border border-black p-2">bla</button>
      </div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyQuickQuestions;
