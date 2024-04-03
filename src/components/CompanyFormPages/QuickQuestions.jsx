import { useState } from "react";

const QuickQuestions = ({ answer, setAnswer }) => {
  const ListItem = ({ item, onClick, defaultChecked }) => {
    return (
      <li
        key={item}
        className={"align-center flex  border-yrgo-red bg-white p-4"}
      >
        <input
          className="my-auto h-4 w-4 shrink-0 appearance-none rounded-full border-2 border-yrgo-red bg-white checked:bg-yrgo-red"
          type="checkbox"
          value={item}
          id={item}
          onClick={onClick}
          defaultChecked={defaultChecked}
        />
        <label
          htmlFor={item}
          className="my-auto pl-4 font-extrabold uppercase text-yrgo-red"
        >
          {item}
        </label>
        <br />
      </li>
    );
  };

  const updateAnswer = (question, value) => {
    setAnswer({
      ...answer,
      quickQuestions: {
        dogPolicy: question === "dogPolicy" ? value : dogPolicy,
        remoteWorkPolicy:
          question === "remoteWorkPolicy" ? value : remoteWorkPolicy,
        officeLocation: question === "officeLocation" ? value : officeLocation,
        companyType: question === "companyType" ? value : companyType,
        officeType: question === "officeType" ? value : officeType,
      },
    });
  };

  // dog policy
  const [dogPolicy, setDogPolicy] = useState(
    answer.quickQuestions.dogPolicy || "",
  );
  const updateDogPolicy = (event) => {
    setDogPolicy(event.target.value);
    updateAnswer("dogPolicy", event.target.value);
  };

  // remote work policy
  const [remoteWorkPolicy, setRemoteWorkPolicy] = useState(
    answer.quickQuestions.remoteWorkPolicy || "",
  );
  const updateRemoteWorkPolicy = (event) => {
    setRemoteWorkPolicy(event.target.value);
    updateAnswer("remoteWorkPolicy", event.target.value);
  };

  // office location
  const [officeLocation, setOfficeLocation] = useState(
    answer.quickQuestions.officeLocation || "",
  );
  const updateOfficeLocation = (event) => {
    setOfficeLocation(event.target.value);
    updateAnswer("officeLocation", event.target.value);
  };

  // company type
  const [companyType, setCompanyType] = useState(
    answer.quickQuestions.companyType || "",
  );

  const updateCompanyType = (event) => {
    setCompanyType(event.target.value);
    updateAnswer("companyType", event.target.value);
  };

  // office type
  const [officeType, setOfficeType] = useState(
    answer.quickQuestions.officeType || "",
  );

  const updateOfficeType = (event) => {
    setOfficeType(event.target.value);
    updateAnswer("officeType", event.target.value);
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        5 snabba!
      </h2>
      <ul className="grid grid-cols-2 gap-0.5 border-b-2 border-yrgo-red bg-yrgo-red">
        <ListItem
          item="hund = ja!"
          onClick={updateDogPolicy}
          defaultChecked={
            answer.quickQuestions.dogPolicy === "hund = ja!" ? true : false
          }
        />
        <ListItem
          item="no dogs :)"
          onClick={updateDogPolicy}
          defaultChecked={
            answer.quickQuestions.dogPolicy === "no dogs :)" ? true : false
          }
        />

        <ListItem
          item="remote work = no"
          onClick={updateRemoteWorkPolicy}
          defaultChecked={
            answer.quickQuestions.remoteWorkPolicy === "remote work = no"
              ? true
              : false
          }
        />
        <ListItem
          item="remote work = yes"
          onClick={updateRemoteWorkPolicy}
          defaultChecked={
            answer.quickQuestions.remoteWorkPolicy === "remote work = yes"
              ? true
              : false
          }
        />

        <ListItem
          item="kontor i sverige"
          onClick={updateOfficeLocation}
          defaultChecked={
            answer.quickQuestions.officeLocation === "kontor i sverige"
              ? true
              : false
          }
        />
        <ListItem
          item="kontor utomlands"
          onClick={updateOfficeLocation}
          defaultChecked={
            answer.quickQuestions.officeLocation === "kontor utomlands"
              ? true
              : false
          }
        />

        <ListItem
          item="inhouse"
          onClick={updateCompanyType}
          defaultChecked={
            answer.quickQuestions.companyType === "inhouse" ? true : false
          }
        />
        <ListItem
          item="byrå"
          onClick={updateCompanyType}
          defaultChecked={
            answer.quickQuestions.companyType === "byrå" ? true : false
          }
        />

        <ListItem
          item="eget kontor"
          onClick={updateOfficeType}
          defaultChecked={
            answer.quickQuestions.officeType === "eget kontor" ? true : false
          }
        />
        <ListItem
          item="kontors-landskap"
          onClick={updateOfficeType}
          defaultChecked={
            answer.quickQuestions.officeType === "kontors-landskap"
              ? true
              : false
          }
        />
      </ul>
    </>
  );
};

export default QuickQuestions;
