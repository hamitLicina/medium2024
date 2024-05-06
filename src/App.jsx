import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Dashboard from "./components/Dashboard/Dashboard"
import Profile from "./components/Profile/Profile"
import Settings from "./components/Settings/Settings"



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
