// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `block py-2 px-4 rounded hover:bg-purple-800 ${
      isActive ? "bg-purple-700 text-white" : "text-gray-300"
    }`;

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        <NavLink to="/dashboard" end className={linkClasses}>
          Overview
        </NavLink>
        <NavLink to="/dashboard/profile" className={linkClasses}>
          Profile
        </NavLink>
        <NavLink to="/dashboard/settings" className={linkClasses}>
          Settings
        </NavLink>
        <NavLink to="/dashboard/billing" className={linkClasses}>
          Billing
        </NavLink>
        <NavLink to="/dashboard/subscription" className={linkClasses}>
          Subscription
        </NavLink>
        <NavLink to="/dashboard/pricing" className={linkClasses}>
          Pricing
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
