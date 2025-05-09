import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Accent Changer", path: "/dashboard/accent" },
    { name: "AI Assistant", path: "/dashboard/assistant" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Settings", path: "/dashboard/settings" },
    { name: "Billing", path: "/dashboard/billing" },
    { name: "Subscription", path: "/dashboard/subscription" },
  ];

  return (
    <aside className="w-64 h-screen p-6 bg-gray-50 border-r fixed top-0 left-0">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">AccentShift</h2>
      <nav className="space-y-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`block px-4 py-2 rounded transition ${
              location.pathname === item.path
                ? "bg-purple-700 text-white"
                : "text-gray-700 hover:bg-purple-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
