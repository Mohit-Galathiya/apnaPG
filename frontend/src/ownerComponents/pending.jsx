import React from 'react';
import './pending.css';
const PendingProperties = () => {
  return (
    <div>
      {/* Main Table */}
      <div className="pending-container">
        <h2 className="pending-header">Pending Properties</h2>

        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Payment Type</th>
              <th>Payment ID</th>
              <th>Payment Time</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January 2025</td>
              <td>5000</td>
              <td>Wallet</td>
              <td>-</td>
              <td>2/1/2025, 12:00:00 PM</td>
              <td className="pending-status">Pending</td>
            </tr>
          </tbody>
        </table>

        <button className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default PendingProperties;
