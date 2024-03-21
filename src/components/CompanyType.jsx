import React from "react";

const CompanyType = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Vilken sorts arbetsplats är ni?</h2>
      <button className="border border-black p-2 self-start">Byrå</button>
      <button className="border border-black p-2 self-start">Inhouse</button>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyType;
