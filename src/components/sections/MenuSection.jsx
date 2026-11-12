import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, CheckCircle2, Utensils } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';
import { SectionHeading } from '../common/SectionHeading';
import { FoodImage } from '../common/FoodImage';
import { Button } from '../common/Button';
import { createDishEnquiryUrl } from '../../utils/whatsapp';

/**
 * Menu Section Component
 * Displays complete authentic items and verified prices dynamically from menuData.js.
 * Fully responsive across all devices from 320px to 1920px.
 */
export function MenuSection({ isStandalonePage = false, limitItems = false }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = limitItems
    ? MENU_ITEMS.slice(0, 8)
    : activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-charcoal text-ivory relative overflow-hidden bg-punjabi-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tagline="Royal Punjabi Flavours"
          title="OUR ROYAL MENU"
          hindiTitle="हमारा शाही मेनू • ताज़ा तंदूरी व्यंजन"
          description="Crafted with pure desi butter, fresh dough, and slow-cooked Amritsari spices. Baked fresh upon every order."
          theme="dark"
        />

        {/* Category Navigation Tabs */}
        {!limitItems && (
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? MENU_ITEMS.length
                : MENU_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gold text-charcoal shadow-brass-glow scale-105'
                      : 'bg-charcoal-light/80 text-ivory/80 border border-gold/30 hover:border-gold hover:text-gold'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-charcoal text-gold font-bold' : 'bg-gold/15 text-gold'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-charcoal-light border border-gold/25 hover:border-gold transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                <div>
                  {/* Dish Image with Fallback */}
                  <div className="relative overflow-hidden w-full">
                    <FoodImage
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      category={item.category === 'special-thali' ? 'Grand Thali' : 'Tandoor Special'}
                      aspectClass="aspect-[16/10]"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Popular Badge */}
                    {item.isPopular && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-punjabi/95 text-ivory text-[10px] font-bold uppercase tracking-wider border border-gold/40 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-gold" />
                        <span>Bestseller</span>
                      </div>
                    )}

                    {/* Price Pill */}
                    <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-charcoal/90 text-gold text-base sm:text-lg font-serif font-black border border-gold/60 backdrop-blur-md shadow-lg flex items-center gap-0.5">
                      <span>₹{item.price}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-ivory group-hover:text-gold transition-colors leading-snug">
                        {item.name}
                      </h3>
                      {item.hindiName && (
                        <span className="font-hindi text-xs text-gold/75 block mt-0.5">
                          {item.hindiName}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-ivory/70 line-clamp-3 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Thali Inclusions List if present */}
                    {item.includes && (
                      <div className="mt-4 pt-3.5 border-t border-gold/20 space-y-1.5">
                        <span className="text-[11px] uppercase tracking-wider text-gold font-bold block mb-1">
                          Thali Includes:
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {item.includes.map((inc, i) => (
                            <span key={i} className="text-xs text-ivory/80 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                              <span>{inc}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                  <a
                    href={createDishEnquiryUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold/10 hover:bg-gold text-gold hover:text-charcoal border border-gold/40 font-semibold text-xs uppercase tracking-wider transition-all duration-300 min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order / Enquiry on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA for Home page preview */}
        {limitItems && (
          <div className="mt-14 sm:mt-16 text-center">
            <Button
              to="/menu"
              variant="gold"
              size="lg"
            >
              Explore Complete 24+ Dish Menu
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
