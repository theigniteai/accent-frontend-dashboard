import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 flex-1 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
