import React, { useEffect, useState } from 'react';
import './admin_pro.css';

const PendingProperties = () => {
  const [properties, setProperties] = useState([]);

  // Fetch pending properties
  useEffect(() => {
    fetch('http://localhost:5000/api/getPendingProperties')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Properties:', data.properties);
        setProperties(data.properties);
      })
      .catch(err => {
        console.error('Error fetching properties:', err);
      });
  }, []);

  // Remove a property from UI
  const removePropertyFromUI = (id) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="table-container">
      <h2 className="table-header">Pending Properties</h2>

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
                    src={`http://localhost:5000${property.imageUrl}`}
                    alt="Property"
                    className="property-img"
                    style={{ width: '100px', height: 'auto', borderRadius: '8px' }}
                  />
                </td>
                <td>{property.name}</td>
                <td>{property.description}</td>
                <td>{property.location}</td>
                <td>{property.address}</td>
                <td>
                  <button
                    className="approve-btn"
                    onClick={() => removePropertyFromUI(property.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => removePropertyFromUI(property.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No pending properties found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingProperties;
