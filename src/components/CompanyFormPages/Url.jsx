const Url = ({ counter, setCounter, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, url: event.target.value });
  };

  return (
    <>
      <h2 className="text-4xl">Var kan vi läsa mer om er?</h2>
      <input
        type="text"
        placeholder="www.företagsnamn.se"
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

export default Url;
