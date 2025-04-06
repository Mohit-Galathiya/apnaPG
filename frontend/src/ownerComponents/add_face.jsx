import React from "react";
import logo from "/image/ApnaPG-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faBuilding,
  faCalendarCheck,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const AddFacility = () => {
  const facilityContainerStyle = {
    marginTop: '120px',
    background: 'white',
    padding: '30px',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };

  const backBtnStyle = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  };

  const facilityHeaderStyle = {
    background: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '18px',
    textAlign: 'center',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const addFacilityBtnStyle = {
    background: 'purple',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    marginTop: '15px',
  };

  return (
    <>

      <div style={facilityContainerStyle}>
        <button style={backBtnStyle}>⬅</button>
        <h2 style={facilityHeaderStyle}>Add Facility Detail</h2>
        <form>
          <label htmlFor="facility-name" style={labelStyle}>Facility Name</label>
          <input
            type="text"
            id="facility-name"
            name="facility-name"
            placeholder="Enter facility name"
            required
            style={inputStyle}
          />

          <label htmlFor="facility-desc" style={labelStyle}>Description</label>
          <textarea
            id="facility-desc"
            name="facility-desc"
            placeholder="Enter description"
            rows="4"
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          ></textarea>

          <button type="submit" style={addFacilityBtnStyle}>Add Facility</button>
        </form>
      </div>
    </>
  );
};

export default AddFacility;
