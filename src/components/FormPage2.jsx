import React from "react";

const FormPage2 = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Vilken bransch tillhör ni?</h2>
      <input type="text" placeholder="bilindustrin" className="bg-gray-200" />
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default FormPage2;
