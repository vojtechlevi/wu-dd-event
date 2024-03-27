import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../UserContext";
import yrgologo from "../assets/yrgo-logo.png";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user !== null ? (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
          <img src={yrgologo} alt="yrgo logo" className="" />
          <p>Loading...</p>
        </div>
      ) : (
        <main className="flex h-screen w-full flex-col items-center justify-around">
          <div className="flex w-full flex-col items-center justify-center gap-6 px-8">
            <h1 className="text-8xl">Event 24 april</h1>
            <p className="text-base">
              Välkomna - mingel - Webbutvecklare och Digital Designers på YRGO -
              det blir kul!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xl">Vem är du?</p>
            <div className="flex gap-4">
              <Link to="/student">
                <button className="rounded-[32px] border border-black px-4 py-3">
                  Student
                </button>
              </Link>
              <Link to="/company">
                <button className="rounded-[32px] border border-black px-4 py-3">
                  Företag
                </button>
              </Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
