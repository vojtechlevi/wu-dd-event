const Name = ({ answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, name: event.target.value });
  };

  return (
    <>
      <h2 className="mt-32 border-b-2 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red">
        Vilket företag kommer du från?
      </h2>
      <input
        type="text"
        placeholder="Företagsnamn"
        value={answer.name || ""}
        className="placeholder:text-placeholder-grey w-full border-y-2 border-yrgo-red p-4 "
        onChange={handleChange}
      />
    </>
  );
};

export default Name;
