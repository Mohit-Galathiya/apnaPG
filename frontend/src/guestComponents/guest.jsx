import React, { useState } from "react";
import './guset.css'; // Make sure this path is correct
import Header from "../Components/Header/Header";

const GuestRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    contact: "",
    street: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/registerGuest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          contact: "",
          street: ""
        });
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Backend not reachable!");
    }
  };

  return (
    <div>
      <Header />
      <div className="main" style={{ marginTop: "5rem" }}>
        <div className="register-container">
          <h2 className="register-title">Register Guest</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  placeholder="Enter Your Contact No."
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Enter Your Address"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <center>
                  <button type="submit" className="register-btn">
                    Register
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestRegister;
