<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './owner_login.css'; // Save your CSS in this file

const LoginPage = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="/owner/images/ApnaPG-removebg-preview.png" className="landing_logo" alt="APNAPG Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/home"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link></li>
            <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact Us</Link></li>
            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
            <li><Link to="/guest"><i className="fas fa-user"></i> Guest</Link></li>
            <li><Link to="/owner"><i className="fas fa-user-tie"></i> Owner</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="login-box">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Your Name" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Your Email" />

          <Link to="/add_property">
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
import './owner_login.css'; // Save your CSS in this file

const LoginPage = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="/owner/images/ApnaPG-removebg-preview.png" className="landing_logo" alt="APNAPG Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/home"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link></li>
            <li><Link to="/contact"><i className="fas fa-envelope"></i> Contact Us</Link></li>
            <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
            <li><Link to="/guest"><i className="fas fa-user"></i> Guest</Link></li>
            <li><Link to="/owner"><i className="fas fa-user-tie"></i> Owner</Link></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="login-box">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Your Name" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Your Email" />

          <Link to="/add_property">
            <button className="submit-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
