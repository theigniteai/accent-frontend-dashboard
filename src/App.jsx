import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Subscription from './pages/Subscription'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
