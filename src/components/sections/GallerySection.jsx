import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { SectionHeading } from '../common/SectionHeading';
import { FoodImage } from '../common/FoodImage';
import { Button } from '../common/Button';

/**
 * Premium Editorial Restaurant Gallery Section
 * Features:
 * - Rich editorial layout highlighting authentic Bahraich restaurant photos
 * - Balanced responsive grid with custom aspect ratios
 * - Elegant food placeholders with luxury borders and category stamps
 * - Interactive Lightbox Modal with keyboard (Esc, Left, Right) navigation
 */
export function GallerySection({ isStandalonePage = false, limitItems = false }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = limitItems
    ? GALLERY_ITEMS.slice(0, 6)
    : activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    },
    [selectedIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section className="py-20 md:py-28 bg-ivory text-charcoal relative overflow-hidden bg-ivory-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tagline="Visual Glimpse"
          title="ROYAL AMBIENCE & CULINARY MOMENTS"
          hindiTitle="हमारा परिवेश • स्वर्णिम स्मृतियाँ"
          description="Explore authentic glimpses of our Bahraich dining hall, our signature golden horse mural, and happy guests savoring hot tandoori meals."
          theme="light"
        />

        {/* Gallery Filter Tabs */}
        {!limitItems && (
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Photographs', count: GALLERY_ITEMS.length },
              { id: 'ambience', label: 'Restaurant Ambience', count: GALLERY_ITEMS.filter(i => i.category === 'ambience').length },
              { id: 'customers', label: 'Customer Dining', count: GALLERY_ITEMS.filter(i => i.category === 'customers').length },
              { id: 'food', label: 'Food Specialties', count: GALLERY_ITEMS.filter(i => i.category === 'food').length }
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-maroon text-ivory shadow-md scale-105 border border-gold'
                      : 'bg-white/80 text-charcoal border border-gold/30 hover:border-gold hover:text-maroon'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-gold text-charcoal font-bold' : 'bg-charcoal/10 text-charcoal/70'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Gallery Grid */}
        <motion.div
          layout
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIndex(idx)}
                className="group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal border border-gold/30 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative overflow-hidden w-full">
                  <FoodImage
                    src={item.image}
                    alt={item.alt || item.title}
                    title={item.title}
                    category={item.tag || item.category}
                    aspectClass={item.aspect || 'aspect-[4/3]'}
                    className="group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Info Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory">
                      {item.title}
                    </h3>
                    {item.hindiTitle && (
                      <span className="font-hindi text-xs text-gold/80 mt-0.5">
                        {item.hindiTitle}
                      </span>
                    )}
                    <p className="text-xs text-ivory/80 line-clamp-2 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Resolution</span>
                    </div>
                  </div>

                  {/* Verified Photo Badge */}
                  {item.isOriginalPhoto ? (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gold/90 text-charcoal text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
                      Bahraich Outlet
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-maroon/90 text-gold text-[10px] font-semibold uppercase tracking-wider border border-gold/40 shadow-md">
                      Specialty
                    </div>
                  )}
                </div>

                {/* Subtitle Bar below photo for editorial clarity on mobile */}
                <div className="p-4 bg-charcoal-light border-t border-gold/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-ivory truncate max-w-[200px]">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-gold/75 block">
                      {item.tag}
                    </span>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-gold/15 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors shrink-0">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery CTA on Home page preview */}
        {limitItems && (
          <div className="mt-14 sm:mt-16 text-center">
            <Button
              to="/gallery"
              variant="outlineMaroon"
              size="lg"
              icon={Camera}
            >
              View Complete Photo Gallery ({GALLERY_ITEMS.length} Photos)
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox Modal with Next / Prev */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-charcoal-light rounded-2xl sm:rounded-3xl border-2 border-gold/50 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Top Bar with Counter & Close */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gold/25 bg-charcoal">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Photo {selectedIndex + 1} of {filteredItems.length}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="w-9 h-9 rounded-full bg-charcoal-light border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Stage */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt || selectedItem.title}
                  className="max-w-full max-h-[60vh] object-contain select-none"
                />

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/80 text-gold border border-gold/50 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/80 text-gold border border-gold/50 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption & Metadata Bar */}
              <div className="p-5 sm:p-6 bg-charcoal border-t border-gold/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block">
                      {selectedItem.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mt-0.5">
                      {selectedItem.title}
                    </h3>
                  </div>
                  {selectedItem.isOriginalPhoto && (
                    <span className="px-3 py-1 rounded-full bg-gold/90 text-charcoal text-xs font-bold uppercase tracking-wider">
                      Verified Outlet Photo
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-ivory/80 mt-2 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
