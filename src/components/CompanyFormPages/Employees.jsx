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
      <h2 className="p-4 text-2xl font-extrabold uppercase text-yrgo-red ">
        Hur många jobbar hos er?
      </h2>
      <ul>
        {choices.map((choice) => {
          return (
            <li
              key={choice}
              className={` ${choices.indexOf(choice) == 0 ? "border-y-2 " : "border-b-2"} align-center flex border-yrgo-red p-4`}
            >
              <input
                checked={employeesCount === choice ? true : false}
                className=" my-auto h-4 w-4 appearance-none rounded-full border-2 border-yrgo-red checked:bg-yrgo-red"
                type="radio"
                value={choice}
                name=""
                onChange={handleChoiceChange}
                id={choice}
              />
              <label
                htmlFor={choice}
                className="pl-4 font-extrabold uppercase text-yrgo-red"
              >
                {choice}
              </label>
              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Employees;
