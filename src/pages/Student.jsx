import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

import { supabase } from "../client";
import UserContext from "../UserContext";
import CompanyDetails from "./CompanyDetails";
import FilterList from "../components/FilterList";

const Student = () => {
  const { setUser } = useContext(UserContext);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [menu, setMenu] = useState(true);
  const [filterList, setFilterList] = useState(false);

  const [focusAreasFilter, setFocusAreasFilter] = useState([]);
  const [softwareDesignFilter, setSoftwareDesignFilter] = useState([]);
  const [softwareDevelopFilter, setSoftwareDevelopFilter] = useState([]);
  const [internTypeFilter, setInternTypeFilter] = useState([]);

  // const tags = [];

  const tags = companies.map((company) => {
    return {
      id: company.id,
      tags: [...company.softwaresDev, ...company.softwaresDesign],
    };
  });

  console.log(tags);
  useEffect(() => {
    getCompanies();
  }, [
    focusAreasFilter,
    softwareDesignFilter,
    softwareDevelopFilter,
    internTypeFilter,
  ]);

  async function getCompanies() {
    let { data } = await supabase.from("companies").select();

    let filteredData = data;

    // focusAreasFilter:
    if (focusAreasFilter.length > 0) {
      filteredData = filteredData.filter((row) => {
        return focusAreasFilter.every((area) => row.focusAreas.includes(area));
      });
    }

    // softwareDesignFilter:
    if (softwareDesignFilter.length > 0) {
      filteredData = filteredData.filter((row) => {
        return softwareDesignFilter.every((software) =>
          row.softwaresDesign.includes(software),
        );
      });
    }

    // softwareDevelopFilter:
    if (softwareDevelopFilter.length > 0) {
      filteredData = filteredData.filter((row) => {
        return softwareDevelopFilter.every((software) =>
          row.softwaresDev.includes(software),
        );
      });
    }

    // internTypeFilter:
    if (internTypeFilter.length > 0) {
      filteredData = filteredData.filter((row) => {
        return internTypeFilter.every(
          (internType) =>
            row.internType &&
            Array.isArray(row.internType) &&
            row.internType.includes(internType),
        );
      });
    }

    setCompanies(filteredData);
  }

  function handleMenu() {
    setMenu(!menu);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <>
      {selectedCompany ? (
        <CompanyDetails
          details={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      ) : null}
      {filterList ? (
        <FilterList
          internTypeFilter={internTypeFilter}
          setInternTypeFilter={setInternTypeFilter}
          softwareDevelopFilter={softwareDevelopFilter}
          setSoftwareDevelopFilter={setSoftwareDevelopFilter}
          softwareDesignFilter={softwareDesignFilter}
          setSoftwareDesignFilter={setSoftwareDesignFilter}
          focusAreasFilter={focusAreasFilter}
          setFocusAreasFilter={setFocusAreasFilter}
          filterList={filterList}
          setFilterList={setFilterList}
        />
      ) : null}
      <section
        className={`flex h-full w-full select-none flex-col items-center ${filterList || selectedCompany ? "hidden" : ""}`}
      >
        <div className="flex w-full flex-col items-center justify-center lg:w-[80%]">
          <div className=" h-[50px] w-full bg-yrgo-blue"></div>
          <div className=" mx-4 mb-8 flex flex-col lg:w-full ">
            <div className="flex h-[43px] items-center justify-between border-x-2 border-b-2 border-yrgo-blue px-4 lg:px-0 ">
              <p className=" font-extrabold uppercase text-yrgo-blue lg:ml-2 ">
                yrgo event 24 april
              </p>
              <button
                onClick={signOut}
                className="hidden h-full cursor-pointer items-center border-l-2 border-yrgo-blue px-4 font-extrabold  uppercase lg:flex"
              >
                Logga ut
              </button>
              {menu ? (
                <Menu
                  onClick={handleMenu}
                  className="cursor-pointer lg:hidden"
                />
              ) : (
                <X onClick={handleMenu} className="cursor-pointer" />
              )}
            </div>
            {!menu ? (
              <div className="flex w-full flex-col gap-4 border-x-2 border-b-2 border-yrgo-blue px-4 py-4 text-right">
                <Link to="/" className="cursor-pointer">
                  <button onClick={signOut}>Logga ut</button>
                </Link>
              </div>
            ) : (
              ""
            )}

            <p
              onClick={() => setFilterList(true)}
              className="mt-8 cursor-pointer text-sm uppercase underline lg:hidden"
            >
              filtrera listan
            </p>

            <div className=" mt-4 flex gap-20 lg:mt-20">
              <FilterList
                internTypeFilter={internTypeFilter}
                setInternTypeFilter={setInternTypeFilter}
                softwareDevelopFilter={softwareDevelopFilter}
                setSoftwareDevelopFilter={setSoftwareDevelopFilter}
                softwareDesignFilter={softwareDesignFilter}
                setSoftwareDesignFilter={setSoftwareDesignFilter}
                focusAreasFilter={focusAreasFilter}
                setFocusAreasFilter={setFocusAreasFilter}
                filterList={filterList}
                setFilterList={setFilterList}
              />
              <div className="lg:w-[680px]">
                <div className="flex w-full flex-col">
                  <h2 className=" text-2xl font-extrabold uppercase text-yrgo-red lg:my-0">
                    Hitta din Lia
                  </h2>
                  <p>
                    Här kan du läsa mer om olika företag som söker praktikanter.
                  </p>
                  <p>
                    Använd filtrera-funktionen om du är intresserad av något
                    speciellt!
                  </p>
                </div>
                <div className=" no-scrollbar my-4 overflow-scroll scroll-smooth">
                  <ul>
                    {companies && companies.length > 0 ? (
                      companies.map((company) => (
                        <li
                          key={company.id}
                          className=" relative mt-4 cursor-pointer gap-4 bg-[#F0F0F0] p-3"
                          onClick={() => setSelectedCompany(company)}
                        >
                          <h3 className="mb-2 flex items-center justify-between text-xl font-bold">
                            {company && company.contact?.name}
                          </h3>

                          <div className="flex flex-col gap-1 min-[375px]:gap-2">
                            {company.internType &&
                            company.internType.length > 0 ? (
                              <>
                                <div className="flex items-center justify-start gap-2 ">
                                  <p className="text-[10px] min-[375px]:text-sm">
                                    Söker:{" "}
                                  </p>
                                  {company.internType.map((type) => (
                                    <div key={type}>
                                      <p className="border-[0.5px] border-black px-2 py-1 text-xs min-[375px]:text-sm">
                                        {type}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <p className="text-xs min-[375px]:text-sm">
                                Söker ej
                              </p>
                            )}
                          </div>
                          {tags.find((tag) => tag.id === company.id)?.tags
                            .length > 0 && (
                            <div className="mt-4 hidden flex-wrap items-center gap-2 lg:flex">
                              <p className="whitespace-nowrap text-xs min-[375px]:text-sm">
                                Vi jobbar med: <br />
                              </p>
                              {tags
                                .find((tag) => tag.id === company.id)
                                ?.tags.map((tag, index) => (
                                  <p
                                    key={index}
                                    className=" flex flex-wrap whitespace-nowrap border-[0.5px] border-black px-2 py-1 text-xs min-[375px]:text-sm"
                                  >
                                    {tag}
                                  </p>
                                ))}
                            </div>
                          )}
                        </li>
                      ))
                    ) : (
                      <div className="flex h-[500px] items-center justify-center bg-[#F0F0F0] lg:w-auto">
                        <p className="font-bold uppercase text-yrgo-red">
                          Inga träffar...
                        </p>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
