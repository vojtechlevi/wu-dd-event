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
      <main className="flex h-screen w-full flex-col items-center justify-around">
        <div className=" flex h-[50px] w-full items-center justify-center bg-yrgo-red">
          <img src={yrgologo} alt="Yrgo logo text" />
        </div>
        <div className="relative mx-4 mb-8 flex h-full flex-col border-x-2 border-b-2 border-yrgo-red text-yrgo-red">
          <div className="flex h-[43px] items-center border-b-2 border-yrgo-red ">
            <p className="ml-2 font-bold uppercase text-yrgo-red ">
              Plats - Visual Arena
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-start justify-end gap-6 px-8">
            <h1 className=" text-6xl font-extrabold uppercase">
              Event <br /> 24 april
            </h1>
            <div className="h-[4px] w-[90%] bg-yrgo-red"></div>
            <p className="text-base font-bold">
              Välkommen till YRGO på mingel med Webbutvecklare och Digitala
              Designers.
            </p>
            <p className="mb-4 mt-10 font-bold">Välj din roll</p>
          </div>
          <div className=" flex h-14 w-full border-t-2 border-yrgo-red">
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
        </div>
      </main>
    </>
  );
};

export default Home;
