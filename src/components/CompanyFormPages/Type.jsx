import { useState } from "react";

const ListItem = ({ sliderName, sliderText, onChange, defaultValue }) => {
  return (
    <li
      key={sliderName}
      className="m-4 mt-8 items-center gap-8 lg:mx-24 lg:mt-16 lg:flex"
    >
      <p className="mb-8 font-extrabold  uppercase text-yrgo-blue lg:mb-4">
        {sliderText}
      </p>
      <div className="flex-grow">
        <input
          type="range"
          min="0"
          max="10"
          defaultValue={defaultValue}
          onChange={onChange}
          className="w-full"
          id={sliderName}
          name={sliderName}
        />
        <div className="flex justify-between">
          <p className="font-bold text-yrgo-blue">0</p>
          <p className="font-bold text-yrgo-blue">10</p>
        </div>
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
      <h2 className="mt-16 border-b-4 border-yrgo-blue p-4 text-2xl font-extrabold uppercase text-yrgo-blue lg:border-b-8 lg:p-8 lg:text-4xl">
        Vilken rörelse är ditt företag?
      </h2>
      <ul>
        <ListItem
          defaultValue={answer.companyType.cool || 5}
          sliderName={"cool"}
          sliderText={"cool som en katt"}
          onChange={handleChange}
        />
        <ListItem
          defaultValue={answer.companyType.fast || 5}
          sliderName={"fast"}
          sliderText={"snabb som blixten"}
          onChange={handleChange}
        />
        <ListItem
          defaultValue={answer.companyType.stable || 5}
          sliderName={"stable"}
          sliderText={"stadig och stabil"}
          onChange={handleChange}
        />
      </ul>
    </>
  );
};

export default Type;
