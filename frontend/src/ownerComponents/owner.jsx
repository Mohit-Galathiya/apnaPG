<<<<<<< HEAD
import React from "react";

const OwnerRegistration = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/registerOwner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Owner registered successfully!");
        window.location.href = "/unknown/properties"; // redirect on success
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <main>
        <center>
          <div className="registration-box" style={{ width: "50%" }}>
            <h2>Owner Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="contact" required />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <button type="submit" className="register-btn">
                Register
              </button>
            </form>
          </div>
        </center>
      </main>
    </div>
  );
};

export default OwnerRegistration;
=======
import React from "react";

const OwnerRegistration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data Submitted:", data);
  };

  return (
    <div>
      <main>
        <center>
        <div className="registration-box" style={{width:"50%"}}>
          <h2>Owner Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <a type="submit" href="/unknown/properties" className="register-btn">Register</a>
          </form>
        </div>
        
      </center>
      </main>
    </div>
  );
};

export default OwnerRegistration;
>>>>>>> f90f52f08c065f0ac935d5c0cdaf10eb6636e3f5
