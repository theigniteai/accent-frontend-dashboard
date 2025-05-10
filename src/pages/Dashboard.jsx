// src/pages/Dashboard.jsx
import React from "react";
import AccentChangerClient from "../components/AccentChanger";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Welcome to AccentShift</h1>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Live Accent Changer</h2>
        <AccentChanger />
      </div>
    </div>
  );
};

export default Dashboard;
