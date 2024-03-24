import { useState } from "react";

const QuickQuestions = ({ counter, setCounter, answer, setAnswer }) => {
  const [dogPolicy, setDogPolicy] = useState("");

  const updateDogPolicy = (event) => {
    setDogPolicy(event.target.textContent);
  };

  const [remoteWorkPolicy, setRemoteWorkPolicy] = useState("");

  const updateRemoteWorkPolicy = (event) => {
    setRemoteWorkPolicy(event.target.textContent);
  };

  const [officeLocation, setOfficeLocation] = useState("");

  const updateOfficeLocation = (event) => {
    setOfficeLocation(event.target.textContent);
  };

  return (
    <>
      <h2 className="text-4xl">3 snabba</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="border border-black p-2" onClick={updateDogPolicy}>
          No dogs
        </button>
        <button className="border border-black p-2" onClick={updateDogPolicy}>
          Hundar = JA
        </button>
        <button
          className="border border-black p-2"
          onClick={updateRemoteWorkPolicy}
        >
          Remote work = NEJ
        </button>
        <button
          className="border border-black p-2"
          onClick={updateRemoteWorkPolicy}
        >
          Remote work = JA
        </button>
        <button
          className="border border-black p-2"
          onClick={updateOfficeLocation}
        >
          Kontor i Sverige
        </button>
        <button
          className="border border-black p-2"
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
