const Confirmation = ({ counter, setCounter }) => {
  return (
    <>
      <h2 className="text-4xl">Event 24 April </h2>
      <p>
        Kom och träffa digitala designers och webbutvecklare på vårt coola
        event.
      </p>
      <p> Hoppas vi ses!</p>
      <button
        // onClick={() => setCounter(counter + 1)}
        // this button should route to somewhere else
        className="border border-black p-2"
      >
        Frågor?
      </button>
    </>
  );
};

export default Confirmation;
