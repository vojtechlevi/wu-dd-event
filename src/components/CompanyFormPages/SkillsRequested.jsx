import { useState } from "react";

const SkillsRequested = ({ counter, setCounter, answer, setAnswer }) => {
  const [skills, setSkills] = useState("");

  const updateSkills = (event) => {
    setSkills(event.target.value);
  };

  return (
    <>
      <h2 className="text-4xl">
        Är det några speciella skills ni söker just nu?
      </h2>
      <textarea
        defaultValue={answer.skillsRequested || ""}
        onChange={updateSkills}
        className="bg-gray-200"
        cols="30"
        rows="5"
        placeholder="Vi jobbar med ett projekt just nu där vi jobbar med användarvänlighet. Toppen om du har koll på WCAG."
      ></textarea>
      <p className="self-end">0/300</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, skillsRequested: skills });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default SkillsRequested;
