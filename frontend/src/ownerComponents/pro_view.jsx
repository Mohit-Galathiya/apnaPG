import React, { useState, useEffect } from 'react';
import './pro_view.css';
const PendingProperties = () => {
  const [properties, setProperties] = useState([]);

  // Fetch the properties when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getPendingProperties');
        const result = await response.json();
        
        if (response.ok) {
          setProperties(result.properties);
           // Assuming 'properties' is an array in the response
        } else {
          console.error('Failed to fetch properties:', result.message);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="properties-container">
      <h2 className="section-header">Pending Properties</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.length > 0 ? (
            properties.map((property) => (
              <tr key={property.id}>
                <td>
                  <img
                    src={`http://localhost:5000${property.imageUrl}`} // Assuming 'imageUrl' is the image link from the API
                    alt="Property"
                    style={{ width: "100px", height: "100px" }} // Adjust size as necessary
                  />
                </td>
                <td>{property.name}</td>
                <td>{property.description}</td>
                <td>{property.location}</td>
                <td>{property.address}</td>
                <td>
                  <a href={`/unknown/add_room/${property.id}`}>
                    <button className="add-room">Add Room</button>
                  </a>
                  <a href={`/unknown/add_face/${property.id}`}>
                    <button className="add-facility">Add Facility</button>
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No pending properties found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingProperties;
