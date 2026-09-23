import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between bg-gray-600 px-10 py-3">
      <h1>Header</h1>
      <ul className="flex gap-3">
        <li>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "undeline" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="github"
            className={({ isActive }) => (isActive ? "undeline" : "")}
          >
            Github
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
