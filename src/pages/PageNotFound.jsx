import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="hidden h-full w-full items-center justify-center lg:flex">
        <div className="flex h-full w-full flex-col items-center justify-center bg-yrgo-red text-white lg:h-auto lg:w-[475px] lg:py-12">
          <h2 className="text-[96px] font-extrabold uppercase">OOPS!</h2>
          <p className="-mt-6 text-2xl font-extrabold uppercase">
            Något gick snett
          </p>
          <Link
            to="/"
            className="mt-8 flex h-[48px] items-center justify-between gap-4 border-2 border-white px-4 font-extrabold"
          >
            <ArrowLeft />
            <p className="uppercase">Tillbaka</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
