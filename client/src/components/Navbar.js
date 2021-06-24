import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {

  return (
    <nav className="Navbar">
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/shopping-list" exact>Shopping List</NavLink></li>
        <li><NavLink to="/login" exact>Login</NavLink></li>
      </ul>
    </nav>
  )

}

export default Navbar;