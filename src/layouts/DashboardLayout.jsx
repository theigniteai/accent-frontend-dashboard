import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { path: "",           label: "Overview" },
  { path: "profile",    label: "Profile" },
  { path: "settings",   label: "Settings" },
  { path: "billing",    label: "Billing" },
  { path: "subscription", label: "Subscription" },
  { path: "pricing",    label: "Pricing" },
];

const DashboardLayout = () => (
  <div className="flex min-h-screen">
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl mb-8">Dashboard</h2>
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 bg-gray-700 rounded font-medium"
                : "block px-4 py-2 hover:bg-gray-700 rounded"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    <main className="flex-1 p-10 bg-gray-100">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
