<<<<<<< HEAD
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
=======
import React from 'react';
import './pro_view.css';

const PendingProperties = () => {
  return (
    <>
      

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
            <tr>
              <td><img src="https://s3-alpha-sig.figma.com/img/fef3/7797/f4dbd7398f6a26eaf59891119f3f1078?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5Tky8IRThe-vejkyV4lTuIb2nLZ~HNDQERmsN6-KVuLVEobEkY21VDsCAGAfcbFTfdZn4cMyEIE3BI49NXHWUUNyA3brUGogM2z9bRio0mrugh97CfcM6RUY6UgrANLnrqta1RNiG19yvqP4vsLzFwkS5uMCtwPPWmivDA0QEvRS-xScrP0n~1tw0kKDX-Gbk0OnesVfU00IgtkeA-Z0UZsWNGUiidkRBkLVAwGt5kqWqvDLabj3GCAr0g88Q8XRmUcZprqpeqa-Soo~dp~3uAPEuuubrt7zsQzEZIFbZnGJs3q1-fF3aTXDGcl~JZkP6ltn6AaSHlROtjvAGpRlw__" alt="Property" /></td>
              <td>Royal PG</td>
              <td>Royal PG Lives is the best PG in Pune City with all royal facilities</td>
              <td>Pune</td>
              <td>Pune City 12345</td>
              <td>
                <a href="/unknown/add_room"><button className="add-room">Add Room</button></a>
                <a href="/unknown/add_face"><button className="add-facility">Add Facility</button></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PendingProperties;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
