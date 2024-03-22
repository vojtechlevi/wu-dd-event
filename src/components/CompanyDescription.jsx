import React from "react";
import { useState } from "react";

const CompanyDescription = ({ counter, setCounter, answer, setAnswer }) => {
  const [description, setDescription] = useState("");

  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <h2 className="text-4xl">Kan du beskriva er som företag?</h2>
      <textarea
        onChange={updateDescription}
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
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, description: description });
        }}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyDescription;
