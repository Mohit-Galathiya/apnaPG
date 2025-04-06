import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you're using FontAwesome
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'; // Import your icons
import logo from "/image/ApnaPG-removebg-preview.png"
const Header = () => {
  return (
    <header style={{ padding: "1rem 2rem", backgroundColor: "#f8f9fa", width: "100%", maxWidth: "100%",top:"0" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "100%" }}>
        <ul style={{ display: "flex", listStyleType: "none", padding: 0, margin: 0, width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
          <li>
            <img src={logo} style={{ height: "3rem", width: "3rem" }} alt="APNAPG Logo" />
          </li>
          <li>
            <Link to="/home" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
          </li>
          <li>
            <Link to="/guest" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faUser} /> Guest
            </Link>
          </li>
          <li>
            <Link to="/registerOwner" style={{ textDecoration: "none", color: "#000" }}>
              <FontAwesomeIcon icon={faUserTie} /> Owner
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
