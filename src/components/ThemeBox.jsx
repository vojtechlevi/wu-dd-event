import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ThemeBox = ({ children, backBtn }) => {
  return (
    <>
      <section className="flex h-full w-full flex-col">
        <div className=" h-[50px] w-full bg-yrgo-blue"></div>
        <div className="relative mx-4 mb-8 flex h-full flex-col border-x-2 border-b-2 border-yrgo-blue text-yrgo-blue">
          <div className="h-[43px] border-b-2 border-yrgo-blue  ">
            <p className="ml-2 font-bold uppercase ">yrgo event 24 april</p>
          </div>
          <div className="flex h-full flex-col items-center justify-center ">
            {children}
          </div>
          {backBtn ? (
            <Link
              to={backBtn}
              className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center border-r-2 border-t-2 border-yrgo-blue"
            >
              <ArrowLeft />
            </Link>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default ThemeBox;
