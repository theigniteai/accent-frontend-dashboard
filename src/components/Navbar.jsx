import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
    <h1 className="font-bold text-xl">AccentShift</h1>
    <div className="space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-purple-600 font-medium" : "text-gray-600 hover:text-purple-600"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-purple-600 font-medium" : "text-gray-600 hover:text-purple-600"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-purple-600 font-medium" : "text-gray-600 hover:text-purple-600"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          isActive ? "text-purple-600 font-medium" : "text-gray-600 hover:text-purple-600"
        }
      >
        Sign Up
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
