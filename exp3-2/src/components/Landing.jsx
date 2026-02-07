import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Hello, I'm <span>Agampal Singh</span></h1>
      <p>
        A passionate Computer Science student building modern web
        applications using React and Java.
      </p>
    </div>
  );
}

export default Landing;
