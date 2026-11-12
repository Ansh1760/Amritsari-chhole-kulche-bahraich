import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/common/Loader';
import { AppRoutes } from './routes/AppRoutes';

import { RESTAURANT_DATA } from './data/restaurantData';

/**
 * ScrollToTop Helper
 * Resets window scroll position upon navigating to a new route
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/**
 * Floating Quick Contact Widget
 * Surface fast access to Call Now, WhatsApp, and Back-To-Top button on mobile & desktop
 */
function FloatingWidget() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-charcoal/90 text-gold border border-gold/50 shadow-lg flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Chat */}
      <a
        href={RESTAURANT_DATA.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}

/**
 * Root Application Component
 * Sets up routing, scroll progress bar, initial preloader, and global chrome
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll progress bar at top of window
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initial preloader duration (1.2s to showcase the animated tandoor kulcha)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* Animated Kulcha Preloader */}
      <Loader isLoading={isLoading} />

      {/* Thin Royal Gold Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-yellow-200 to-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="min-h-screen flex flex-col bg-ivory text-charcoal selection:bg-gold selection:text-charcoal">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Global Floating Contact Widget */}
        <FloatingWidget />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

