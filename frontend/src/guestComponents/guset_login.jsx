import React, { useState } from "react";
import './guset.css'; // same CSS file used for consistency
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router-dom";

const GuestLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

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
      const response = await fetch("http://localhost:5000/api/loginGuest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        setFormData({
          email: "",
          password: ""
        });

        if(result.result[0].role == "admin"){
          navigate("/admin/location")
        }else if(result.result[0].role == "owner"){
          navigate("/unknown/properties");
        }else{
          navigate('/search'); 
        }
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
          <h2 className="register-title">Guest Login</h2>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
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
                <center>
                  <button type="submit" className="register-btn">
                    Login
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

export default GuestLogin;
