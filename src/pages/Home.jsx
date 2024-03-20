import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col justify-around items-center">
        <div className="w-full px-8 flex flex-col gap-6">
          <h1 className="text-8xl">Event 24 april</h1>
          <p className="text-base">
            Välkomna - mingel - Webbutvecklare och Digital Designers på YRGO -
            det blir kul!
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-xl">Vem är du?</p>
          <div className="flex gap-4">
            <Link to="/student">
              <button className="border border-black rounded-[32px] px-4 py-3">
                Student
              </button>
            </Link>
            <Link to="/company">
              <button className="border border-black rounded-[32px] px-4 py-3">
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
