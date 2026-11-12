
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react';

import { NAV_LINKS } from '../../data/navigation';
import { RESTAURANT_DATA } from '../../data/restaurantData';
import { IMAGE_DATA } from '../../data/imageData';
import { Button } from '../common/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? 'bg-maroon-dark/95 backdrop-blur-md shadow-luxury py-3 border-b border-gold/40'
            : 'bg-maroon-dark/95 backdrop-blur-md py-3.5 border-b border-gold/30 shadow-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">

            {/* Brand Logo & Title */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">

              {/* Brand Mascot Logo - No Circle or Border */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={IMAGE_DATA.brand.logo}
                  alt={IMAGE_DATA.brand.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Brand Name */}
              <div className="flex flex-col min-w-0">
                <span className="font-serif font-bold text-sm sm:text-xl tracking-wide sm:tracking-wider text-ivory uppercase group-hover:text-gold transition-colors truncate">
                  Amritsari Chhole Kulche
                </span>

                <span className="text-[9px] sm:text-xs tracking-wider sm:tracking-widest text-gold/80 uppercase font-sans truncate">
                  The Royal Taste • Bahraich
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 py-1 ${isActive
                      ? 'text-gold font-semibold'
                      : 'text-ivory/85 hover:text-gold'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-4">

              {/* Call Link */}
              <a
                href={RESTAURANT_DATA.contact.phoneTel}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-gold hover:text-gold-light uppercase transition-colors"
                title="Call Restaurant Directly"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                </div>

                <span className="hidden xl:inline">
                  {RESTAURANT_DATA.contact.phoneDisplay}
                </span>
              </a>

              {/* Book Your Meal */}
              <Button
                to="/visit-us#book-meal"
                variant="gold"
                size="sm"
                className="shadow-md"
              >
                Book Your Meal
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden shrink-0">

              <Button
                to="/visit-us#book-meal"
                variant="gold"
                size="sm"
                className="text-[11px] px-3 py-1.5 sm:hidden"
              >
                Book
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full border border-gold/40 bg-maroon/60 text-gold flex items-center justify-center focus:outline-none shrink-0"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen
                  ? <X className="w-5 h-5" />
                  : <Menu className="w-5 h-5" />
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-charcoal/95 backdrop-blur-xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
          >

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 mt-4">
              <span className="text-xs uppercase tracking-widest text-gold/60 font-semibold border-b border-gold/20 pb-2">
                Navigation
              </span>

              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-serif tracking-wide transition-colors ${isActive
                      ? 'text-gold font-bold pl-2 border-l-2 border-gold'
                      : 'text-ivory hover:text-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="space-y-4 pt-6 border-t border-gold/20">

              <div className="flex items-center gap-2 text-ivory/80 text-sm">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>
                  Near Tikora Mod, Lucknow Road, Bahraich
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">

                {/* Call Now */}
                <a
                  href={RESTAURANT_DATA.contact.phoneTel}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-maroon text-ivory text-sm font-semibold border border-gold/40"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  Call Now
                </a>

                {/* WhatsApp */}
                <a
                  href={RESTAURANT_DATA.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              {/* Booking Button */}
              <Button
                to="/visit-us#book-meal"
                variant="gold"
                size="md"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Your Meal Now
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
