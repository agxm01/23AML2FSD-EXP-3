import React from "react";
import profilePic from "../assets/Profile-img.png"; // optional image

function Profile() {
  return (
    <>
      <h2>Profile</h2>

      <div className="profile-section">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-img"
        />

        <div className="profile-info">
          <h3>Agampal Singh</h3>
          <p>B.E. Computer Science (AI & ML)</p>
          <h4>Projects</h4>
          <ul>
            <li>Expense Tracker Application</li>
            <li>Appointment Booking System</li>
            <li>File Hider Using Java</li>
            <li>eClinic Website</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
