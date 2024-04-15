import { useState } from "react";
import DOMPurify from "dompurify";

const Contact = ({ answer, setAnswer }) => {
  const [selectedChoices, setSelectedChoices] = useState(answer.contact || "");

  const handleChange = (event) => {
    const cleanValue = DOMPurify.sanitize(event.target.value);

    const updatedChoices = {
      ...selectedChoices,
      [event.target.name]: cleanValue,
    };
    setSelectedChoices(updatedChoices);
    setAnswer({ ...answer, contact: updatedChoices });
  };

  return (
    <>
      <h2 className="mt-16 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red lg:border-b-8 lg:p-8 lg:text-4xl">
        Kontaktinformation
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Företag"
        defaultValue={answer.contact.name || ""}
        className="w-full border-b-2 border-yrgo-red p-4 font-medium uppercase text-yrgo-red placeholder:text-placeholder-grey focus:outline-none lg:border-b-4 lg:p-8 lg:text-xl lg:font-extrabold "
        onChange={handleChange}
        required={true}
      />
      <input
        type="url"
        name="url"
        placeholder="hemsida"
        value={answer.contact.url || ""}
        className="w-full border-b-2 border-yrgo-red p-4 font-medium uppercase text-yrgo-red placeholder:text-placeholder-grey focus:outline-none lg:border-b-4 lg:p-8 lg:text-xl lg:font-extrabold "
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="mail"
        value={answer.contact.email || ""}
        className="w-full border-b-2 border-yrgo-red p-4 font-medium uppercase text-yrgo-red placeholder:text-placeholder-grey focus:outline-none lg:border-b-4 lg:p-8 lg:text-xl lg:font-extrabold "
        onChange={handleChange}
      />
    </>
  );
};

export default Contact;
