import React from "react";
import "./profile.css";
import logo from "/image/ApnaPG-removebg-preview.png";

const Profile = () => {
  const handleAddProofClick = () => {
    window.location.href = "/owner/detail"; 
  };

  return (
    <div style={{marginTop:"3rem"}}>

      <div className="profile-container">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-card">
          <div className="profile-form">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" value="Sagar" readOnly />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" value="Maru" readOnly />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" value="smaru254@rku.ac.in" readOnly />
            </div>
            <div className="input-group">
              <label>Wallet Amount</label>
              <input type="text" value="0" readOnly />
            </div>
            <div className="input-group">
              <label>Contact</label>
              <input type="text" value="8980366196" readOnly />
            </div>
            <div className="input-group">
              <label>Address</label>
              <input type="text" value="Mumbai, 12345" readOnly />
            </div>
          </div>

          <div className="profile-buttons">
            <button className="btn add-proof" onClick={handleAddProofClick}>
              Add Proof Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
