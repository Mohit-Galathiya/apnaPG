<<<<<<< HEAD
import React, { useState } from 'react';
import './owner_add_pr.css'; // Import your CSS

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    address: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('location', formData.location);
    data.append('address', formData.address);
    data.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:5000/api/addProperty', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        window.location.href = '/unknown/proView'; // Redirect on success
      } else {
        alert("Failed to add property: " + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the property.');
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ backgroundColor: '#0808F361' }}>Add Property</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Property Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Property"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Select Property Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
=======
import React, { useState } from 'react';
import './owner_add_pr.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    address: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Handle API call here
  };

  return (
    <>
      {/* Add Property Form */}
      <div className="form-container">
        <h2 style={{ backgroundColor: '#0808F361' }}>Add Property</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label>Property Name</label>
            <input type="text" name="name" placeholder="Enter Property" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Property Description</label>
            <input type="text" name="description" placeholder="Enter Description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Property Location</label>
            <input type="text" name="location" placeholder="Enter Location" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group">
            <label>Select Property Image</label>
            <input type="file" name="image" onChange={handleChange} required />
          </div>
          <a href='/unknown/proView' type="submit" className="submit-btn">Add Property</a>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
