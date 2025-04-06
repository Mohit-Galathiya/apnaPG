import React from 'react';
import './guset_login.css';

const LoginGuest = () => {
  return (
    <div>
      <div className="container" style={{height:"fit-content",marginTop:"6rem"}}>
        <div className="login-box">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Your Name" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Your Email" />

          <a href="/admin/home">
            <button className="submit-btn">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginGuest;
