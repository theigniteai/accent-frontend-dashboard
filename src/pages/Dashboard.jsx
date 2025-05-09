// Dashboard with user info and accent controls
import React, { useState, useEffect } from "react";
import AccentSelector from "../components/AccentSelector";
import CallLogTable from "../components/CallLogTable";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // Simulated user data
    setUser({
      name: "John Doe",
      email: "john@example.com",
      subscription: "Pro",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-purple-800">
          Welcome, {user.name}
        </h1>
        <p className="text-gray-600 mb-8">Your current plan: {user.subscription}</p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Select Your Accent</h2>
          <AccentSelector />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Call History</h2>
          <CallLogTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
