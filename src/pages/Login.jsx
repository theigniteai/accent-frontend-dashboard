import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Optional fake request to prevent crash
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      // Direct access to dashboard
      localStorage.setItem("accentshift_token", "test-token");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Temporary error ignored. Redirecting to dashboard...");
      localStorage.setItem("accentshift_token", "test-token");
      window.location.href = "/dashboard";
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900 text-white">
      <form onSubmit={handleLogin} className="bg-white text-black rounded-xl shadow-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Temporary Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-6 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          {loading ? "Logging in..." : "Login to Dashboard"}
        </button>
      </form>
    </div>
  );
};

export default Login;
