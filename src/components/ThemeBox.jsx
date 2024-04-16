import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ThemeBox = ({ children, backBtn }) => {
  return (
    <>
      <section className="flex h-full w-full flex-col lg:items-center">
        <div className=" h-[50px] w-full bg-yrgo-blue lg:w-[90%]"></div>
        <div className="relative mx-4 mb-8 flex h-full flex-col border-x-2 border-b-2 border-yrgo-blue text-yrgo-blue lg:w-[90%] lg:border-x-4 lg:border-b-4">
          <div className="h-[43px] border-b-2 border-yrgo-blue lg:border-b-4  ">
            <p className="ml-2 flex h-full items-center font-bold uppercase ">
              yrgo event 24 april
            </p>
          </div>
          <div className="flex h-full flex-col items-center justify-center ">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default ThemeBox;
