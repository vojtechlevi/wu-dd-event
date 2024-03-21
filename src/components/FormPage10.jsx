import React from "react";

const FormPage10 = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Hela perioden eller delar?</h2>
      <p>Vår praktikperiod löper mellan xx november 2024 – xx maj 2025. </p>
      <p>Har ni möjlighet att ta emot ... </p>
      <span>
        <input type="checkbox" />
        <p>Ja, hela perioden</p>
      </span>
      <span>
        <input type="checkbox" />
        <p>Nej, delar av perioden</p>
      </span>
      <span>
        <input type="checkbox" />
        <p>Vet mer senare</p>
      </span>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default FormPage10;
