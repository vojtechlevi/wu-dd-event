import React, { useState } from "react";
import { X } from "lucide-react";

const choicesFocusAreas = [
  "Motion",
  "UX",
  "UI",
  "Digitala plattformar",
  "Service design",
  "Film",
  "Apputveckling",
  "Webbutveckling",
  "Systemutveckling",
  "Branding",
  "E-commerce",
  "Annat",
];

const choicesSoftwareDesign = [
  "Figma",
  "Webflow",
  "Wordpress",
  "After Effects",
  "Photoshop",
  "XD",
  "Indesign",
  "Premiere Pro",
  "Linearity Move",
  "Spline",
  "Blender",
  "Canva",
  "Annat",
];

const choicesSoftwareDevelop = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "C#",
  "Java",
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Laravel",
  "Node.js",
  ".NET",
  "Wordpress",
  "Sanity",
  "Storyblok",
  "Andra CMS",
  "Andra tekniker",
];

const internType = ["Webbutvecklare", "Digital designer"];

const FilterList = ({
  internTypeFilter,
  setInternTypeFilter,
  softwareDevelopFilter,
  setSoftwareDevelopFilter,
  softwareDesignFilter,
  setSoftwareDesignFilter,
  focusAreasFilter,
  setFocusAreasFilter,
  filterList,
  setFilterList,
}) => {
  const handleFocusAreasFilterChange = (event) => {
    if (event.target.checked) {
      setFocusAreasFilter([...focusAreasFilter, event.target.value]);
    } else {
      const updatedFilter = focusAreasFilter.filter((checkedFilter) => {
        return checkedFilter !== event.target.value;
      });
      setFocusAreasFilter(updatedFilter);
    }
  };
  const handleSoftwareDesignFilterChange = (event) => {
    if (event.target.checked) {
      setSoftwareDesignFilter([...softwareDesignFilter, event.target.value]);
    } else {
      const updatedFilter = softwareDesignFilter.filter((checkedFilter) => {
        return checkedFilter !== event.target.value;
      });
      setSoftwareDesignFilter(updatedFilter);
    }
  };

  const handleSoftwareDevelopFilterChange = (event) => {
    if (event.target.checked) {
      setSoftwareDevelopFilter([...softwareDevelopFilter, event.target.value]);
    } else {
      setSoftwareDevelopFilter(
        softwareDevelopFilter.filter((choice) => choice !== event.target.value),
      );
    }
  };

  const handleInternTypeFilterChange = (event) => {
    if (event.target.checked) {
      setInternTypeFilter([...internTypeFilter, event.target.value]);
    } else {
      const updatedFilter = internTypeFilter.filter((checkedFilter) => {
        return checkedFilter !== event.target.value;
      });
      setInternTypeFilter(updatedFilter);
    }
  };

  function handleClear() {
    setFocusAreasFilter([]);
    setSoftwareDesignFilter([]);
    setSoftwareDevelopFilter([]);
    setInternTypeFilter([]);
  }

  return (
    <>
      <div className=" h-full w-full">
        <div className="mx-auto flex h-[111px] w-full flex-col items-center justify-center gap-4 bg-yrgo-blue font-semibold text-white">
          <div className="flex w-[90%] flex-col gap-4 ">
            <div className="flex justify-between ">
              <p
                onClick={() => setFilterList(!filterList)}
                className="flex cursor-pointer items-center justify-between uppercase underline"
              >
                Visa Resultat
              </p>
              <X
                onClick={() => setFilterList(!filterList)}
                className="cursor-pointer text-white"
              />
            </div>
            <p
              onClick={handleClear}
              className=" cursor-pointer uppercase underline"
            >
              Rensa
            </p>
          </div>
        </div>
        <div className=" my-12 flex w-full flex-col gap-12 pb-12">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-xl font-bold uppercase">Typ av LIA-plats</h2>
            <div className="flex flex-wrap gap-2">
              {internType.map((choice, index) => {
                return (
                  <label
                    key={choice}
                    className={`cursor-pointer border-[0.5px] border-yrgo-blue px-2 py-1 ${
                      internTypeFilter.includes(choice)
                        ? "bg-yrgo-blue text-white"
                        : "text-yrgo-blue"
                    } `}
                  >
                    <input
                      type="checkbox"
                      name={choice}
                      value={choice}
                      onChange={handleInternTypeFilterChange}
                      style={{ display: "none" }}
                      defaultChecked={internTypeFilter.includes(choice)}
                    />
                    <span>{choice}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-xl font-bold uppercase">Tjänster</h2>
            <div className="flex flex-wrap gap-2">
              {choicesFocusAreas.map((choice) => {
                return (
                  <label
                    key={choice}
                    className={`cursor-pointer border-[0.5px] border-yrgo-blue px-2 py-1 ${
                      focusAreasFilter.includes(choice)
                        ? "bg-yrgo-blue text-white"
                        : "text-yrgo-blue"
                    } `}
                  >
                    <input
                      type="checkbox"
                      name={choice}
                      value={choice}
                      onChange={handleFocusAreasFilterChange}
                      style={{ display: "none" }}
                      defaultChecked={focusAreasFilter.includes(choice)}
                    />
                    <span>{choice}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-xl font-bold uppercase">Design Verktyg</h2>
            <div className="flex flex-wrap gap-2">
              {choicesSoftwareDesign.map((choice) => {
                return (
                  <label
                    key={choice}
                    className={`cursor-pointer border-[0.5px] border-yrgo-blue px-2 py-1 ${
                      softwareDesignFilter.includes(choice)
                        ? "bg-yrgo-blue text-white"
                        : "text-yrgo-blue"
                    } `}
                  >
                    <input
                      type="checkbox"
                      name={choice}
                      value={choice}
                      onChange={handleSoftwareDesignFilterChange}
                      style={{ display: "none" }}
                      defaultChecked={softwareDesignFilter.includes(choice)}
                    />
                    <span>{choice}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-xl font-bold uppercase">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {choicesSoftwareDevelop.map((choice) => {
                return (
                  <label
                    key={choice}
                    className={`cursor-pointer border-[0.5px] border-yrgo-blue px-2 py-1 ${
                      softwareDevelopFilter.includes(choice)
                        ? "bg-yrgo-blue text-white"
                        : "text-yrgo-blue"
                    } `}
                  >
                    <input
                      type="checkbox"
                      name={choice}
                      value={choice}
                      onChange={handleSoftwareDevelopFilterChange}
                      style={{ display: "none" }}
                      defaultChecked={softwareDevelopFilter.includes(choice)}
                    />
                    <span>{choice}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterList;
