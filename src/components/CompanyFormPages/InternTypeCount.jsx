import { useState } from "react";

const InternTypeCount = ({ answer, setAnswer }) => {
  const [internTypeCount, setInternTypeCount] = useState(
    answer.internTypeCount || [],
  );

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const choices = ["Digital designer", "Webbutvecklare"];

  const handleToggleChoice = (event) => {
    if (internTypeCount[event.target.value] === 0) {
      setInternTypeCount((prevState) => ({
        ...prevState,
        [event.target.value]: 1,
      }));

      setAnswer((prevState) => ({
        ...prevState,
        internTypeCount: {
          ...prevState.internTypeCount,
          [event.target.value]: 1,
        },
      }));
    } else {
      setInternTypeCount((prevState) => ({
        ...prevState,
        [event.target.value]: 0,
      }));

      setAnswer((prevState) => ({
        ...prevState,
        internTypeCount: {
          ...prevState.internTypeCount,
          [event.target.value]: 0,
        },
      }));
    }
  };

  const handleSelectNumber = (event) => {
    setInternTypeCount((prevState) => ({
      ...prevState,
      [event.target.name]: Number(event.target.value),
    }));

    setAnswer((prevState) => ({
      ...prevState,
      internTypeCount: {
        ...prevState.internTypeCount,
        [event.target.name]: Number(event.target.value),
      },
    }));
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        Vilken typ av praktikant söker ni?
      </h2>
      <ul>
        {choices.map((choice) => {
          return (
            <div
              key={choice}
              className={` ${
                internTypeCount[choice] > 0
                  ? "border-white bg-yrgo-red"
                  : "border-yrgo-red bg-white"
              }  border-b-2 p-4`}
            >
              <label className="align-center flex">
                <input
                  checked={internTypeCount[choice] > 0 ? true : false}
                  className=" border-yrgo-red checked:border-white"
                  type="checkbox"
                  value={choice}
                  name={choice}
                  onChange={handleToggleChoice}
                  id={choice}
                />
                <span
                  className={` ${
                    internTypeCount[choice] > 0 ? "text-white" : "text-yrgo-red"
                  } cursor-pointer pl-4 font-extrabold uppercase`}
                >
                  {choice}
                </span>
              </label>
              {internTypeCount[choice] !== 0 ? (
                <form className="relative ml-8 mr-32 mt-4">
                  <select
                    className="w-full cursor-pointer appearance-none border-2 border-white bg-yrgo-red px-4 py-2 font-extrabold uppercase text-white focus:outline-none"
                    name={choice}
                    id={choice}
                    onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                    onChange={handleSelectNumber}
                    value={internTypeCount[choice]}
                  >
                    <option className="font-extrabold " value="1">
                      1 st
                    </option>
                    <option className=" font-extrabold " value="2">
                      2 st
                    </option>
                    <option className=" font-extrabold " value="3">
                      3 st
                    </option>
                    <option className=" font-extrabold " value="4">
                      4 st
                    </option>
                    <option className=" font-extrabold " value="5">
                      5 st
                    </option>
                    <option className=" font-extrabold " value="6">
                      6+ st
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center  text-white">
                    <svg
                      className={`h-4 w-4 fill-current ${dropdownIsOpen ? "rotate-180" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-6h12l-6 6z" />
                    </svg>
                  </div>
                </form>
              ) : null}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default InternTypeCount;
