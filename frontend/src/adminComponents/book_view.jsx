import React from 'react';
import './book_view.css';

const PendingBookings = () => {
  return (
    <div>
      <div className="table-container">
        <h2 className="table-header">Pending Booking</h2>

        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Property</th>
              <th>Name</th>
              <th>Location</th>
              <th>Owner</th>
              <th>Customer</th>
              <th>Room Type</th>
              <th>Room No</th>
              <th>Amount (Month)</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Total Stay (Month)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B-123Cv</td>
              <td>
                <img
                  src="https://s3-alpha-sig.figma.com/img/fef3/7797/f4dbd7398f6a26eaf59891119f3f1078?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5Tky8IRThe-vejkyV4lTuIb2nLZ~HNDQERmsN6-KVuLVEobEkY21VDsCAGAfcbFTfdZn4cMyEIE3BI49NXHWUUNyA3brUGogM2z9bRio0mrugh97CfcM6RUY6UgrANLnrqta1RNiG19yvqP4vsLzFwkS5uMCtwPPWmivDA0QEvRS-xScrP0n~1tw0kKDX-Gbk0OnesVfU00IgtkeA-Z0UZsWNGUiidkRBkLVAwGt5kqWqvDLabj3GCAr0g88Q8XRmUcZprqpeqa-Soo~dp~3uAPEuuubrt7zsQzEZIFbZnGJs3q1-fF3aTXDGcl~JZkP6ltn6AaSHlROtjvAGpRlw__"
                  alt="Property"
                  className="property-img"
                />
              </td>
              <td>Royal PG</td>
              <td>Pune</td>
              <td>Meet</td>
              <td>Mohit</td>
              <td>Shared</td>
              <td>102</td>
              <td>5000</td>
              <td>1/2/2025</td>
              <td>1/3/2025</td>
              <td>1</td>
              <td><button className="cancel-btn">Cancel</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingBookings;
