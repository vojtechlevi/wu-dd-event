import React from "react";

const CompanyInternshipDuration = ({
  counter,
  setCounter,
  answer,
  setAnswer,
}) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, internshipDuration: event.target.value });
  };

  return (
    <>
      <h2 className="text-4xl">Hela perioden eller delar?</h2>
      <p>Vår praktikperiod löper mellan xx november 2024 – xx maj 2025. </p>
      <p>Har ni möjlighet att ta emot ... </p>
      <form onChange={handleChange}>
        <input type="radio" value="alt1" id="alt1" name="duration" />
        <label htmlFor="alt1">Ja, hela perioden</label>
        <br />
        <input type="radio" value="alt2" id="alt2" name="duration" />
        <label htmlFor="alt2">Nej, delar av perioden</label>
        <br />
        <input type="radio" value="alt3" id="alt3" name="duration" />
        <label htmlFor="alt3">Vet mer senare</label>
        <br />
      </form>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Nästa
      </button>
    </>
  );
};

export default CompanyInternshipDuration;
