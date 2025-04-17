<<<<<<< HEAD
import React from 'react';
import logo from '/image/ApnaPG-removebg-preview.png'; // Adjust path if needed

const Header = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    background: "white",
    borderBottom: "1px solid black"
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    gap: "40px",
    alignItems: "center",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "16px"
  };

  return (
    <header style={navStyle}>
      <div style={logoStyle}>
        <img src={logo} alt="APNAPG Logo" style={{ height: "50px" }} />
        <span style={{ fontWeight: "bold" }}>APNAPG</span>
      </div>
      <ul style={navLinksStyle}>
        <li><a href="#" style={linkStyle}><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-info-circle"></i> About Us</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-envelope"></i> Contact Us</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-calendar-alt"></i> Booking</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-wallet"></i></a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-user"></i></a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </header>
  );
};

export default Header;
=======
import React from 'react';
import logo from '/image/ApnaPG-removebg-preview.png'; // Adjust path if needed

const Header = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    background: "white",
    borderBottom: "1px solid black"
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    gap: "40px",
    alignItems: "center",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "16px"
  };

  return (
    <header style={navStyle}>
      <div style={logoStyle}>
        <img src={logo} alt="APNAPG Logo" style={{ height: "50px" }} />
        <span style={{ fontWeight: "bold" }}>APNAPG</span>
      </div>
      <ul style={navLinksStyle}>
        <li><a href="#" style={linkStyle}><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-info-circle"></i> About Us</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-envelope"></i> Contact Us</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-calendar-alt"></i> Booking</a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-wallet"></i></a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-user"></i></a></li>
        <li><a href="#" style={linkStyle}><i className="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </header>
  );
};

export default Header;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
