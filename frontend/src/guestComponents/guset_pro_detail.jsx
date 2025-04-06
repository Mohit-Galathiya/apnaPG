import React from 'react';
import './guset_pro_detail.css';
import { useNavigate } from 'react-router-dom';

const PropertyDetail = () => {
  const navigate = useNavigate();

  return (
    <div>

      <div className="container">
        <div className="property-container">
          <div className="left">
            <img src="/image/search3.jpg" alt="Property" />
          </div>
          <div className="right">
            <h2>Prime Comfort Hub</h2>
            <p>Experience modern, affordable, and comfortable living tailored for urban professionals and students.</p>
            <h3><img src="/image/hotel.png" height="25" width="25" alt="Hotel Icon" /> Mumbai</h3>
            <p><strong>Property Address:</strong> Demo Street Thane West</p>
            <p><strong>Pincode:</strong> 123456</p>

            <div className="owner-details">
              <h3>Owner Details</h3>
              <p><strong>Owner Name:</strong> Sagar Maru</p>
              <p><strong>Contact No:</strong> 8980366196</p>
              <p><strong>Email ID:</strong> smaru254@rku.ac.in</p>
            </div>

            <div className="facilities">
              <h3>Facilities</h3>
              <p><strong>Free Wifi:</strong> High-speed internet available</p>
              <p><strong>Swimming Pool:</strong> Well-maintained pool access</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Room Details</h2>
      <div className="rooms">
        <div className="room-card">
          <h3>Room No: 101</h3>
          <p><strong>Room For:</strong> Boys</p>
          <p><strong>Type:</strong> Private</p>
          <p><strong>Room Price:</strong> ₹9999</p>
          <button onClick={() => navigate('/owner/room_shared')}>View More</button>
        </div>
        <div className="room-card">
          <h3>Room No: 102</h3>
          <p><strong>Room For:</strong> Boys</p>
          <p><strong>Type:</strong> Shared</p>
          <p><strong>Room Price:</strong> ₹3000</p>
          <p><strong>Total Beds:</strong> 3</p>
          <button onClick={() => navigate('/owner/book_date')}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
