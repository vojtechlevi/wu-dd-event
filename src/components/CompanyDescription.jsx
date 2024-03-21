import React from "react";

const CompanyDescription = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Kan du beskriva er som företag?</h2>
      <textarea
        className="bg-gray-200"
        cols="30"
        rows="5"
        placeholder="Vi är ett gött gäng med kontor mitt i stan.
        Vi må vara ett litet företag, men jobbar
        med stora kunder och växer för varje år. 
        Och! Viktigast av allt: vi dricker öl varje 
        fredag! "></textarea>
      <p className="self-end">0/300</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyDescription;
