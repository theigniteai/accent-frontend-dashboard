// Signup page with OTP flow
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // For testing..

  await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
  name,
  email,
  password,
});

  
  // const sendOTP = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     await axios.post(`${import.meta.env.VITE_API_URL}/auth/send-otp`, {
  //       email: form.email,
  //     });
  //     setStep(2);
  //   } catch (err) {
  //     setError(err?.response?.data?.message || "Error sending OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        ...form,
      });
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-900">
      <form
        onSubmit={step === 1 ? sendOTP : handleSignup}
        className="bg-white text-black p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
          Sign Up
        </h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <label className="block font-semibold mb-1">OTP</label>
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
        >
          {loading
            ? "Processing..."
            : step === 1
            ? "Send OTP"
            : "Create Account"}
        </button>

        <p className="text-sm text-center mt-4">
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
