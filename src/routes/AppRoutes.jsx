import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { OurStory } from '../pages/OurStory';
import { Menu } from '../pages/Menu';
import { Gallery } from '../pages/Gallery';
import { VisitUs } from '../pages/VisitUs';

/**
 * Centralized Application Routes
 * Preserves all existing routes and fallback behavior.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/visit-us" element={<VisitUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

