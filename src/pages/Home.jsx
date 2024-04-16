import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../UserContext";
import yrgologo from "../assets/yrgo-text-white.png";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {/* {user !== null ? (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
          <img src={yrgologo} alt="yrgo logo" className="" />
          <p>Loading...</p>
        </div>
      ) : ( */}
      <main className="flex h-full w-full flex-col items-center justify-around">
        <div className=" flex h-[50px] w-full items-center justify-center bg-yrgo-red lg:w-[90%]">
          <img src={yrgologo} alt="Yrgo logo text" />
        </div>
        <div className="relative mx-4 mb-8 flex h-full flex-col border-x-2 border-b-2 border-yrgo-red text-yrgo-red lg:w-[90%] lg:border-x-4 lg:border-b-4">
          <div className="flex h-[43px] items-center border-b-2 border-yrgo-red lg:h-[78px] lg:border-b-4 ">
            <p className="ml-2 flex h-full items-center font-bold uppercase text-yrgo-red lg:my-6 lg:ml-0 lg:border-r-4 lg:border-yrgo-red lg:px-10 lg:text-xl ">
              Plats - Visual Arena
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-end gap-6 px-8 lg:items-center lg:justify-center">
            <h1 className=" text-6xl font-extrabold uppercase lg:text-center lg:text-[96px]">
              Event <br className="lg:hidden" /> 24 april
            </h1>
            <div className="h-[4px] w-[90%] bg-yrgo-red lg:h-[8px] lg:w-[777px]"></div>
            <p className="text-base font-bold lg:hidden">
              Välkommen till YRGO på mingel med Webbutvecklare och Digitala
              Designers.
            </p>
            <p className="mb-4 mt-10 font-bold lg:hidden">Välj din roll</p>
          </div>
          <div className="flex h-14 w-full border-t-2 border-yrgo-red lg:hidden">
            <Link to="/student" className="h-full w-1/2 ">
              <button className="h-full w-full border-r-2 border-yrgo-red px-2 font-extrabold uppercase text-yrgo-red">
                Student
              </button>
            </Link>
            <Link to="/company" className="h-full w-1/2 ">
              <button className=" h-full w-full px-2 font-extrabold uppercase text-yrgo-red">
                Företag
              </button>
            </Link>
          </div>
          <div className=" hidden justify-between border-t-4 border-yrgo-red lg:flex">
            <p className="flex items-center pl-6 text-xl font-bold">
              Välkommen till YRGO på mingel med <br /> Webbutvecklare och
              Digitala Designers.
            </p>
            <div className="flex w-[288px] flex-col">
              <Link to="/student" className=" w-full">
                <button className="w-full border-b-4 border-l-4 border-yrgo-red px-12 py-4 text-xl font-bold uppercase transition-all duration-300 ease-in hover:bg-yrgo-red hover:text-white">
                  Student
                </button>
              </Link>
              <Link to="/company" className="w-full">
                <button className="w-full border-l-4 border-yrgo-red px-12 py-4 text-xl font-bold uppercase transition-all duration-300 ease-in hover:bg-yrgo-red hover:text-white">
                  Företag
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
