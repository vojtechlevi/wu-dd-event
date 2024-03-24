const Name = ({ counter, setCounter, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ name: event.target.value });
  };

  return (
    <>
      <h2 className="text-4xl">Vilket företag kommer du från?</h2>
      <input
        type="text"
        placeholder="företagsnamn"
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

export default Name;
