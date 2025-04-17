<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './admin_login.css'; // Save your CSS in this file

const LoginPage = () => {
  return (
    <div>

      <div className="container">
        <div className="login-box">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Your Name" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Your Email" />

          <Link to="/admin/home">
            <button className="submit-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import './admin_login.css'; // Save your CSS in this file

const LoginPage = () => {
  return (
    <div>

      <div className="container">
        <div className="login-box">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Your Name" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Your Email" />

          <Link to="/admin/home">
            <button className="submit-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
