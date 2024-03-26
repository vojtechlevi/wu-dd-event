import React from "react";

const ThemeBox = ({ children, btnOne, btnTwo, ...rest }) => {
  console.log();
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <div className="w-full h-[50px] bg-[#F52A3B]"></div>
        <div className="mx-4 h-full mb-8 border-x-2 border-[#F52A3B] flex flex-col">
          <div className="h-[50px] border-b-2 border-[#F52A3B] ">
            <p className="uppercase text-[#F52A3B] font-bold ml-2">
              yrgo event 24 april
            </p>
          </div>
          <div className="h-full flex flex-col justify-center items-center ">
            {children}
          </div>
          <div className="h-[58px] border-t-2 border-b-2 border-[#F52A3B] flex">
            <div className="w-1/2 h-full border-r border-[#F52A3B] ml-4 flex justify-start items-center">
              hej
            </div>
            <div className="w-1/2 h-full border-l border-[#F52A3B] mr-4 flex justify-end items-center">
              hej
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThemeBox;
