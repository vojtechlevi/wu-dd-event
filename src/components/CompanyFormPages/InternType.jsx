const InternType = ({ counter, setCounter, answer, setAnswer }) => {
  let internType = [];

  const handleClick = (event) => {
    if (event.target.classList.contains("bg-black")) {
      event.target.classList.remove("bg-black", "text-white");

      internType = internType.filter((type) => {
        return type !== event.target.textContent;
      });
    } else {
      event.target.classList.add("bg-black", "text-white");

      internType.push(event.target.textContent);
    }
  };

  return (
    <>
      <h2 className="text-4xl">Vilken typ av praktikant söker ni?</h2>
      <button
        className="border border-black p-2 self-start"
        onClick={handleClick}
      >
        Digital Designer
      </button>
      <button
        className="border border-black p-2 self-start"
        onClick={handleClick}
      >
        Webbutvecklare
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, internType: internType });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default InternType;
