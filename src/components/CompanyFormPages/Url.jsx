const Url = ({ answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, url: event.target.value });
  };

  return (
    <>
      <h2 className="mt-32 p-4 text-2xl font-extrabold uppercase text-yrgo-red">
        Var kan vi läsa mer om er?
      </h2>
      <input
        type="text"
        placeholder="www.företagsnamn.se"
        value={answer.url || ""}
        className="placeholder:text-placeholder-grey w-full border-y-2 border-yrgo-red p-4 "
        onChange={handleChange}
      />
    </>
  );
};

export default Url;
