import { useState } from "react";

const InternType = ({ counter, setCounter, answer, setAnswer }) => {
  const [internType, setInternType] = useState("");

  const updateInternType = (event) => {
    if (internType === event.target.textContent) {
      setInternType("");
    } else {
      setInternType(event.target.textContent);
    }
  };

  return (
    <>
      <h2 className="text-4xl">Vilken typ av praktikant söker ni?</h2>
      <button
        className={`border border-black p-2 self-start ${
          internType === "Digital Designer" ? "bg-black text-white" : ""
        }`}
        onClick={updateInternType}
      >
        Digital Designer
      </button>
      <button
        className={`border border-black p-2 self-start ${
          internType === "Webbutvecklare" ? "bg-black text-white" : ""
        }`}
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
