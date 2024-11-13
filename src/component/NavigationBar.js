import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
const NavigationBar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
             to="/product"
             className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
             >Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
