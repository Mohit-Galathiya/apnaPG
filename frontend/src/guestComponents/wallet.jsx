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
