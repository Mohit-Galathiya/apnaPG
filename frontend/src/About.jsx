import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faSignInAlt, faUser, faUserTie, faHandshake } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/image/ApnaPG-removebg-preview.png';
import Bi1 from '../public/image/Bi1.jpg';
import Bi2 from '../public/image/Bi2.jpg';
import Bi3 from '../public/image/Bi3.jpg';
import Header from './Components/Header/Header';

const About = () => {
    return (
        <div>
            <Header />
            <div className="about-us-section">
                <div className="about-us-header">
                    <h1>About Us</h1>
                </div>
                <div className="about-us-content">
                    <p>Welcome to <strong>PG Management</strong>your go-to platform for finding the perfect accommodation. Whether you're a property owner or a guest looking for a place to stay, we make the entire process seamless and hassle-free. Our platform allows multiple property owners to list their properties and rooms, while guests can easily browse and book available rooms based on their preferences and requirements.</p>
                    <p><FontAwesomeIcon icon={faHome} /> At <strong>PG Management</strong>we aim to bridge the gap between property owners and guests by offering a secure and user-friendly experience. Our advanced booking system ensures that guests can reserve rooms with just a few clicks, while property owners have the flexibility to manage their listings and bookings with ease.</p>
                    <p><FontAwesomeIcon icon={faHandshake} /> Join us today and experience the convenience of finding your ideal PG accommodation or managing your properties in one place. We are dedicated to helping you find the perfect place to stay or to grow your rental business effortlessly.</p>
                </div>
                <div className="about-us-images">
                    <img src={Bi1} alt="Residential Building" />
                    <img src={Bi2} alt="Hotel" />
                    <img src={Bi3} alt="Furnished Room" />
                </div>
            </div>
        </div>
    );
};

export default About;
