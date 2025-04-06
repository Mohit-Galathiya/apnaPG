import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

import hotelIcon from "../public/image/hotel.png";
import landingImg from "../public/image/erasebg-transformed.png";
import feature1 from "../public/image/aa.png";
import feature2 from "../public/image/home2.png";
import feature3 from "../public/image/bb.png";
import Footer from "./Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <h1 className="parent_main" style={{ marginTop: "11rem" }}>
          <img
            src={hotelIcon}
            className="main_text"
            alt="Hotel Icon"
            height="40px"
            width="40px"
          />
          Your Comfort is Our Top Priority
        </h1>
        <h2 className="parent_slogan">Find Your Perfect PG Accommodation</h2>
        <section className="search-bar">
          <input type="text" placeholder="Search for locality" />
          <button>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </section>
        <img src={landingImg} className="landing_img" alt="City Skyline" />
      </main>

      <section className="features">
        <div className="header-content">
          <div className="feature">
            <img src={feature1} alt="Easy Property Listing" />
            <h3>Easy Property Listing</h3>
            <p>
              Property owners can effortlessly list their properties and manage
              bookings with ease.
            </p>
          </div>
          <div className="feature">
            <img src={feature2} alt="Convenient Room Booking" />
            <h3>Convenient Room Booking</h3>
            <p>
              Guests can browse and book rooms that suit their preferences
              without any hassle.
            </p>
          </div>
          <div className="feature">
            <img src={feature3} alt="Secure Payment" />
            <h3>Secure Payment</h3>
            <p>
              Experience secure transactions with our integrated payment gateway
              for seamless bookings.
            </p>
          </div>
        </div>
      </section>

      <section className="say">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>
            “PG Management made it incredibly easy to find a room that fits my
            budget and location preferences!”
          </p>
          <span>Guest 1</span>
        </div>
        <div className="testimonial">
          <p>
            “Listing my property was quick and straightforward. I've received so
            many bookings already!”
          </p>
          <span>Owner 1</span>
        </div>
      </section>

      {/* Make sure the footer comes after the main content */}
      <Footer />
    </div>
  );
};

export default Home;
