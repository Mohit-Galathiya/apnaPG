import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import hotelIcon from "/image/hotel.png";
import suratImage from "/image/search1.jpg";
import ahmedabadImage from "/image/search2.jpg";
import mumbaiImage from "/image/search3.jpg";

const Search = () => {
  const handleCardClick = () => {
    window.location.href = "/owner/guset_pro_detail";
  };

  return (
    <div className="search-container" style={{marginTop:"5rem"}}>
      <section className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search for locality" />
        <button>Search</button>
      </section>

      <section className="property-cards">
        <div className="card" onClick={handleCardClick}>
          <img src={suratImage} alt="Surat" className="card_img" />
          <h3><img src={hotelIcon} alt="hotel icon" style={{height:"1rem",width:"1rem"}} /> Surat</h3>
          <h4>Stay Smart Space</h4>
          <p>Experience modern, affordable, and comfortable living.</p>
        </div>

        <div className="card" onClick={handleCardClick}>
          <img src={ahmedabadImage} alt="Ahmedabad" className="card_img" />
          <h3><img src={hotelIcon} alt="hotel icon"  style={{height:"1rem",width:"1rem"}} /> Ahmedabad</h3>
          <h4>Easy Urban Stay</h4>
          <p>Discover hassle-free living in the heart of the city.</p>
        </div>

        <div className="card" onClick={handleCardClick}>
          <img src={mumbaiImage} alt="Mumbai" className="card_img" />
          <h3><img src={hotelIcon} alt="hotel icon" style={{height:"1rem",width:"1rem"}} /> Mumbai</h3>
          <h4>Prime Comfort Hub</h4>
          <p>Redefine your living experience with Prime Comfort Hub.</p>
        </div>
      </section>
    </div>
  );
};

export default Search;
