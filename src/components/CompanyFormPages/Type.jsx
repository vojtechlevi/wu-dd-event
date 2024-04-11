import { useState } from "react";

const ListItem = ({ sliderName, sliderText, onChange }) => {
  return (
    <li key={sliderName} className="m-4 mt-8">
      <p className="mb-8 font-extrabold uppercase text-yrgo-blue">
        {sliderText}
      </p>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue="5"
        onChange={onChange}
        className="w-full"
        id={sliderName}
        name={sliderName}
      />
      <div className="flex justify-between">
        <p className="font-bold text-yrgo-blue">1</p>
        <p className="font-bold text-yrgo-blue">10</p>
      </div>
    </li>
  );
};

const Type = ({ answer, setAnswer }) => {
  const [selectedChoices, setSelectedChoices] = useState(
    answer.companyType || "",
  );

  const handleChange = (event) => {
    const updatedChoices = {
      ...selectedChoices,
      [event.target.name]: event.target.value,
    };
    setSelectedChoices(updatedChoices);
    setAnswer({ ...answer, companyType: updatedChoices });
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-blue p-4 text-2xl font-extrabold uppercase text-yrgo-blue  ">
        Vilken rörelse är ditt företag?
      </h2>
      <ul>
        <ListItem
          sliderName={"cool"}
          sliderText={"cool som en katt"}
          onChange={handleChange}
        />
        <ListItem
          sliderName={"fast"}
          sliderText={"snabb som blixten"}
          onChange={handleChange}
        />
        <ListItem
          sliderName={"stable"}
          sliderText={"stadig och stabil"}
          onChange={handleChange}
        />
      </ul>
    </>
  );
};

export default Type;
