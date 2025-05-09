// Home with real layout and pricing sections
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AccentShift</h1>
        <nav>
          <Link to="/login" className="px-4 py-2 border rounded hover:bg-white hover:text-black transition">Login</Link>
        </nav>
      </header>

      <motion.section
        className="text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-4">Real-Time AI Accent Changer</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Instantly convert your voice to US, UK, or Australian accent during calls and meetings. Powered by AI.
        </p>
        <Link to="/signup">
          <button className="px-6 py-3 bg-white text-purple-800 font-semibold rounded hover:shadow-xl transition">
            Get Started Free
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
