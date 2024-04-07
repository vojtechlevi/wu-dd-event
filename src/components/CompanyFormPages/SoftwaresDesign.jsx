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
      <h2 className="border-b-2 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        Vilka program jobbar era designers med?
      </h2>
      <ul>
        {choices.map((choice) => {
          return (
            <li key={choice}>
              <label
                className={` ${
                  Array.isArray(software) && software.includes(choice)
                    ? "border-white bg-yrgo-red"
                    : "border-yrgo-red bg-white"
                } align-center flex border-b-2 p-4`}
              >
                <input
                  defaultChecked={
                    Array.isArray(software) && software.includes(choice)
                      ? true
                      : false
                  }
                  className=" checked:border-white"
                  type="checkbox"
                  value={choice}
                  onClick={handleClick}
                  id={choice}
                />
                <span
                  htmlFor={choice}
                  className={` ${
                    Array.isArray(software) && software.includes(choice)
                      ? "text-white"
                      : "text-yrgo-red"
                  } cursor-pointer pl-4 font-extrabold uppercase`}
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

export default SoftwaresDesign;
