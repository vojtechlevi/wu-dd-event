import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ButtonTextCentered from "../components/Buttons/ButtonTextCentered";
import yrgologo from "../assets/yrgo-text-white.png";

const Company = () => {
  return (
    <main className="relative grid h-full w-full grid-rows-layout">
      <header className=" flex h-12 items-center justify-center bg-yrgo-red lg:mx-16 lg:mt-4 lg:flex lg:h-24">
        <img src={yrgologo} alt="Yrgo logo text" />
      </header>

      {/* mobile middle section: */}
      <section className=" mx-4 my-auto overflow-y-auto lg:hidden ">
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

      {/* desktop middle section: */}
      <section className=" mx-16 hidden grid-cols-2 grid-rows-2 gap-1 overflow-y-auto border-x-4 border-yrgo-red bg-yrgo-red lg:grid">
        <div className="flex items-center justify-center bg-white">
          <h1 className="px-auto text-[150px] font-extrabold uppercase leading-none text-yrgo-red">
            hej!
          </h1>
        </div>

        <div className="flex items-center justify-center bg-white">
          <p className=" px-auto w-[320px] text-2xl font-bold leading-normal text-yrgo-red">
            Vad roligt att du hittat hit. Innan vi ses vill vi gärna lära känna
            er, därför har vi satt ihop ett gäng frågor ni gärna får besvara.
          </p>
        </div>

        <div className="bg-white"></div>

        <div className=" flex flex-col items-center justify-center gap-4 bg-white">
          <p className=" px-auto w-[320px]  text-xl font-normal leading-normal text-yrgo-red">
            Era svar sedan blir synliga för YRGOs studenter.
          </p>
          <p className=" px-auto w-[320px]  text-2xl font-bold leading-normal text-yrgo-red">
            ÄR DU REDO?
          </p>
        </div>
      </section>

      <section className="m-4 mb-8 block grid-cols-2 px-4 lg:mx-16 lg:mt-0 lg:grid lg:p-0">
        <div className="flex">
          <Link
            to={"/"}
            className="flex items-center justify-center border-2 border-yrgo-red p-4 lg:border-4"
          >
            <ArrowLeft className="stroke-yrgo-red lg:scale-150" />
          </Link>
          <div className="hidden grow border-4 border-l-0 border-r-2 border-yrgo-red lg:block"></div>
        </div>
        <div className="hidden border-4 border-l-2 border-yrgo-red lg:block">
          <ButtonTextCentered isLink={true} linkTo="/company-form">
            Yes! Ta mig till frågorna
          </ButtonTextCentered>
        </div>
      </section>
    </main>
  );
};

export default Company;
