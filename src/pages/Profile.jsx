import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Failed to load profile", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <div className="text-center mt-20 text-lg">Loading profile...</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-600">Name</span>
          <span>{user.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-600">Email</span>
          <span>{user.email}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-600">Subscription</span>
          <span>{user.subscription}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-600">AI Assistant</span>
          <span className={`px-2 py-1 rounded text-white ${user.assistantEnabled ? "bg-green-500" : "bg-red-500"}`}>
            {user.assistantEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;