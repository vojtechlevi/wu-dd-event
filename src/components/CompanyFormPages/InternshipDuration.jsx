import { useState } from "react";

const InternshipDuration = ({ counter, setCounter, answer, setAnswer }) => {
  const [fullDuration, setFullDuration] = useState("Yes");
  const [startDate, setStartDate] = useState("2024-11-01");
  const [endDate, setEndDate] = useState("2025-05-31");

  const handleChoiceChange = (event) => {
    setFullDuration(event.target.value);

    if (event.target.value == "Yes") {
      setStartDate("2024-11-01");
      setEndDate("2025-05-31");
    } else if (event.target.value == "Maybe") {
      setStartDate(null);
      setEndDate(null);
    }
  };

  // for "Nej, delar av perioden" value:
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <h2 className="text-4xl">Hela perioden eller delar?</h2>
      <p>Vår praktikperiod löper mellan 1 november 2024 – 31 maj 2025. </p>
      <p>Har ni möjlighet att ta emot ... </p>
      <form>
        <input
          type="radio"
          value="Yes"
          id="Yes"
          name="duration"
          onChange={handleChoiceChange}
        />
        <label htmlFor="Yes">Ja, hela perioden</label>
        <br />
        <input
          type="radio"
          value="No"
          id="No"
          name="duration"
          onChange={handleChoiceChange}
        />
        <label htmlFor="No">Nej, delar av perioden</label>
        <br />
        {fullDuration == "No" ? (
          <>
            <input
              type="date"
              name="durationStartDate"
              onChange={handleStartDateChange}
            />
            <br />
            <input
              type="date"
              name="durationEndDate"
              onChange={handleEndDateChange}
            />
            <br />
          </>
        ) : null}
        <input
          type="radio"
          value="Maybe"
          id="Maybe"
          name="duration"
          onChange={handleChoiceChange}
        />
        <label htmlFor="Maybe">Vet mer senare</label>
        <br />
      </form>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({
            ...answer,
            internshipStartDate: startDate,
            internshipEndDate: endDate,
          });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default InternshipDuration;
