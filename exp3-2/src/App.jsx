import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>My Portfolio SPA</h1>

      <div className="page-box">
        <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
      </div>
    </div>
  );
}

export default App;
