import React, { useEffect, useState } from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import hotelIcon from "/image/hotel.png";

const Search = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getPendingProperties");
        const result = await response.json();
        if (response.ok) {
          setProperties(result.properties);
        } else {
          console.error("Failed to fetch properties:", result.message);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // Redirect to detail page with ID
  const handleCardClick = (id) => {
    window.location.href = `/owner/guset_pro_detail/${id}`;
  };

  // Filter by search term
  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container" style={{ marginTop: "5rem" }}>
      {/* Search Bar */}
      <section className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search for locality"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </section>

      {/* Property Cards */}
      <section className="property-cards">
        {filteredProperties.map((property) => (
          <div className="card" key={property.id} onClick={() => handleCardClick(property.id)}>
            <img
              src={`http://localhost:5000${property.imageUrl}`}
              alt={property.name}
              className="card_img"
            />
            <h3>
              <img src={hotelIcon} alt="hotel icon" style={{ height: "1rem", width: "1rem" }} />{" "}
              {property.location}
            </h3>
            <h4>{property.name}</h4>
            <p>{property.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Search;
