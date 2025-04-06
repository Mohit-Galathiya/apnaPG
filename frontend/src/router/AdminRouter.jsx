import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Home";
import Contact from '../Contact';
import About from '../About';
import Location from "../adminComponents/add_loc";
import ViewLocation from "../adminComponents/book_view";
import Properties from "../adminComponents/admin_pro";
import Booking from "../adminComponents/admin_update";
const Routers = () => {
  return (
    <Routes>
    <Route path="/admin/home" element={<Home />} />
    <Route path="/admin/aboutus" element={<About />} />
    <Route path="/admin/contact" element={<Contact />} />
    <Route path="/admin/location" element={<Location />} />
    <Route path="/admin/veiwLocation" element={<Booking />} />
    <Route path="/admin/properties" element={<Properties />} />
    <Route path="/admin/booking" element={<ViewLocation />} />
  </Routes>
  );
};

export default Routers;
