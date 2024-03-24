const Software = ({ counter, setCounter, answer, setAnswer }) => {
  let software = [];

  const handleClick = (event) => {
    if (event.target.classList.contains("bg-black")) {
      event.target.classList.remove("bg-black", "text-white");

      software = software.filter((sw) => {
        return sw !== event.target.textContent;
      });
    } else {
      event.target.classList.add("bg-black", "text-white");

      software.push(event.target.textContent);
    }
  };

  console.log(answer);

  return (
    <>
      <h2 className="text-4xl">Vilka program jobbar ni i?</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="border border-black p-2" onClick={handleClick}>
          Figma
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Webflow
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          React
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Adobe
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Exempel
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Exempel2
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Exempel3
        </button>
        <button className="border border-black p-2" onClick={handleClick}>
          Exempel4
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setAnswer({ ...answer, software: software });
        }}
        className="border border-black p-2"
      >
        Nästa
      </button>
    </>
  );
};

export default Software;
