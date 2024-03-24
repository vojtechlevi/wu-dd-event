import { useState } from "react";

const Employees = ({ counter, setCounter, answer, setAnswer }) => {
  const [employees, setEmployees] = useState(50);

  const handleChange = (event) => {
    setEmployees(event.target.value);
    setAnswer({ ...answer, employees: Number(event.target.value) });
  };

  return (
    <>
      <h2 className="text-4xl">Hur många jobbar hos er?</h2>
      <input
        type="range"
        min="0"
        max="100"
        className="bg-gray-200"
        onChange={handleChange}
      />
      <p>{employees}</p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default Employees;
