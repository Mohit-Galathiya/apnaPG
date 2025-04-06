import React from 'react';
import './addhar.css';
import adharImage from '/image/addhar.png'; // or use public path: "/images/adhar.png"

const Profile = () => {
  return (
    <>

      <div className="profile-container" style={{marginTop:"6rem"}}>
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-card">
          <div className="profile-row">
            <div className="profile-group">
              <label>First Name</label>
              <input type="text" value="Sagar" readOnly />
            </div>
            <div className="profile-group">
              <label>Last Name</label>
              <input type="text" value="Maru" readOnly />
            </div>
            <div className="profile-group">
              <label>Profession</label>
              <input type="text" value="Business" readOnly />
            </div>
          </div>

          <div className="profile-row">
            <div className="profile-group">
              <label>Email</label>
              <input type="text" value="smaru254@rku.ac.in" readOnly />
            </div>
            <div className="profile-group">
              <label>Wallet Amount</label>
              <input type="text" value="0" readOnly />
            </div>
            <div className="profile-group">
              <label>Age</label>
              <input type="text" value="25" readOnly />
            </div>
          </div>

          <div className="profile-row">
            <div className="profile-group">
              <label>Contact</label>
              <input type="text" value="8980366196" readOnly />
            </div>
            <div className="profile-group">
              <label>Address</label>
              <input type="text" value="Mumbai, 12345" readOnly />
            </div>
            <div className="profile-group">
              <label>Role</label>
              <input type="text" value="Owner" readOnly />
            </div>
          </div>

          <h3 className="sub-title">User Government Proof Details</h3>
          <div className="proof-container">
            <img src={adharImage} alt="Government Proof" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
