import React, { useState } from 'react';
import './add_room.css';
import { Link } from 'react-router-dom';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomNumber: '',
    description: '',
    roomFor: 'Select',
    type: 'Select',
    price: 'Select',
    totalBeds: 'Select'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData to backend API
    console.log('Form submitted:', formData);
  };

  return (
    <>
      

      <div className="room-container">
        <button className="back-btn">⬅</button>
        <h2 className="room-header">Add Room Details</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="room-number">Room Number</label>
          <input type="text" id="room-number" name="roomNumber" value={formData.roomNumber} onChange={handleChange} required />

          <label htmlFor="room-desc">Description</label>
          <textarea id="room-desc" name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" rows="3" required></textarea>

          <label htmlFor="room-for">Room For</label>
          <select id="room-for" name="roomFor" value={formData.roomFor} onChange={handleChange}>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Both</option>
          </select>

          <label htmlFor="room-type">Type</label>
          <select id="room-type" name="type" value={formData.type} onChange={handleChange}>
            <option>Select</option>
            <option>Single</option>
            <option>Shared</option>
          </select>

          <label htmlFor="room-price">Shared Room One Bed Price</label>
          <select id="room-price" name="price" value={formData.price} onChange={handleChange}>
            <option>Select</option>
            <option>$100</option>
            <option>$200</option>
            <option>$300</option>
          </select>

          <label htmlFor="total-beds">Total Beds</label>
          <select id="total-beds" name="totalBeds" value={formData.totalBeds} onChange={handleChange}>
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>

          <button type="submit" className="add-room-btn">Add Room</button>
        </form>
      </div>
    </>
  );
};

export default AddRoom;
