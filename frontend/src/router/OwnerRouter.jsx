import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Search from '../guestComponents/search';
import Paid from "../guestComponents/paid"
import Wallet from "../guestComponents/wallet"
import Profile from "../guestComponents/profile"
import Payment from "../guestComponents/payment"
import Details from "../guestComponents/profile_add_detail"
import AddDetails from "../guestComponents/addhar"
import ProDetails from "../guestComponents/guset_pro_detail"
import RoomShared from "../guestComponents/room_pr_date";
import RoomPublic from "../guestComponents/room_sh_date";

const Routers = () => {
  return (
    <Routes>
    <Route path="/owner/home" element={<Search />} />
    <Route path="/owner/booking" element={<Paid />} />
    <Route path="/owner/wallet" element={<Wallet />} />
    <Route path="/owner/profile" element={<Profile />} />
    <Route path="/owner/payment" element={<Payment />} />
    <Route path="/owner/detail" element={<Details />} />
    <Route path="/owner/addDetails" element={<AddDetails />} />
    <Route path="/owner/guset_pro_detail/:id" element={<ProDetails />} />
    <Route path="/owner/room_shared" element={<RoomShared />} />
    <Route path="/owner/book_date/:id" element={<RoomPublic />} />
  </Routes>
  );
};

export default Routers;
