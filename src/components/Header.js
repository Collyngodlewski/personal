import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Styling/Styling";
export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/" >
          Collyn
        </NavLink>
        <NavLink to="/about" >
          About
        </NavLink>
        <NavLink to="/projects" >
          My Work
        </NavLink>
        <NavLink to="/contact" >
          Contact
        </NavLink>
      </nav>
    </StyledHeader>
  );
}
