import React from 'react';
import './add_loc.css';

const AddLocation = () => {
  return (
    <div>
      {/* Add Location Form */}
      <div className="location-container">
        <h2 className="form-title">Add Location</h2>

        <form>
          <label htmlFor="locationName">Location Name</label>
          <input type="text" id="locationName" placeholder="Enter title..." />

          <label htmlFor="locationDescription">Location Description</label>
          <textarea id="locationDescription" placeholder="Enter description"></textarea>

          <div className="btn-group">
            <button type="submit" className="btn-primary">Register</button>
            <a type="button" className="btn-secondary" href='/admin/veiwLocation'>View Location</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLocation;
