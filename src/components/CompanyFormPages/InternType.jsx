import { useState } from "react";

const InternType = ({ counter, setCounter, answer, setAnswer }) => {
  const [internType, setInternType] = useState("");

  const updateInternType = (event) => {
    setInternType(event.target.textContent);
  };

  return (
    <>
      <h2 className="text-4xl">Vilken typ av praktikant söker ni?</h2>
      <button
        className="border border-black p-2 self-start"
        onClick={updateInternType}
      >
        Digital Designer
      </button>
      <button
        className="border border-black p-2 self-start"
        onClick={updateInternType}
      >
        Webbutvecklare
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, internType: internType });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default InternType;
