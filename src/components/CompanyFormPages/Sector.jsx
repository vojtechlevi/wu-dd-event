const Sector = ({ counter, setCounter, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, sector: event.target.value });
  };

  return (
    <>
      <h2 className="text-4xl">Vilken bransch tillhör ni?</h2>
      <input
        type="text"
        placeholder="bilindustrin"
        className="bg-gray-200"
        onChange={handleChange}
      />
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default Sector;
