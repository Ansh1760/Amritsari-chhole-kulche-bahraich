import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import { MenuSection } from '../components/sections/MenuSection';
import { Button } from '../components/common/Button';

/**
 * Our Menu Page Component
 * Shows complete verified items, exact prices, category tabs, and WhatsApp ordering.
 */
export function Menu() {
  return (
    <div className="pt-24 bg-charcoal">
      {/* Menu Header Banner */}
      <div className="relative py-20 bg-charcoal-dark text-ivory text-center px-4 overflow-hidden border-b border-gold/25">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-4"
          >
            <Flame className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Clay Tandoor Cooked Fresh Daily
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory uppercase"
          >
            The Royal <span className="text-gold-gradient">Menu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base sm:text-xl text-ivory/80 max-w-2xl mx-auto font-light"
          >
            All prices are verified and baked fresh to order in Bahraich. Served with hot spiced chhole, tamarind chutney, and pure desi butter.
          </motion.p>
        </div>
      </div>

      {/* Complete Menu Grid with Filter Tabs */}
      <MenuSection isStandalonePage={true} limitItems={false} />

      {/* Special Thali Callout */}
      <div className="bg-gradient-to-r from-maroon via-punjabi to-maroon text-ivory py-16 px-4 border-t-2 border-gold/40">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Sparkles className="w-8 h-8 text-gold mx-auto" />
          <h3 className="font-serif text-3xl font-bold text-ivory">
            Planning a Family Feast in Bahraich?
          </h3>
          <p className="text-ivory/80 text-sm sm:text-base max-w-xl mx-auto">
            Try our Special Kulcha Thali (₹160 / ₹199) featuring stuffed kulcha, chhole, fries, raita, chilli paneer, and sweets!
          </p>
          <div className="pt-2">
            <Button to="/visit-us#book-meal" variant="gold" size="md">
              Book Meal Enquiry Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

