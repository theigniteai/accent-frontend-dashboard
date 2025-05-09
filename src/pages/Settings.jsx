import React, { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [assistantEnabled, setAssistantEnabled] = useState(false);
  const [voiceId, setVoiceId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAssistantEnabled(res.data.assistantEnabled);
        setVoiceId(res.data.voiceId || "");
      } catch (err) {
        console.error("Failed to load settings", err);
      }
    };
    fetchSettings();
  }, []);

  const saveSettings = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/users/settings`, {
        assistantEnabled,
        voiceId,
        password,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessage("Settings saved successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Failed to save settings.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Enable AI Assistant</span>
          <input
            type="checkbox"
            checked={assistantEnabled}
            onChange={() => setAssistantEnabled(!assistantEnabled)}
            className="toggle toggle-purple"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">ElevenLabs Voice ID</label>
          <input
            value={voiceId}
            onChange={(e) => setVoiceId(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="e.g. ab12cd34ef56"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="••••••••"
          />
        </div>
        {message && <p className="text-sm text-purple-600">{message}</p>}
        <button
          onClick={saveSettings}
          className="bg-purple-700 text-white px-5 py-2 rounded hover:bg-purple-800"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;