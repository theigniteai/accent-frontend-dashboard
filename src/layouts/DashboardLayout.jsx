// src/layouts/DashboardLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 min-h-screen text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" className="hover:text-purple-400">Overview</Link>
          <Link to="/dashboard/profile" className="hover:text-purple-400">Profile</Link>
          <Link to="/dashboard/settings" className="hover:text-purple-400">Settings</Link>
          <Link to="/dashboard/billing" className="hover:text-purple-400">Billing</Link>
          <Link to="/dashboard/subscription" className="hover:text-purple-400">Subscription</Link>
          <Link to="/dashboard/pricing" className="hover:text-purple-400">Pricing</Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet /> {/* This will render the Dashboard content */}
      </main>
    </div>
  );
};

export default DashboardLayout;
