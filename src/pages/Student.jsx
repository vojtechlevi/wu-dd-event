import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

import { supabase } from "../client";

import UserContext from "../UserContext";
import yrgo from "../assets/yrgo.png";

const Student = () => {
  const { user } = useContext(UserContext);
  const [menu, setMenu] = useState(true);
  const [companies, setCompanies] = useState([]);
  // const name = user && user.user.user_metadata ? user.user.user_metadata.full_name : ""; //email
  const name = user.user_metadata.user_name; //github - figma

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select();
    setCompanies(data);
  }
  console.log(companies);

  function handleMenu() {
    setMenu(!menu);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  console.log(user.user_metadata.user_name);
  console.log(companies.internType);

  return (
    <section className="px-4">
      <div className="w-full h-12 flex justify-between items-center">
        <img src={yrgo} alt="yrgo-logo" />
        {menu ? (
          <Menu onClick={handleMenu} className="cursor-pointer" />
        ) : (
          <X onClick={handleMenu} className="cursor-pointer" />
        )}
      </div>
      {!menu ? (
        <div className="text-right w-full mb-4 px-8">
          <p className="cursor-pointer">Sparade Favoriter</p>
          <Link to="/" className="cursor-pointer">
            <button onClick={signOut}>Logga ut</button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div>
        <h1>Inloggad som: {name}</h1>
        <div className="flex gap-4 mt-4">
          <input
            type="text"
            name="search"
            placeholder="Sök"
            className="bg-[#DEDEDE] rounded-lg p-2 w-full"
          />
          <button className="border border-black text-lg rounded-[32px] px-4 py-2">
            Sök
          </button>
        </div>
        <p className="uppercase underline mt-2 pl-2 text-xs cursor-pointer">
          filtrera sökning
        </p>
      </div>
      <div className="mt-4 border-t">
        <ul>
          {companies.map((company) => (
            <li key={company.id} className="mt-4">
              <h3 className="text-lg flex justify-between items-center mb-2">
                {company.name}
                <Heart size={16} /* fill="red" stroke="black"  */ />
              </h3>
              {company && company.internType.length > 0 ? (
                Array.isArray(company.internType) &&
                company.internType.length > 0 ? (
                  <div className="flex items-center gap-2">
                    <p className=" text-xs">Vi söker:</p>
                    {company.internType.map((type, index) => (
                      <p
                        key={index}
                        className="border px-2 py-1 rounded-lg text-xs"
                      >
                        {type}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <p className="mr-2 text-xs">Vi söker:</p>
                    <p className="border px-2 py-1 rounded-lg text-xs">
                      {company.internType}
                    </p>
                  </div>
                )
              ) : (
                <p className="text-xs">Söker ej</p>
              )}
              <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Student;
