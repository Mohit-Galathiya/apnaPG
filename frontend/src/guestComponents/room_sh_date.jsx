import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./room_sh_date.css";

const RoomBookingPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [roomDetails, setRoomDetails] = useState({
    roomNo: '102',
    roomFor: 'Boys',
    description: '102 is shared with 3 beds and 3 lockers for personal use.',
    price: 9999,
    beds: ['Bed 1', 'Bed 2', 'Bed 3'],
  });
  const navigate = useNavigate();

  // Fetch property details based on property ID
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/getPropertyById/${id}`);
        const result = await response.json();
        if (response.ok) {
          setProperty(result.property);
        } else {
          console.error("Failed to fetch property:", result.message);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div className="loading">Loading property details...</div>;
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Room Booking Page</h2>

        <div className="property-details">
          <img
            src={`http://localhost:5000/uploads/${property.image}`}
            alt="Property"
            className="property-img"
          />

          <div className="details">
            <h3 className="property-name">{property.name}</h3>
            <p className="property-desc">
              {property.description}
            </p>
            <p className="location">
              <img src="/image/hotel.png" width="25" height="25" alt="" /> {property.location}
            </p>
            <p className="address">
              <strong>Property Address:</strong> {property.address}
            </p>
          </div>
        </div>

        <div className="room_details">
          <div className="room-info">
            <h3>Room No: {roomDetails.roomNo} ({roomDetails.roomFor} Room)</h3>
            <p><strong>Description:</strong> {roomDetails.description}</p>
            <p><strong>Room Price:</strong> ₹{roomDetails.price}</p>

            <div className="form-group">
              <label><strong>Shared Bed:</strong></label>
              <select>
                <option>Select Bed</option>
                {roomDetails.beds.map((bed, index) => (
                  <option key={index}>{bed}</option>
                ))}
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
              <a className="btn book-room" href="/owner/wallet">Book Room</a>
              <button className="btn check-availability">Check Room Availability</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBookingPage;
