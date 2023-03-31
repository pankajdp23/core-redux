import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul className="menu-items">
      <li>
        <NavLink to="/">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/albums">Albums</NavLink>
      </li>
    </ul>
  );
};

export default Header;
