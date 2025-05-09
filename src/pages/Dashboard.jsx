import React from "react";
import AccentChangerClient from "../components/AccentChangerClient";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <AccentChangerClient />
    </div>
  );
};

export default Dashboard;
