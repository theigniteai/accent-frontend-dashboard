import React, { useState } from "react";

const Signup = () => {
  const [msg, setMsg] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    setMsg("✅ (bypassed) Signed up");
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900 text-white">
      <form onSubmit={handleSignup} className="bg-white text-black rounded-xl shadow-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input placeholder="Name" required className="w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Email" required className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" required className="w-full p-2 mb-6 border rounded" />
        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
          Sign Up
        </button>
        {msg && <p className="text-center text-green-600 mt-4">{msg}</p>}
      </form>
    </div>
  );
};

export default Signup;
