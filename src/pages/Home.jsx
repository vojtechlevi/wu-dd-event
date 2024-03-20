import React from "react";

const Home = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <div className="">
          <h1>Event 24 april</h1>
          <p>
            Välkomna <span>-</span> mingel <span>-</span> Webbutvecklare och
            Digital Designers på YRGO <span>-</span> det blir kul!
          </p>
        </div>
        <div>
          <p className="">Vem är du?</p>
          <div>
            <button>Student</button>
            <button>Företag</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
