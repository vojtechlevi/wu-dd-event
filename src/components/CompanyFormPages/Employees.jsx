const Employees = ({ counter, setCounter, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, employees: Number(event.target.value) });
  };

  return (
    <>
      <h2 className="text-4xl">Hur många jobbar hos er?</h2>
      <input
        type="range"
        min="0"
        max="100"
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

export default Employees;
