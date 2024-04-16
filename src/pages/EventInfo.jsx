import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ButtonTextCentered from "../components/Buttons/ButtonTextCentered";
import yrgologo from "../assets/yrgo.png";

const EventInfo = () => {
  return (
    <main className=" w-full">
      <header>
        <div className=" flex h-12 w-full items-center justify-center bg-yrgo-blue lg:h-24"></div>
        <img src={yrgologo} alt="Yrgo logo text" className="mx-auto mt-8" />
      </header>

      <section className=" mx-8 py-16 lg:mx-32  ">
        <h1 className="mb-4 text-6xl font-extrabold uppercase text-yrgo-blue lg:text-8xl lg:font-bold">
          event 24 april
        </h1>

        <p className="mb-12 max-w-xl font-semibold  text-yrgo-blue lg:mb-60 lg:text-xl">
          Välkomna på mingelevent hos YRGO för att hitta framtida medarbetare,
          eller bara jobba tillsammans under LIA!
        </p>

        <div className="flex-row-reverse gap-32 lg:flex">
          <div className="mb-12 flex gap-12">
            <p className="text-xl font-bold uppercase text-yrgo-red">plats</p>
            <div className="flex w-max flex-col gap-4 font-semibold text-black lg:text-xl lg:text-yrgo-blue">
              <p>
                Visual Arena, <br />
                Lindholmspiren 3
              </p>
              <p className="text-xl lg:text-4xl lg:font-extrabold lg:text-yrgo-blue">
                17:00
              </p>
            </div>
          </div>

          <div>
            <p className=" mb-2 font-extrabold uppercase text-yrgo-blue lg:mb-8 lg:text-xl">
              träffa studenterna
            </p>
            <div className="mb-12 text-yrgo-blue">
              <p className="mb-4 lg:text-xl">
                Ni kommer att träffa Webbutvecklare och Digital Designers från
                YRGO. Som företag kan ni med fördel ta med någon form av
                identifikation för synlighet. Vi kommer att ha stationer där
                företag och studerande kan träffas.
              </p>
              <p className="lg:mb-32 lg:text-xl">
                Varmt välkomna önskar Webbutvecklare och Digital Designer!
              </p>
            </div>
            <p className="mb-8  font-semibold text-yrgo-blue lg:mb-6 lg:text-xl lg:font-medium">
              Läs gärna mer om YRGO och våra utbildningar på yrgo.se!
            </p>
          </div>
        </div>

        <div className="mb-12 flex flex-col gap-4 lg:max-w-sm lg:items-start lg:gap-6">
          <div className="w-full border-yrgo-blue lg:border-2">
            <ButtonTextCentered
              color="blue"
              fullWidth={true}
              isLink={true}
              linkTo={"https://www.yrgo.se/program/webbutvecklare/"}
            >
              <div className="mx-auto flex w-full items-center  gap-4 ">
                <p>Webbutvecklare</p>
                <ArrowRight />
              </div>
            </ButtonTextCentered>
          </div>
          <div className="w-full border-yrgo-blue lg:border-2">
            <ButtonTextCentered
              color="blue"
              fullWidth={true}
              isLink={true}
              linkTo={"https://www.yrgo.se/program/digital-designer/"}
            >
              <div className="mx-auto flex w-full items-center gap-4">
                <p>Digital designer</p>
                <ArrowRight />
              </div>
            </ButtonTextCentered>
          </div>
        </div>

        <h2 className="text-center text-3xl font-extrabold uppercase text-yrgo-red lg:mt-64 lg:text-5xl">
          Välkommna!
        </h2>
      </section>
    </main>
  );
};

export default EventInfo;
