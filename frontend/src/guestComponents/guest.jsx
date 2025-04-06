import React from 'react';
import './guset.css';
import logo from '/public/image/ApnaPG-removebg-preview.png';
import Header from "../Components/Header/Header";

const GuestRegister = () => {
  return (
    <div>
      <div className="main" style={{marginTop:"5rem"}}>
        <div className="register-container">
          <h2 className="register-title">Register Guest</h2>
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder="Enter Your First Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" placeholder="Enter Your Last Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter Your Password" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input type="tel" id="contact" name="contact" placeholder="Enter Your Contact No." required />
              </div>
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" placeholder="Enter Your Address" required />
              </div>
              <div className="form-group">
                <center>
                  <a href="/owner/home" type="submit" className="register-btn">Register</a>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestRegister;
