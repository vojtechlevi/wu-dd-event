import React, { useState } from "react";
import { X } from "lucide-react";

const FilterList = ({
  companies,
  setCompanies,
  filterList,
  setFilterList,
  selectedTypes,
  setSelectedTypes,
}) => {
  console.log(companies);
  const handleTypeClick = (e, type) => {
    const filteredData = companies.filter((company) => {
      // Check if the internTypeCount for the selected type is greater than 0
      return company.internTypeCount[type] > 0;
    });
    setCompanies(filteredData);
  };

  return (
    <>
      <div className=" h-full w-full">
        <div className="mx-auto flex h-[111px] w-full flex-col items-center justify-center gap-4 bg-yrgo-blue font-semibold text-white">
          <p className="flex w-[90%] items-center justify-between uppercase underline">
            Visa Resultat
            <X
              onClick={() => setFilterList(!filterList)}
              className="cursor-pointer text-white"
            />
          </p>
          <p className="w-[90%] uppercase underline">Rensa</p>
        </div>
        <div className=" my-12 flex w-full flex-col gap-12">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="uppercase">Typ av LIA-plats</h2>
            <div className="flex gap-2">
              <p
                onClick={(e) => handleTypeClick(e, "Webbutvecklare")}
                className={`border-[0.5px] border-yrgo-blue px-2 py-1`}
              >
                Webbutvecklare
              </p>
              <p
                onClick={(e) => handleTypeClick(e, "Digital designer")}
                className="border-[0.5px] border-yrgo-blue px-2 py-1"
              >
                Digital Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterList;
