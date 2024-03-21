import React from "react";

const CompanyConfirmation = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Tack!</h2>
      <p>Fakta om vad praktikanter bidrar med på en arbetsplats. </p>
      <p>
        tex: Interns can bring fresh ideas and new perspectives to your
        organization, which can lead to increased productivity and innovation.
      </p>
      <p> Är du redo?</p>
      <p>
        Kom och träffa digitala designers och webbutvecklare på vårt coola event
      </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Berätta mer!
      </button>
    </>
  );
};

export default CompanyConfirmation;
