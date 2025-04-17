<<<<<<< HEAD
import React, { useState } from "react";
import "./wallet.css";
import logo from "/image/ApnaPG-removebg-preview.png";

const Wallet = () => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState("");

  const handleAddMoney = () => {
    const amount = parseFloat(inputAmount);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "rzp_test_zHhNFsppG7bIjH", // ✅ Replace with your Razorpay test key
      amount: amount * 100, // Razorpay amount in paise
      currency: "INR",
      name: "ApnaPG",
      description: "Add Money to Wallet",
      image: logo,
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        setWalletAmount(prev => prev + amount);
      },
      prefill: {
        name: "Owner Name",
        email: "owner@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const updateWallet = () => {
    const amount = parseFloat(inputAmount);
    if (amount > 0) {
      setWalletAmount(amount);
      alert("Wallet updated successfully!");
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <div className="wallet-container">
        <h2 className="wallet-title">My Wallet</h2>
        <h3 className="wallet-balance">
          Wallet Balance: <span>{walletAmount}</span>
        </h3>

        <div className="wallet-input">
          <label style={{ marginLeft: "11rem" }}>Amount</label>
          <input
            type="number"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>

        <button className="btn primary" onClick={handleAddMoney}>
          Add Money in Wallet
        </button>

        <button className="btn secondary" onClick={updateWallet}>
          Update Wallet
        </button>
      </div>
    </div>
  );
};

export default Wallet;
=======
import React, { useState } from "react";
import "./wallet.css";
import logo from "/image/ApnaPG-removebg-preview.png";
const Wallet = () => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState("");

  const handleAddMoney = () => {
    window.location.href = "/owner/payment"; // Replace with your route
  };

  const updateWallet = () => {
    const amount = parseFloat(inputAmount);
    if (amount > 0) {
      setWalletAmount(amount);
      alert("Wallet updated successfully!");
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div style={{marginTop:"3rem"}}>

      <div className="wallet-container">
        <h2 className="wallet-title">My Wallet</h2>
        <h3 className="wallet-balance">Wallet Balance: <span>{walletAmount}</span></h3>

        <button className="btn primary" onClick={handleAddMoney}>Add Money in Wallet</button>

        <div className="wallet-input">
          <label style={{marginLeft:"11rem"}}>Amount</label>
          <input
            type="number"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>

        <button className="btn secondary" onClick={updateWallet}>Update Wallet</button>
      </div>
    </div>
  );
};

export default Wallet;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
