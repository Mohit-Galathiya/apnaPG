import React, { useEffect, useState } from 'react';
import './admin_update.css';

const ViewLocations = () => {
  const [locations, setLocations] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  // Fetch locations
  useEffect(() => {
    fetch('http://localhost:5000/locations')
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error(err));
  }, []);

  // Delete handler
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/location/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Location deleted successfully!');
        setLocations(locations.filter((loc) => loc.id !== id));
      })
      .catch((err) => console.error(err));
  };

  // Show update form
  const handleUpdateClick = (location) => {
    setSelectedLocation(location);
    setUpdatedName(location.name);
    setUpdatedDescription(location.description);
    setShowUpdateForm(true);
  };

  // Update handler
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/location/update/${selectedLocation.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: updatedName, description: updatedDescription }),
    })
      .then(() => {
        alert('Location updated successfully!');
        setLocations(locations.map(loc =>
          loc.id === selectedLocation.id
            ? { ...loc, name: updatedName, description: updatedDescription }
            : loc
        ));
        setShowUpdateForm(false);
        setSelectedLocation(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* Location Table */}
      <div className="table-container">
        <h2 className="table-header">All Locations</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Location Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.name}</td>
                <td>{location.description}</td>
                <td>
                  <button className="update-btn" onClick={() => handleUpdateClick(location)}>Update</button>
                  <button className="delete-btn" onClick={() => handleDelete(location.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Form Modal */}
      {showUpdateForm && (
        <div className="update-modal">
          <div className="update-form-box">
            <h3>Update Location</h3>
            <form onSubmit={handleUpdateSubmit}>
              <label>Location Name</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <label>Location Description</label>
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
              <div className="btn-group">
                <button type="submit" className="btn-primary">Update</button>
                <button type="button" className="btn-secondary" onClick={() => setShowUpdateForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLocations;
