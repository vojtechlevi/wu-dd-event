import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Menu } from "lucide-react";

import UserContext from "../UserContext";
import yrgo from "../assets/yrgo.png";

const Student = () => {
  const { user, setUser } = useContext(UserContext);
  const name =
    user && user.user.user_metadata ? user.user.user_metadata.full_name : "";

  return (
    <section>
      <div>
        <img src={yrgo} alt="" />
        <Menu />
      </div>
      <h1>Welcome to the Student Dashboard</h1>
      <p>Logged in as: {name}</p>
      <Link to="/">
        <button onClick={() => setUser(null)}>Logga ut</button>
      </Link>
    </section>
  );
};

export default Student;
