import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ButtonTextCentered from "../components/Buttons/ButtonTextCentered";
import yrgologo from "../assets/yrgo.png";

const EventInfo = () => {
  return (
    <main className=" w-full">
      <header>
        <div className=" flex h-12 w-full items-center justify-center bg-yrgo-blue"></div>
        <img src={yrgologo} alt="Yrgo logo text" className="mx-auto mt-8" />
      </header>

      <section className=" mx-8 py-16  ">
        <h1 className="mb-4 text-6xl font-extrabold uppercase text-yrgo-blue">
          event <br />
          24 april
        </h1>

        <p className="mb-12 font-semibold text-yrgo-blue">
          Välkomna på mingelevent hos YRGO för att hitta framtida medarbetare,
          eller bara jobba tillsammans under LIA!
        </p>

        <div className="mb-12 flex gap-12">
          <p className="text-xl font-bold uppercase text-yrgo-red">plats</p>
          <div className="flex flex-col gap-4 font-semibold text-black">
            <p>
              Visual Arena, <br />
              Lindholmspiren 3
            </p>
            <p className="text-xl">17:00</p>
          </div>
        </div>

        <p className=" mb-2 font-extrabold uppercase text-yrgo-blue">
          träffa studenterna
        </p>

        <div className="mb-12 text-yrgo-blue">
          <p className="mb-4">
            Ni kommer att träffa Webbutvecklare och Digital Designers från YRGO.
            Som företag kan ni med fördel ta med någon form av identifikation
            för synlighet. Vi kommer att ha stationer där företag och studerande
            kan träffas.
          </p>
          <p>Varmt välkomna önskar Webbutvecklare och Digital Designer!</p>
        </div>
        <p className="mb-8 font-semibold text-yrgo-blue">
          Läs gärna mer om YRGO och våra utbildningar på yrgo.se!
        </p>

        <div className="mb-12 flex flex-col gap-4">
          <ButtonTextCentered
            fullWidth={true}
            isLink={true}
            linkTo={"https://www.yrgo.se/program/webbutvecklare/"}
          >
            <div className="mx-auto flex w-full gap-4">
              <p>Webbutvecklare</p>
              <ArrowRight />
            </div>
          </ButtonTextCentered>
          <ButtonTextCentered
            fullWidth={true}
            isLink={true}
            linkTo={"https://www.yrgo.se/program/digital-designer/"}
          >
            <div className="mx-auto flex w-full gap-4">
              <p>Digital designer</p>
              <ArrowRight />
            </div>
          </ButtonTextCentered>
        </div>

        <h2 className="text-center  text-3xl font-extrabold uppercase text-yrgo-red">
          Välkommna!
        </h2>
      </section>
    </main>
  );
};

export default EventInfo;
