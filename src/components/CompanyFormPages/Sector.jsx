const Sector = ({ answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, sector: event.target.value });
  };

  return (
    <>
      <h2 className="mt-32 border-b-2 border-yrgo-red p-4 text-2xl font-extrabold uppercase text-yrgo-red">
        Vilken bransch tillhör ni?
      </h2>
      <input
        type="text"
        placeholder="Bilindustrin"
        className="placeholder:text-placeholder-grey w-full border-y-2 border-yrgo-red p-4 "
        value={answer.sector || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default Sector;
