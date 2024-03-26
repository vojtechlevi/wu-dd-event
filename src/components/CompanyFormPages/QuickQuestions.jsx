import { useState } from "react";

const QuickQuestions = ({ counter, setCounter, answer, setAnswer }) => {
  const [dogPolicy, setDogPolicy] = useState(
    answer.quickQuestions.dogPolicy || ""
  );

  const updateDogPolicy = (event) => {
    if (dogPolicy === event.target.textContent) {
      setDogPolicy("");
    } else {
      setDogPolicy(event.target.textContent);
    }
  };

  const [remoteWorkPolicy, setRemoteWorkPolicy] = useState(
    answer.quickQuestions.remoteWorkPolicy || ""
  );

  const updateRemoteWorkPolicy = (event) => {
    if (remoteWorkPolicy === event.target.textContent) {
      setRemoteWorkPolicy("");
    } else {
      setRemoteWorkPolicy(event.target.textContent);
    }
  };

  const [officeLocation, setOfficeLocation] = useState(
    answer.quickQuestions.officeLocation || ""
  );

  const updateOfficeLocation = (event) => {
    if (officeLocation === event.target.textContent) {
      setOfficeLocation("");
    } else {
      setOfficeLocation(event.target.textContent);
    }
  };

  // add more of the above if there are more "quick questions"

  return (
    <>
      <h2 className="text-4xl">3 snabba</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          className={`border border-black p-2 self-start ${
            dogPolicy === "No dogs" ? "bg-black text-white" : ""
          }`}
          onClick={updateDogPolicy}
        >
          No dogs
        </button>
        <button
          className={`border border-black p-2 self-start ${
            dogPolicy === "Hundar = JA" ? "bg-black text-white" : ""
          }`}
          onClick={updateDogPolicy}
        >
          Hundar = JA
        </button>
        <button
          className={`border border-black p-2 self-start ${
            remoteWorkPolicy === "Remote work = NEJ"
              ? "bg-black text-white"
              : ""
          }`}
          onClick={updateRemoteWorkPolicy}
        >
          Remote work = NEJ
        </button>
        <button
          className={`border border-black p-2 self-start ${
            remoteWorkPolicy === "Remote work = JA" ? "bg-black text-white" : ""
          }`}
          onClick={updateRemoteWorkPolicy}
        >
          Remote work = JA
        </button>
        <button
          className={`border border-black p-2 self-start ${
            officeLocation === "Kontor i Sverige" ? "bg-black text-white" : ""
          }`}
          onClick={updateOfficeLocation}
        >
          Kontor i Sverige
        </button>
        <button
          className={`border border-black p-2 self-start ${
            officeLocation === "Kontor utomlands" ? "bg-black text-white" : ""
          }`}
          onClick={updateOfficeLocation}
        >
          Kontor utomlands
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({
            ...answer,
            quickQuestions: {
              dogPolicy: dogPolicy,
              remoteWorkPolicy: remoteWorkPolicy,
              officeLocation: officeLocation,
            },
          });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default QuickQuestions;
