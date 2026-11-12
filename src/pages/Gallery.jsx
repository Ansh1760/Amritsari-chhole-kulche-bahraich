import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';
import { GallerySection } from '../components/sections/GallerySection';
import { Button } from '../components/common/Button';

/**
 * Gallery Page Component
 * Features the original uploaded Bahraich restaurant photos:
 * - Signature golden horse mural
 * - Wide dining interior
 * - Curtained partition dining
 * - Customer dining photos
 * With interactive masonry layout and full-resolution lightbox viewer.
 */
export function Gallery() {
  return (
    <div className="pt-24 bg-ivory">
      {/* Header Banner */}
      <div className="relative py-20 bg-charcoal text-ivory text-center px-4 overflow-hidden border-b border-gold/25 bg-punjabi-pattern">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 mb-4"
          >
            <Camera className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Original Restaurant Photographs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory uppercase"
          >
            Restaurant <span className="text-gold-gradient">Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base sm:text-xl text-ivory/80 max-w-2xl mx-auto font-light"
          >
            Take a visual tour inside our restaurant near Tikora Mod, Bahraich. Click any photograph to view high-resolution details.
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid & Lightbox */}
      <GallerySection isStandalonePage={true} limitItems={false} />

      {/* Bottom Visit Invitation */}
      <div className="bg-ivory-dark py-16 px-4 text-center border-t border-gold/30">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Experience It Live In Person
          </h3>
          <p className="text-brown text-sm sm:text-base">
            Visit our family dining hall today and enjoy live clay-tandoor flatbreads straight from the embers.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Button to="/visit-us" variant="primary" size="md">
              Find Location & Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

