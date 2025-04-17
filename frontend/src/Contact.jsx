import React from "react";
import "./Contact.css";
import logo from "/public/image/ApnaPG-removebg-preview.png";
import Header from "./Components/Header/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container" style={{height:"100%"}}>
        <h2>
          <span className="icon">👤</span> Contact Us
        </h2>
        <p className="description">
          Have questions or need assistance? We're here to help. Whether you're a
          property owner with queries about listing your property or a guest
          needing assistance with bookings, feel free to reach out to us. Our
          support team is always ready to assist you.
        </p>
        <div className="form-container">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter Your Message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;