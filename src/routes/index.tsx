import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { StorePage } from "../pages/StorePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<StorePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
