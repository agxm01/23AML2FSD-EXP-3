import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>IIT - Routing</h1>

      <div className="btn-group">
        <Link to="/"><button className="btn">Home</button></Link>
        <Link to="/about"><button className="btn">About</button></Link>
        <Link to="/contact"><button className="btn">Contact</button></Link>
      </div>

      <div className="page-box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
