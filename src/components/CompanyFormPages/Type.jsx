import { useState } from "react";

// defaultFormValues:
// companyType:
//   {
//     cool: null,
//     fast: null,
//     stable: null,
//   },
// ,

const ListItem = ({ sliderName, sliderText }) => {
  return (
    <li key={sliderName} className="m-4 mt-8">
      <p className="mb-8 font-extrabold uppercase text-yrgo-red">
        {sliderText}
      </p>
      <input
        type="range"
        min="1"
        max="10"
        defaultValue="5"
        class="w-full"
        id="myRange"
      />
      <div className="flex justify-between">
        <p className="font-bold text-yrgo-red">1</p>
        <p className="font-bold text-yrgo-red">10</p>
      </div>
    </li>
  );
};

const Type = ({ answer, setAnswer }) => {
  const [type, setType] = useState(answer.type || "");

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red  ">
        Vilken rörelse är ditt företag?
      </h2>
      <ul>
        <ListItem sliderName={"cool"} sliderText={"cool som en katt"} />
        <ListItem sliderName={"fast"} sliderText={"snabb som blixten"} />
        <ListItem sliderName={"stable"} sliderText={"stadig och stabil"} />
      </ul>
    </>
  );
};

export default Type;
