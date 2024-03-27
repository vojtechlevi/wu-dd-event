import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Greeting = ({ counter, setCounter }) => {
  return (
    <>
      <div className=" flex h-full flex-col justify-center">
        <h1 className="m-0 self-start p-2 pl-6 text-[64px] font-extrabold uppercase text-yrgo-red ">
          Hej
        </h1>
        <p className="p-2 pl-6 font-extrabold uppercase text-yrgo-red   ">
          Vad roligt att du hittat hit. text om varför det är så nice att svara
          på ett formulär kanske passar här.
          <br />
          <br />
          är du redo?
        </p>
      </div>

      <div className="flex border-b-2 border-t-2 border-yrgo-red">
        <Link
          to="/"
          className="ml-4 flex w-1/2 items-center justify-start border-r border-yrgo-red py-4"
        >
          <MoveLeft className=" stroke-yrgo-red" />
          <p className="ml-4 font-extrabold uppercase  text-yrgo-red">
            tillbaka
          </p>
        </Link>
        <button
          className="mr-4 flex w-1/2 items-center justify-end border-l border-yrgo-red py-4"
          onClick={() => setCounter(counter + 1)}
        >
          <p className="mr-4 font-extrabold uppercase  text-yrgo-red">
            formulär
          </p>
          <MoveRight className=" stroke-yrgo-red" />
        </button>
      </div>
    </>
  );
};

export default Greeting;
