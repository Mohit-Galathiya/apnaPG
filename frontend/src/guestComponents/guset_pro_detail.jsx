import React, { useEffect, useState } from 'react';
import './guset_pro_detail.css';
import { useParams, useNavigate } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();

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
    <div className="property-page">
      {/* Property Section */}
      <div className="container">
        <div className="property-container">
          <div className="left">
            <img src={`http://localhost:5000/uploads/${property.image}`} alt="Property" className="property-img" />
          </div>
          <div className="right">
            <h2 className="property-title">{property.name}</h2>
            <p className="property-desc">{property.description}</p>
            <h3 className="location-line">
              <img src="/image/hotel.png" height="25" width="25" alt="Hotel Icon" style={{ marginRight: '8px' }} />
              {property.location}
            </h3>
            <p className="property-address"><strong>Address:</strong> {property.address}</p>
            <p className="property-date"><strong>Posted On:</strong> {new Date(property.created_at).toLocaleDateString()}</p>

            <div className="facilities">
              <h3>Facilities</h3>
              <ul>
                <li><strong>Free Wifi:</strong> Yes</li>
                <li><strong>Swimming Pool:</strong> Yes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Room Section */}
      <h2 className="room-heading">Room Details</h2>
      <div className="rooms">
        <div className="room-card">
          <h3>Room No: 101</h3>
          <p><strong>Room For:</strong> Boys</p>
          <p><strong>Type:</strong> Private</p>
          <p><strong>Room Price:</strong> ₹9999</p>
          <button className="room-btn" onClick={() => navigate('/owner/room_shared')}>View More</button>
        </div>
        <div className="room-card">
          <h3>Room No: 102</h3>
          <p><strong>Room For:</strong> Boys</p>
          <p><strong>Type:</strong> Shared</p>
          <p><strong>Room Price:</strong> ₹3000</p>
          <p><strong>Total Beds:</strong> 3</p>
          <button className="room-btn" onClick={() => navigate(`/owner/book_date/${id}`)}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
