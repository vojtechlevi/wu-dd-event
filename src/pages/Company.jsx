import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ButtonTextCentered from "../components/Buttons/ButtonTextCentered";
import yrgologo from "../assets/yrgo-text-white.png";

const Company = () => {
  return (
    <main className="relative grid h-full w-full grid-rows-layout">
      <header className=" flex h-12 w-full items-center justify-center bg-yrgo-red">
        <img src={yrgologo} alt="Yrgo logo text" />
      </header>

      <section className=" mx-4 my-auto overflow-y-auto ">
        <h1 className="p-4 text-6xl font-extrabold uppercase text-yrgo-red">
          hej!
        </h1>

        <div className="p-4  font-medium text-yrgo-blue">
          <p className="mb-4">
            Vad roligt att du hittat hit. Innan vi ses vill vi gärna lära känna
            er, därför har vi satt ihop ett gäng frågor ni gärna får besvara.
          </p>
          <p className="mb-4">
            Era svar sedan blir synliga för YRGOs studenter.
          </p>
          <p>Är du redo?</p>
        </div>

        <div className="m-4 mt-12">
          <ButtonTextCentered isLink={true} linkTo="/company-form">
            Yes! Ta mig till frågorna
          </ButtonTextCentered>
        </div>
      </section>

      <section className="m-4 mb-8 px-4">
        <Link
          to={"/"}
          className="flex h-14 w-14 items-center justify-center border-2 border-yrgo-red"
        >
          <ArrowLeft className="stroke-yrgo-red" />
        </Link>
      </section>
    </main>
  );
};

export default Company;
