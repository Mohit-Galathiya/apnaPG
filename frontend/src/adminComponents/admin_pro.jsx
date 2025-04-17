import React from 'react';
import './admin_pro.css';

const PendingProperties = () => {
  return (
    <div>

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
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://s3-alpha-sig.figma.com/img/fef3/7797/f4dbd7398f6a26eaf59891119f3f1078?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5Tky8IRThe-vejkyV4lTuIb2nLZ~HNDQERmsN6-KVuLVEobEkY21VDsCAGAfcbFTfdZn4cMyEIE3BI49NXHWUUNyA3brUGogM2z9bRio0mrugh97CfcM6RUY6UgrANLnrqta1RNiG19yvqP4vsLzFwkS5uMCtwPPWmivDA0QEvRS-xScrP0n~1tw0kKDX-Gbk0OnesVfU00IgtkeA-Z0UZsWNGUiidkRBkLVAwGt5kqWqvDLabj3GCAr0g88Q8XRmUcZprqpeqa-Soo~dp~3uAPEuuubrt7zsQzEZIFbZnGJs3q1-fF3aTXDGcl~JZkP6ltn6AaSHlROtjvAGpRlw__"
                  alt="Property"
                  className="property-img"
                />
              </td>
              <td>Royal PG</td>
              <td>Royal PG Lives is the best PG in Pune City with all royal facilities</td>
              <td>Pune</td>
              <td>Pune City 12345</td>
              <td>Meet Vaishnav</td>
              <td>
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingProperties;
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
