import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeOffline } from "../pages/HomeOffline";
import { StorePage } from "../pages/StorePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeOffline />} />
      <Route path="/dashboard" element={<StorePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
