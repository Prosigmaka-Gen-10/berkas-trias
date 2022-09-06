import React from "react";
import { NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Menu</NavLink>
      <span> | </span>
      <NavLink to="jenis">Jenis</NavLink>
    </nav>

  );
};
export default Navbar
