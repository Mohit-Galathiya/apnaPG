<<<<<<< HEAD
import React, { useState } from "react";
import "./payment.css";
import logo from "/image/ApnaPG-removebg-preview.png";
import walletIcon from "/image/wallet.png";
import logoutIcon from "/image/logout.png";
import qrImage from "/image/qr.png";
import upiOptions from "/image/options.png";

const Payment = () => {
  const [upiId, setUpiId] = useState("");

  const verifyPayment = () => {
    if (upiId.trim() !== "") {
      alert("Payment Verified! Proceeding...");
    } else {
      alert("Please enter a valid UPI ID or Mobile Number.");
    }
  };

  return (
    <div style={{marginTop:"3rem"}}>

      <div className="payment-container">
        <h2 className="payment-title">Payment Options</h2>

        <h3 className="upi-title">UPI QR</h3>
        <div className="upi-qr">
          <img src={qrImage} alt="UPI QR Code" />
          <p>Scan With Any App</p>
          <div className="upi-icons">
            <img src={upiOptions} className="options_payment" alt="UPI Options" />
          </div>
        </div>
        <div className="upi-input">
          <label style={{marginLeft:"11rem"}}>UPI ID / Number</label>
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter UPI ID or Mobile Number"
          />
        </div>

        <button className="btn verify-btn" onClick={verifyPayment}>
          Verify and Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
=======
import React, { useState } from "react";
import "./payment.css";
import logo from "/image/ApnaPG-removebg-preview.png";
import walletIcon from "/image/wallet.png";
import logoutIcon from "/image/logout.png";
import qrImage from "/image/qr.png";
import upiOptions from "/image/options.png";

const Payment = () => {
  const [upiId, setUpiId] = useState("");

  const verifyPayment = () => {
    if (upiId.trim() !== "") {
      alert("Payment Verified! Proceeding...");
    } else {
      alert("Please enter a valid UPI ID or Mobile Number.");
    }
  };

  return (
    <div style={{marginTop:"3rem"}}>

      <div className="payment-container">
        <h2 className="payment-title">Payment Options</h2>

        <h3 className="upi-title">UPI QR</h3>
        <div className="upi-qr">
          <img src={qrImage} alt="UPI QR Code" />
          <p>Scan With Any App</p>
          <div className="upi-icons">
            <img src={upiOptions} className="options_payment" alt="UPI Options" />
          </div>
        </div>
        <div className="upi-input">
          <label style={{marginLeft:"11rem"}}>UPI ID / Number</label>
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter UPI ID or Mobile Number"
          />
        </div>

        <button className="btn verify-btn" onClick={verifyPayment}>
          Verify and Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
