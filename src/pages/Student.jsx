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

        <p className="mt-8 cursor-pointer text-sm uppercase underline">
          filtrera listan
        </p>
        <div className="flex w-full flex-col">
          <h2 className="my-2 text-2xl font-extrabold uppercase text-yrgo-red">
            Hitta din Lia
          </h2>
          <p className="">
            Här kan du läsa mer om olika företag som söker praktikanter. Använd
            filtrera-funktionen om du är intresserad av något speciellt!
          </p>
        </div>
        <div className=" bg-red no-scrollbar my-4 overflow-scroll scroll-smooth">
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
