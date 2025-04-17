import React from "react";
import "./profile_add_detail.css";
import logo from "/image/ApnaPG-removebg-preview.png";

const AddDetailForm = () => {
  const handleAddDetail = () => {
    window.location.href = "/owner/addDetails"; // Change this to a route if using React Router
  };

  const handleCancel = () => {
    alert("Cancelled");
  };

  return (
    <div style={{marginTop:"4rem"}}>

      <div className="form-container">
        <h2 className="form-title">Add Detail</h2>

        <div className="form-card">
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter Full Name" />
            </div>
            <div className="form-group">
              <label>Profession</label>
              <input type="text" placeholder="Enter Profession" />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" placeholder="Enter Age" />
            </div>
            <div className="form-group">
              <label>Permanent Address</label>
              <textarea placeholder="Enter Address"></textarea>
            </div>
            <div className="form-group">
              <label>Select Government Proof</label>
              <input type="file" />
            </div>

            <div className="form-buttons">
              <button type="button" className="btn add-btn" onClick={handleAddDetail}>
                Add Detail
              </button>
              <button type="button" className="btn cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDetailForm;
