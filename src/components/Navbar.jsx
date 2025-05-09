// Real navigation bar component
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white text-black px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-xl font-bold text-purple-700">
        AccentShift
      </Link>

      <div className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-sm font-medium hover:text-purple-600">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="text-sm font-medium text-red-600 hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-purple-600 text-sm">
              Login
            </Link>
            <Link to="/signup" className="bg-purple-700 text-white px-4 py-2 rounded text-sm hover:bg-purple-800 transition">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
