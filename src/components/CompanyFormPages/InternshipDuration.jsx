import { useState } from "react";

const InternshipDuration = ({ counter, setCounter, answer, setAnswer }) => {
  const [durationAnswer, setDurationAnswer] = useState(
    answer.internshipDurationAnswer || ""
  );
  const [startDate, setStartDate] = useState("2024-11-01");
  const [endDate, setEndDate] = useState("2025-05-31");

  const handleChoiceChange = (event) => {
    setDurationAnswer(event.target.value);

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
          checked={durationAnswer === "Yes" ? true : false}
          type="radio"
          value="Yes"
          name="duration"
          onChange={handleChoiceChange}
        />
        <label htmlFor="Yes">Ja, hela perioden</label>
        <br />
        <input
          checked={durationAnswer === "No" ? true : false}
          type="radio"
          value="No"
          name="duration"
          onChange={handleChoiceChange}
        />
        <label htmlFor="No">Nej, delar av perioden</label>
        <br />
        {durationAnswer == "No" ? (
          <>
            <input
              defaultValue={answer.internshipStartDate || ""}
              type="date"
              name="durationStartDate"
              onChange={handleStartDateChange}
            />
            <br />
            <input
              defaultValue={answer.internshipEndDate || ""}
              type="date"
              name="durationEndDate"
              onChange={handleEndDateChange}
            />
            <br />
          </>
        ) : null}
        <input
          checked={durationAnswer === "Maybe" ? true : false}
          type="radio"
          value="Maybe"
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
            internshipDurationAnswer: durationAnswer,
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
