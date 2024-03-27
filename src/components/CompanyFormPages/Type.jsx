import { useState } from "react";

const Type = ({ counter, setCounter, answer, setAnswer }) => {
  const [type, setType] = useState(answer.type || "");

  const updateType = (event) => {
    if (type === event.target.textContent) {
      setType("");
    } else {
      setType(event.target.textContent);
    }
  };

  return (
    <>
      <h2 className="text-4xl">Vilken sorts arbetsplats är ni?</h2>
      <button
        className={`border border-black p-2 self-start ${
          type === "Byrå" ? "bg-black text-white" : ""
        }`}
        onClick={updateType}
      >
        Byrå
      </button>
      <button
        className={`border border-black p-2 self-start ${
          type === "Inhouse" ? "bg-black text-white" : ""
        }`}
        onClick={updateType}
      >
        Inhouse
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, type: type });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default Type;
