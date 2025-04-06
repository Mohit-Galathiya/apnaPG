import React from "react";
import "./paid.css";
import logo from "/image/ApnaPG-removebg-preview.png";
import walletIcon from "/image/wallet.png";
import logoutIcon from "/image/logout.png";

const PendingBooking = () => {
  const payNow = () => {
    alert("Redirecting to payment...");
    window.location.href = "/owner/payment"; // Replace with React Router path if needed
  };

  return (
    <div style={{marginTop:"3rem"}}>

      <div className="booking-container">
        <h2 className="booking-title">Pending Booking</h2>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Payment Type</th>
              <th>Payment ID</th>
              <th>Payment Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January 2025</td>
              <td>5000</td>
              <td>Wallet</td>
              <td>-</td>
              <td>2/1/2025, 12:00:00 PM</td>
              <td>
                <button className="pay-btn" onClick={payNow}>Pay Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingBooking;
