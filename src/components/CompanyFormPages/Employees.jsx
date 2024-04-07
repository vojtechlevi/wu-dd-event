import { useState } from "react";

const Employees = ({ answer, setAnswer }) => {
  const [employeesCount, setEmployeesCount] = useState(answer.employees || "");

  const handleChoiceChange = (event) => {
    setEmployeesCount(event.target.value);
    setAnswer({ ...answer, employees: event.target.value });
  };

  const choices = [
    "1-5",
    "5-10",
    "10-20",
    "20-30",
    "30-50",
    "50-100",
    "100-200",
    "200-400",
    "400+",
  ];
  return (
    <>
      <h2 className="border-b-2 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red ">
        Hur många jobbar hos er?
      </h2>
      <ul>
        {choices.map((choice) => {
          return (
            <li key={choice}>
              <label
                className={`${answer.employees === choice ? "border-white bg-yrgo-red" : "border-yrgo-red bg-white"} align-center flex border-b-2  p-4`}
              >
                <input
                  checked={employeesCount === choice ? true : false}
                  className=" checked:border-white"
                  type="radio"
                  value={choice}
                  name=""
                  onChange={handleChoiceChange}
                  id={choice}
                />
                <span
                  className={`${answer.employees === choice ? "text-white" : "text-yrgo-red"} cursor-pointer pl-4 font-extrabold uppercase`}
                >
                  {choice}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Employees;
