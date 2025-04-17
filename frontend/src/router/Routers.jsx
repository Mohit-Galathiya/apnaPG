import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Home";
import Contact from '../Contact';
import About from '../About';
import Login from '../guestComponents/guset_login';
import Guest from '../guestComponents/guest';
import Search from '../guestComponents/search';
import Owner from '../ownerComponents/owner';

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/guest" element={<Guest />} />
    <Route path="/search" element={<Search />} />
    <Route path="/registerOwner" element={<Owner />} />
  </Routes>
  );
};

export default Routers;
