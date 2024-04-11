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
      <h2 className="mt-32 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red">
        Kontaktinformation
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Företag..."
        defaultValue={answer.contact.name || ""}
        className="w-full border-b-2 border-yrgo-red p-4 font-medium uppercase text-yrgo-red placeholder:text-placeholder-grey focus:outline-none"
        onChange={handleChange}
      />
      <input
        type="url"
        name="url"
        placeholder="www.hemsida.se"
        value={answer.contact.url || ""}
        className="w-full border-b-2 border-yrgo-red p-4 font-medium uppercase text-yrgo-red placeholder:text-placeholder-grey focus:outline-none"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="info@mail.com"
        value={answer.contact.email || ""}
        className="w-full border-b-2 border-yrgo-red p-4 font-medium uppercase text-yrgo-red placeholder:text-placeholder-grey focus:outline-none"
        onChange={handleChange}
      />
    </>
  );
};

export default Contact;
