import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

import { supabase } from "../client";
import UserContext from "../UserContext";
import CompanyDetails from "./CompanyDetails";

const Student = () => {
  const { setUser } = useContext(UserContext);
  const [menu, setMenu] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select();
    setCompanies(data);
  }
  function handleMenu() {
    setMenu(!menu);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  }

  return selectedCompany ? (
    <CompanyDetails
      details={selectedCompany}
      setSelectedCompany={setSelectedCompany}
    />
  ) : (
    <section className="h-screen w-full select-none">
      <div className=" bg-yrgo-blue h-[50px] w-full"></div>
      <div className=" mx-4 mb-8 flex flex-col">
        <div className="border-yrgo-blue flex h-[43px] items-center justify-between border-x-2 border-b-2 px-2">
          <p className="text-yrgo-blue font-extrabold uppercase ">
            yrgo event 24 april
          </p>
          {menu ? (
            <Menu onClick={handleMenu} className="cursor-pointer" />
          ) : (
            <X onClick={handleMenu} className="cursor-pointer" />
          )}
        </div>
        {!menu ? (
          <div className="border-yrgo-blue  w-full border-x-2 border-b-2 px-4 text-right">
            <p className="cursor-pointer">Sparade Favoriter</p>
            <Link to="/" className="cursor-pointer">
              <button onClick={signOut}>Logga ut</button>
            </Link>
          </div>
        ) : (
          ""
        )}

        <p className="mt-2 cursor-pointer pl-2 text-xs uppercase underline">
          filtrera listan
        </p>
        <div className=" bg-red no-scrollbar my-4 max-h-[620px] overflow-scroll scroll-smooth">
          <ul>
            {companies.map((company) => (
              <li
                key={company.id}
                className="mt-4 cursor-pointer bg-[#F0F0F0] p-3"
                onClick={() => setSelectedCompany(company)}
              >
                <h3 className="mb-2 flex items-center justify-between text-xl font-bold">
                  {company.contact[0].name}
                  <Heart
                    size={20}
                    onClick={(event) => {
                      event.stopPropagation();
                      console.log("Heart clicked");

                      // Add any additional logic for when the Heart is clicked
                    }} /* fill="red" stroke="black"  */
                  />
                </h3>
                {company.internTypeCount !== null &&
                Object.values(company.internTypeCount[0]).some(
                  (count) => count > 0,
                ) ? (
                  <div className="flex items-center gap-1 min-[375px]:gap-2">
                    <p className=" text-xs min-[375px]:text-sm">Söker: </p>
                    {company.internTypeCount[0] &&
                      Object.entries(company.internTypeCount[0]).map(
                        ([type, count], index) => (
                          <div key={index}>
                            {count > 0 ? (
                              <p className=" border-[0.5px] border-black px-2 py-1 text-xs min-[375px]:text-sm">
                                {type}
                              </p>
                            ) : null}
                          </div>
                        ),
                      )}
                  </div>
                ) : (
                  <p className="text-xs min-[375px]:text-sm">Söker ej</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Student;
