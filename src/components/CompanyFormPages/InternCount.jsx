const InternCount = ({ counter, setCounter, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, internCount: Number(event.target.value) });
  };

  return (
    <>
      <h2 className="text-4xl">Hur många kan ni ta emot?</h2>
      <select name="count" onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button
        onClick={() => setCounter(counter + 1)}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default InternCount;
