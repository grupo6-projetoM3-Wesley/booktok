import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { StorePage } from '../pages/StorePage';
import UserPage from '../pages/userPage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<StorePage />} />
      <Route path='*' element={<Navigate to='/home' />} />
      <Route path='/userdash' element={<UserPage/>}/>
    </Routes>
  );
};
