// Login page with useState, useEffect, form
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      setMessage("✅ Login successful!");
      console.log(res.data);

      // Store token if returned
      if (res.data.token) {
        localStorage.setItem("accentshift_token", res.data.token);
      }

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setMessage("❌ Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login to AccentShift</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {message && <p className="text-center text-sm text-red-600">{message}</p>}
      </form>
    </div>
  );
};

export default Login;

  );
};

export default Login;
