// Password reset flow
import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgot-password`, { email });
      setSent(true);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-900">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">Forgot Password</h2>

        {sent ? (
          <p className="text-green-600 text-center">Reset link sent! Check your email.</p>
        ) : (
          <>
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
