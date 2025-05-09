import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        name,
        email,
        password,
      });

      if (res.data.success) {
        setMessage("✅ Signup successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        setMessage("❌ " + res.data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Signup failed: " + (error.response?.data?.message || "Server error"));
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900 text-white">
      <form onSubmit={handleSignup} className="bg-white text-black rounded-xl shadow-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
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
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {message && (
          <p className="text-center text-sm mt-4 text-red-600">{message}</p>
        )}

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-700 underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
