import React from "react";

const CompanyPreviewPost = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Din preview</h2>
      <button className="border border-black p-2">Redigera</button>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2">
        Klar!
      </button>
    </>
  );
};

export default CompanyPreviewPost;
