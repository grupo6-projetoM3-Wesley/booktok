
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { StorePage } from "../pages/StorePage";
import UserPage from '../pages/userPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<StorePage />} />
      <Route path='/userdash' element={<UserPage/>}/>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
