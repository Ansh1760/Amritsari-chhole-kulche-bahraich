import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Navigation } from 'lucide-react';
import { VisitSection } from '../components/sections/VisitSection';

/**
 * Visit Us Page Component
 * Direct location details, interactive coordinates, contact CTAs, and WhatsApp booking enquiry.
 */
export function VisitUs() {
  const location = useLocation();

  // Scroll to #book-meal hash if provided in URL
  useEffect(() => {
    if (location.hash === '#book-meal') {
      const el = document.getElementById('book-meal');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pt-24 bg-charcoal">
      {/* Header Banner */}
      <div className="relative py-20 bg-charcoal-dark text-ivory text-center px-4 overflow-hidden border-b border-gold/25 bg-punjabi-pattern">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-4"
          >
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Bahraich, Uttar Pradesh
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory uppercase"
          >
            Visit Our <span className="text-gold-gradient">Restaurant</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base sm:text-xl text-ivory/80 max-w-2xl mx-auto font-light"
          >
            Near Tikora Mod, Lucknow Road, Hemariya, Bahraich. 
            Convenient parking, air-conditioned seating, and freshly baked authentic kulchas.
          </motion.p>
        </div>
      </div>

      {/* Main Visit Section & WhatsApp Booking Enquiry Form */}
      <VisitSection />
    </div>
  );
}

