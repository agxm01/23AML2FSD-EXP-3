import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>My Portfolio SPA</h1>

      <div className="btn-group">
        <Link to="/"><button className="btn">Dashboard</button></Link>
        <Link to="/profile"><button className="btn">Profile</button></Link>
      </div>

      <div className="page-box">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
