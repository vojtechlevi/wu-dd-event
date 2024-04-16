import { useState } from "react";

const Employees = ({ answer, setAnswer }) => {
  const [employeesCount, setEmployeesCount] = useState(answer.employees || "");

  const handleChoiceChange = (event) => {
    setEmployeesCount(event.target.value);
    setAnswer({ ...answer, employees: event.target.value });
  };

  const choices = [
    "1-4",
    "5-10",
    "10-15",
    "15-30",
    "30-50",
    "50-100",
    "100-200",
    "200+",
  ];
  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red lg:border-b-8 lg:p-8 lg:text-4xl">
        Hur många jobbar hos er?
      </h2>
      <ul className="grid-cols-2 gap-x-1 bg-yrgo-red lg:grid">
        {choices.map((choice) => {
          return (
            <li key={choice}>
              <label
                className={`${answer.employees === choice ? "border-white bg-yrgo-red" : "border-yrgo-red bg-white"} align-center  flex  border-b-2  p-4 transition-all duration-300 ease-in lg:border-b-4`}
              >
                <input
                  checked={employeesCount === choice ? true : false}
                  className=" border-yrgo-red transition-all duration-300 ease-in checked:border-white"
                  type="radio"
                  value={choice}
                  name=""
                  onChange={handleChoiceChange}
                  id={choice}
                />
                <span
                  className={`${answer.employees === choice ? "text-white" : "text-yrgo-red"} cursor-pointer pl-4 font-extrabold uppercase transition-all duration-300 ease-in`}
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
