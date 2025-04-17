import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Home";
import Contact from '../Contact';
import About from '../About';
import Properties from '../ownerComponents/owner_add_pr';
import ProView from '../ownerComponents/pro_view';
import AddView from '../ownerComponents/add_room';
import AddFace from '../ownerComponents/add_face';
import Booking from "../ownerComponents/pending"
const Routers = () => {
  return (
    <Routes>
    <Route path="unknown/home" element={<Home />} />
    <Route path="/unknown/about" element={<About />} />
    <Route path="/unknown/contact" element={<Contact />} />
    <Route path="/unknown/properties" element={<Properties />} />
    <Route path="/unknown/proView" element={<ProView />} />
    <Route path="/unknown/add_room" element={<AddView />} />
    <Route path="/unknown/add_face" element={<AddFace />} />
    <Route path="/unknown/booking" element={<Booking />} />
    </Routes>
  );
};

export default Routers;
