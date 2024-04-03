import { useState } from "react";

const SoftwaresDev = ({ answer, setAnswer }) => {
  const [software, setSoftware] = useState(answer.softwaresDev || []);

  const choices = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "C#",
    "Java",
    "React",
    "Vue",
    "Angular",
    "Svelte",
    "Laravel",
    "Node.js",
    ".NET",
    "Wordpress",
    "Sanity",
    "Storyblok",
    "Andra CMS",
    "Andra tekniker",
  ];

  const handleClick = (event) => {
    if (Array.isArray(software) && software.includes(event.target.value)) {
      // if the button is already selected, deselect it.

      const updatedSoftware = software.filter((sw) => {
        return sw !== event.target.value;
      });

      setSoftware(updatedSoftware);
      setAnswer({ ...answer, softwaresDev: updatedSoftware });
    } else {
      // if the button is not selected, add it to array software.

      const updatedSoftware = Array.isArray(software)
        ? [...software, event.target.value]
        : [event.target.value];

      setSoftware(updatedSoftware);
      setAnswer({ ...answer, softwaresDev: updatedSoftware });
    }
  };

  return (
    <>
      <h2 className="border-b-2 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        Vilka tekniker jobbar era utvecklare med?
      </h2>
      <ul>
        {choices.map((choice) => {
          return (
            <li
              key={choice}
              className={` ${choices.indexOf(choice) == 0 ? "border-y-2 " : "border-b-2"} align-center flex border-yrgo-red p-4`}
            >
              <input
                defaultChecked={
                  Array.isArray(software) && software.includes(choice)
                    ? true
                    : false
                }
                className=" my-auto h-4 w-4 appearance-none rounded-full border-2 border-yrgo-red checked:bg-yrgo-red"
                type="checkbox"
                value={choice}
                onClick={handleClick}
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

export default SoftwaresDev;
