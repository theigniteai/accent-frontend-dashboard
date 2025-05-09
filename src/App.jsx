import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import PrivateRoute from "./routes/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => (
  <Router>
    <Navbar />

    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* All dashboard routes under one layout */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      />
    </Routes>

    <Footer />
  </Router>
);

export default App;
