import React from "react";
import logo from "/image/ApnaPG-removebg-preview.png"; // Adjust path if needed

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#fff",
        borderBottom: "1px solid black",
        boxSizing: "border-box",
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={logo} alt="APNAPG Logo" style={{ height: "50px" }} />
        <span style={{ fontWeight: "bold", fontSize: "12px" }}>APNAPG</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "60px", // spacing between items to match image
          }}
        >
          <li>
            <a href="/home" style={navLinkStyle}>
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="/about" style={navLinkStyle}>
              <i className="fas fa-info-circle"></i> About Us
            </a>
          </li>
          <li>
            <a href="/contact" style={navLinkStyle}>
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </li>
          <li>
            <a href="/owner/booking" style={navLinkStyle}>
              <i className="fas fa-calendar-check"></i> Booking
            </a>
          </li>
          <li>
            <a href="/owner/wallet" style={iconOnlyStyle}>
              <i className="fas fa-wallet"></i>
            </a>
          </li>
          <li>
            <a href="/owner/profile" style={iconOnlyStyle}>
              <i className="fas fa-user"></i>
            </a>
          </li>
          <li>
            <a href="/login" style={navLinkStyle}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Link with text and icon
const navLinkStyle = {
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
};

// Icon-only style
const iconOnlyStyle = {
  textDecoration: "none",
  color: "#000",
  fontSize: "18px",
};

export default Header;
