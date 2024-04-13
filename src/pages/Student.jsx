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
        return internTypeFilter.every((internType) =>
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
        className={`h-screen w-full select-none ${filterList || selectedCompany ? "hidden" : ""}`}
      >
        <div className=" h-[50px] w-full bg-yrgo-blue"></div>
        <div className=" mx-4 mb-8 flex flex-col">
          <div className="flex h-[43px] items-center justify-between border-x-2 border-b-2 border-yrgo-blue px-2">
            <p className="font-extrabold uppercase text-yrgo-blue ">
              yrgo event 24 april
            </p>
            {menu ? (
              <Menu onClick={handleMenu} className="cursor-pointer" />
            ) : (
              <X onClick={handleMenu} className="cursor-pointer" />
            )}
          </div>
          {!menu ? (
            <div className="flex w-full flex-col gap-4 border-x-2 border-b-2 border-yrgo-blue px-4 py-4 text-right">
              <p className="cursor-pointer">Sparade Favoriter</p>
              <Link to="/" className="cursor-pointer">
                <button onClick={signOut}>Logga ut</button>
              </Link>
            </div>
          ) : (
            ""
          )}

          <p
            onClick={() => setFilterList(true)}
            className="mt-8 cursor-pointer text-sm uppercase underline"
          >
            filtrera listan
          </p>
          <div className="flex w-full flex-col">
            <h2 className="my-2 text-2xl font-extrabold uppercase text-yrgo-red">
              Hitta din Lia
            </h2>
            <p className="">
              Här kan du läsa mer om olika företag som söker praktikanter.
              Använd filtrera-funktionen om du är intresserad av något
              speciellt!
            </p>
          </div>
          <div className=" bg-red no-scrollbar my-4 overflow-scroll scroll-smooth">
            <ul>
              {companies &&
                companies.length > 0 &&
                companies.map((company) => (
                  <li
                    key={company.id}
                    className="mt-4 cursor-pointer bg-[#F0F0F0] p-3"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <h3 className="mb-2 flex items-center justify-between text-xl font-bold">
                      {company && company.contact?.name}
                      <Heart
                        size={20}
                        onClick={(event) => {
                          event.stopPropagation();
                          console.log("Heart clicked");

                          // Add any additional logic for when the Heart is clicked
                        }} /* fill="red" stroke="black"  */
                      />
                    </h3>
                    <div className="flex items-center gap-1 min-[375px]:gap-2">
                      <p className=" text-xs min-[375px]:text-sm">Söker: </p>
                      {company.internType && company.internType.length > 0 ? (
                        company.internType.map((type) => (
                          <div key={type}>
                            <p className="border-[0.5px] border-black px-2 py-1 text-xs min-[375px]:text-sm">
                              {type}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs min-[375px]:text-sm">Söker ej</p>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
