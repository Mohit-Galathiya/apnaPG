<<<<<<< HEAD
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './romm_pr_date.css';
import logo from '/image/ApnaPG-removebg-preview.png';
import hotelIcon from '/image/hotel.png';
import propertyImage from '/image/search3.jpg';

const RoomBookingPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{marginTop:"4rem"}}>
      <div className="container">
        <h2 className="title">Room Booking Page</h2>

        <div className="property-details">
          <img src={propertyImage} alt="Property" className="property-img" />

          <div className="details">
            <h3 className="property-name">Prime Comfort Hub</h3>
            <p className="property-desc">
              Experience modern, affordable, and comfortable living tailored for urban professionals and students.
              Stay Smart Space PG offers a perfect blend of convenience, security, and community, ensuring you feel right at home.
            </p>
            <p className="location"><span><img src={hotelIcon} height="25" width="25" alt="Hotel Icon" /> Mumbai</span></p>
            <p className="address"><strong>Property Address:</strong> Demo Street, Thane West, Pincode 123456</p>

            <div className="owner-info">
              <p><strong>Owner Name:</strong> Sagar</p>
              <p><strong>Last Name:</strong> Maru</p>
              <p><strong>Contact No.:</strong> 8980366196</p>
              <p><strong>Email Id:</strong> smaru254@rku.ac.in</p>
            </div>
          </div>
        </div>

        <div className="room_details" style={{height:"6rem"}}>
          <div className="room-info">
            <h3>Room No: 101 (Private Room)</h3>
            <p><strong>Room For:</strong> Boys</p>
            <p><strong>Description:</strong> 101 is Private with TV and AC, and it has a locker.</p>
            <p><strong>Room Price:</strong> ₹9999</p>
          </div>

          <div className="booking-details">
            <h3>Booking Detail</h3>
            <div className="booking-form">
              {['Start', 'End'].map((label) => (
                <React.Fragment key={label}>
                  <div className="form-group">
                    <label>{label} Month</label>
                    <select>
                      <option>Select Month</option>
                      {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                      ].map(month => (
                        <option key={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{label} Year</label>
                    <select>
                      <option>Select Year</option>
                      {[2024, 2025, 2026].map(year => (
                        <option key={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="buttons">
              <button className="btn book-room" onClick={()=>navigate("/owner/wallet")}>Book Room</button>
              <button className="btn check-availability">Check Room Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingPage;
=======
import React from 'react';
import './romm_pr_date.css';
import logo from '/image/ApnaPG-removebg-preview.png';
import hotelIcon from '/image/hotel.png';
import propertyImage from '/image/search3.jpg';

const RoomBookingPage = () => {
  return (
    <div style={{marginTop:"4rem"}}>
      <div className="container">
        <h2 className="title">Room Booking Page</h2>

        <div className="property-details">
          <img src={propertyImage} alt="Property" className="property-img" />

          <div className="details">
            <h3 className="property-name">Prime Comfort Hub</h3>
            <p className="property-desc">
              Experience modern, affordable, and comfortable living tailored for urban professionals and students.
              Stay Smart Space PG offers a perfect blend of convenience, security, and community, ensuring you feel right at home.
            </p>
            <p className="location"><span><img src={hotelIcon} height="25" width="25" alt="Hotel Icon" /> Mumbai</span></p>
            <p className="address"><strong>Property Address:</strong> Demo Street, Thane West, Pincode 123456</p>

            <div className="owner-info">
              <p><strong>Owner Name:</strong> Sagar</p>
              <p><strong>Last Name:</strong> Maru</p>
              <p><strong>Contact No.:</strong> 8980366196</p>
              <p><strong>Email Id:</strong> smaru254@rku.ac.in</p>
            </div>
          </div>
        </div>

        <div className="room_details" style={{height:"6rem"}}>
          <div className="room-info">
            <h3>Room No: 101 (Private Room)</h3>
            <p><strong>Room For:</strong> Boys</p>
            <p><strong>Description:</strong> 101 is Private with TV and AC, and it has a locker.</p>
            <p><strong>Room Price:</strong> ₹9999</p>
          </div>

          <div className="booking-details">
            <h3>Booking Detail</h3>
            <div className="booking-form">
              {['Start', 'End'].map((label) => (
                <React.Fragment key={label}>
                  <div className="form-group">
                    <label>{label} Month</label>
                    <select>
                      <option>Select Month</option>
                      {[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                      ].map(month => (
                        <option key={month}>{month}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{label} Year</label>
                    <select>
                      <option>Select Year</option>
                      {[2024, 2025, 2026].map(year => (
                        <option key={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="buttons">
              <button className="btn book-room">Book Room</button>
              <button className="btn check-availability">Check Room Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingPage;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
