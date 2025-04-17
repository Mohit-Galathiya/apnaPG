import React, { useState } from 'react';
import './add_loc.css';

const AddLocation = () => {
  const [locationName, setLocationName] = useState('');
  const [locationDescription, setLocationDescription] = useState('');
  const [locations, setLocations] = useState([]);

  // Handle Add Location
  const handleAddLocation = async (e) => {
    e.preventDefault();

    // Prepare the location data to send to the API
    const newLocation = {
      name: locationName,
      description: locationDescription,
    };

    try {
      // Make an API call to add the location (replace with your actual API endpoint)
      const response = await fetch('http://localhost:5000/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocation),
      });

      if (response.ok) {
        // If the request is successful, show success alert
        alert('Location added successfully!');
        const data = await response.json();
        
        // Optionally, update the locations state with the newly added location
        setLocations((prevLocations) => [...prevLocations, data]);

        // Clear the form fields after adding
        setLocationName('');
        setLocationDescription('');
      } else {
        throw new Error('Failed to add location');
      }
    } catch (error) {
      // Show error alert if the API call fails
      alert('Error adding location: ' + error.message);
    }
  };

  return (
    <div>
      {/* Add Location Form */}
      <div className="location-container">
        <h2 className="form-title">Add Location</h2>

        <form onSubmit={handleAddLocation}>
          <label htmlFor="locationName">Location Name</label>
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder="Enter location name..."
          />

          <label htmlFor="locationDescription">Location Description</label>
          <textarea
            id="locationDescription"
            value={locationDescription}
            onChange={(e) => setLocationDescription(e.target.value)}
            placeholder="Enter location description"
          ></textarea>

          <div className="btn-group">
            <button type="submit" className="btn-primary">Add Location</button>
            <a className="btn-secondary" href="/admin/viewLocation">View Locations</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLocation;
