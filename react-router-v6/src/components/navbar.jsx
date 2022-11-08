import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
          end to="/"
        >
          {({isActive}) => {
            return isActive ? "Active Home" : "Home";
            
          }}
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
          to="/posts"
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
          to="/admin"
        >
          Admin
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
