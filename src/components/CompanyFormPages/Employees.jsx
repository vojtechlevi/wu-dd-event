import { useState } from "react";

import ButtonArrowRight from "../Buttons/ButtonArrowRight";
import ButtonArrowLeft from "../Buttons/ButtonArrowLeft";

const Employees = ({ counter, setCounter, answer, setAnswer }) => {
  const [employeesCount, setEmployeesCount] = useState(answer.employees || "");

  const handleChoiceChange = (event) => {
    setEmployeesCount(event.target.value);
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
      <div className=" flex h-full flex-col justify-center">
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
                  // className=" hidden"
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
      </div>

      <div className="flex border-b-2 border-t-2 border-yrgo-red">
        <ButtonArrowLeft
          onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
        >
          tillbaka
        </ButtonArrowLeft>
        <ButtonArrowRight
          onClick={() => {
            setCounter(counter + 1);
            setAnswer({ ...answer, employees: employeesCount });
          }}
        >
          nästa
        </ButtonArrowRight>
      </div>
    </>
  );
};

export default Employees;
