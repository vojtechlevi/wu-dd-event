import React from "react";

const CompanySoftware = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Vilka program jobbar ni i?</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="border border-black p-2">Figma</button>
        <button className="border border-black p-2">Webflow</button>
        <button className="border border-black p-2">React</button>
        <button className="border border-black p-2">Adobe</button>
        <button className="border border-black p-2">Exempel</button>
        <button className="border border-black p-2">Exempel</button>
        <button className="border border-black p-2">Exempel</button>
        <button className="border border-black p-2">Exempel</button>
      </div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanySoftware;
