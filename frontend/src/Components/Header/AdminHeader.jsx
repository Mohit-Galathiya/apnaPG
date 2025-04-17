import React from 'react';
import logo from '/image/ApnaPG-removebg-preview.png'; // Adjust the path to your logo

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to right, #cbd5e1, #e2e8f0)',
        padding: '10px 40px',
        borderBottom: '1px solid #ccc',
        flexWrap: 'wrap',
      }}
    >
      {/* Logo + Label */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} alt="ApnaPG Logo" style={{ height: '50px' }} />
        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>APNAPG</span>
      </div>

      {/* Nav Links */}
      <nav
        style={{
          display: 'flex',
          gap: '50px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a href="/admin/home" style={linkStyle}><i className="fas fa-home"></i> Home</a>
        <a href="/admin/aboutus" style={linkStyle}><i className="fas fa-info-circle"></i> About Us</a>
        <a href="/admin/contact" style={linkStyle}><i className="fas fa-envelope"></i> Contact Us</a>
        <a href="/admin/location" style={linkStyle}><i className="fas fa-map-marker-alt"></i> Location</a>
        <a href="/admin/properties" style={linkStyle}><i className="fas fa-building"></i> Properties</a>
        <a href="/admin/booking" style={linkStyle}><i className="fas fa-calendar-check"></i> Booking</a>
        <a href="/login" style={linkStyle}><i className="fas fa-sign-out-alt"></i> Logout</a>
      </nav>
    </header>
  );
};

// Reusable link style
const linkStyle = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '16px',
};

export default Header;
