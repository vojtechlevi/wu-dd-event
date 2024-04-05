const Contact = ({ answer, setAnswer }) => {
  const handleChange = (event) => {
    // setAnswer({ ...answer, name: event.target.value });
  };

  return (
    <>
      <h2 className="mt-32 border-b-4 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red">
        Kontaktinformation
      </h2>
      <input
        type="text"
        placeholder="Företagsnamn..."
        // value={answer.name || ""}
        className="w-full border-b-2 border-yrgo-red p-4 placeholder:text-placeholder-grey "
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="www.hemsida.se"
        // value={answer.name || ""}
        className="w-full border-b-2 border-yrgo-red p-4 placeholder:text-placeholder-grey "
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="info@mail.com"
        // value={answer.name || ""}
        className="w-full border-b-2 border-yrgo-red p-4 placeholder:text-placeholder-grey "
        onChange={handleChange}
      />
    </>
  );
};

export default Contact;
