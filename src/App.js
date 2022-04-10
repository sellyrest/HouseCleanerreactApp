import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}
