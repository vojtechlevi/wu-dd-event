import React from "react";

const CompanyConfirmation = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Event 24 April </h2>
      <p>
        Kom och träffa digitala designers och webbutvecklare på vårt coola
        event.
      </p>
      <p> Hoppas vi ses!</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Frågor?
      </button>
    </>
  );
};

export default CompanyConfirmation;
