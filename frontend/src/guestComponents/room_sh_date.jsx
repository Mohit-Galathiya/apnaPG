import React from "react";
import "./room_sh_date.css";

const RoomBookingPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">Room Booking Page</h2>

        <div className="property-details">
          <img src="/image/search3.jpg" alt="Property" className="property-img" />

          <div className="details">
            <h3 className="property-name">Prime Comfort Hub</h3>
            <p className="property-desc">
              Experience modern, affordable, and comfortable living tailored for urban professionals and students.
              Stay Smart Space PG offers a perfect blend of convenience, security, and community, ensuring you feel right at home.
            </p>
            <p className="location"><img src="/image/hotel.png" width="25" height="25" alt="" /> Mumbai</p>
            <p className="address"><strong>Property Address:</strong> Demo Street, Thane West, Pincode 123456</p>

            <div className="owner-info">
              <p><strong>Owner Name:</strong> Sagar</p>
              <p><strong>Last Name:</strong> Maru</p>
              <p><strong>Contact No.:</strong> 8980366196</p>
              <p><strong>Email Id:</strong> smaru254@rku.ac.in</p>
            </div>
          </div>
        </div>

        <div className="room_details">
          <div className="room-info">
            <h3>Room No: 102 (Shared Room)</h3>
            <p><strong>Room For:</strong> Boys</p>
            <p><strong>Description:</strong> 102 is shared with 3 beds and 3 lockers for personal use.</p>
            <p><strong>Room Price:</strong> 9999</p>

            <div className="form-group">
              <label><strong>Shared Bed:</strong></label>
              <select>
                <option>Select Bed</option>
                <option>Bed 1</option>
                <option>Bed 2</option>
                <option>Bed 3</option>
              </select>
            </div>
          </div>

          <div className="booking-details">
            <h3>Booking Detail</h3>
            <div className="booking-form">
              {["Start Month", "Start Year", "End Month", "End Year"].map((label, index) => (
                <div className="form-group" key={index}>
                  <label>{label}</label>
                  <select>
                    {label.includes("Month") ? (
                      <>
                        <option>Select Month</option>
                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(month => (
                          <option key={month}>{month}</option>
                        ))}
                      </>
                    ) : (
                      <>
                        <option>Select Year</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </>
                    )}
                  </select>
                </div>
              ))}
            </div>

            <div className="buttons">
              <button className="btn book-room">Book Room</button>
              <button className="btn check-availability">Check Room Availability</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBookingPage;
