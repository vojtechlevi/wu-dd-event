import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "./client";

const test = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  async function addCountry() {
    const { error } = await supabase
      .from("countries")
      .insert({ name: "Denmark" });
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          name="fullName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form> */}
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
      <button onClick={addCountry}>add</button>
    </div>
  );
};

export default test;
