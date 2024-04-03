import { useState } from "react";

const SoftwaresDesign = ({ answer, setAnswer }) => {
  const [software, setSoftware] = useState(answer.softwaresDesign || []);

  const choices = [
    "Figma",
    "Webflow",
    "Wordpress",
    "After Effects",
    "Photoshop",
    "XD",
    "Indesign",
    "Premiere Pro",
    "Linearity Move",
    "Spline",
    "Blender",
    "Canva",
    "Annat",
  ];

  const handleClick = (event) => {
    if (Array.isArray(software) && software.includes(event.target.value)) {
      // if the button is already selected, deselect it.

      const updatedSoftware = software.filter((sw) => {
        return sw !== event.target.value;
      });

      setSoftware(updatedSoftware);
      setAnswer({ ...answer, softwaresDesign: updatedSoftware });
    } else {
      // if the button is not selected, add it to array software.

      const updatedSoftware = Array.isArray(software)
        ? [...software, event.target.value]
        : [event.target.value];

      setSoftware(updatedSoftware);
      setAnswer({ ...answer, softwaresDesign: updatedSoftware });
    }
  };

  return (
    <>
      <h2 className="border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        Vilka program jobbar era designers med?
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

export default SoftwaresDesign;
