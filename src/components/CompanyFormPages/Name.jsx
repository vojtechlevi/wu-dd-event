import ButtonArrowRight from "../Buttons/ButtonArrowRight";
import ButtonArrowLeft from "../Buttons/ButtonArrowLeft";

const Name = ({ counter, setCounter, answer, setAnswer }) => {
  const handleChange = (event) => {
    setAnswer({ ...answer, name: event.target.value });
  };

  return (
    <>
      <div className=" flex h-full flex-col justify-center">
        <h2 className="p-4 text-2xl font-extrabold uppercase text-yrgo-red ">
          Vilket företag kommer du från?
        </h2>
        <input
          type="text"
          placeholder="Företagsnamn"
          value={answer.name || ""}
          className="border-y-2 border-yrgo-red p-4 text-[#BDBDBD]"
          onChange={handleChange}
        />
      </div>

      <div className="flex border-b-2 border-t-2 border-yrgo-red">
        <ButtonArrowLeft
          onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
        >
          tillbaka
        </ButtonArrowLeft>
        <ButtonArrowRight onClick={() => setCounter(counter + 1)}>
          nästa
        </ButtonArrowRight>
      </div>
    </>
  );
};

export default Name;
