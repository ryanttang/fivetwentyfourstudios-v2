import './styles/globals.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
} 