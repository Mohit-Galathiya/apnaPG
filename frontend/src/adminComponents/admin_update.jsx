import React from 'react';
import './admin_update.css';

const ViewLocations = () => {
  const locations = [
    { id: 1, name: 'Mumbai', city: 'Mumbai City' },
    { id: 2, name: 'Surat', city: 'South Surat' },
    { id: 3, name: 'Ahmdabad', city: 'Ahmdabad' },
  ];

  return (
    <div>
      {/* Location Table */}
      <div className="table-container">
        <h2 className="table-header">All Location</h2>
        <table>
          <thead>
            <tr>
              <th>Location ID</th>
              <th>Location Name</th>
              <th>Location City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map(location => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td><a href="#">{location.name}</a></td>
                <td><a href="#">{location.city}</a></td>
                <td>
                  <button className="update-btn">Update</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLocations;
