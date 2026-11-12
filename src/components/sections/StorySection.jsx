import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Heart, Sparkles, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { FoodImage } from '../common/FoodImage';
import { Testimonials } from '../Testimonials';
import { RESTAURANT_DATA } from '../../data/restaurantData';
import { STORY_PILLARS } from '../../data/storyData';

const PILLAR_ICONS = {
  UtensilsCrossed,
  Flame,
  Sparkles,
  ShieldCheck,
  Heart
};

/**
 * Our Story / About Section
 * Dynamically renders story pillars from src/data/storyData.js
 * and ends with the Customer Testimonials Carousel.
 */
export function StorySection({ isStandalonePage = false }) {
  const { story } = RESTAURANT_DATA;

  return (
    <section className="py-20 md:py-28 bg-ivory text-charcoal relative overflow-hidden bg-ivory-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tagline={story.badge}
          title={story.title}
          hindiTitle={story.hindiTitle}
          description={story.subtitle}
          theme="light"
        />

        {/* Story Pillars */}
        <div className="mt-16 sm:mt-24 space-y-20 sm:space-y-28">
          {STORY_PILLARS.map((pillar, idx) => {
            const isReversed = idx % 2 === 1;
            const Icon = PILLAR_ICONS[pillar.iconName] || UtensilsCrossed;

            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 sm:gap-14 lg:gap-16`}
              >
                {/* Visual Image Card with Gold Bevel Frame */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/30 via-maroon/20 to-gold/30 blur-sm group-hover:blur-md transition-all duration-500" />
                    
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gold/40 shadow-xl bg-charcoal">
                      <FoodImage
                        src={pillar.image}
                        alt={pillar.alt || pillar.title}
                        title={pillar.title}
                        aspectClass={pillar.aspect || 'aspect-[16/10]'}
                        className="group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Number Pill Overlay */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-maroon/90 text-gold text-xs font-serif font-bold border border-gold/50 shadow-md">
                        {pillar.num}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Story Card */}
                <div className="w-full lg:w-1/2 space-y-3.5 sm:space-y-4">
                  <div className="inline-flex items-center gap-2 text-maroon font-semibold text-xs uppercase tracking-widest">
                    <Icon className="w-4 h-4 text-gold shrink-0" />
                    <span>{pillar.hindi}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-brown/85 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-gold" />
                    <span className="text-xs uppercase tracking-widest text-gold font-bold">
                      Amritsari Craftsmanship
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Standalone page CTA or navigation prompt */}
        {!isStandalonePage && (
          <div className="mt-16 sm:mt-24 text-center">
            <Button
              to="/our-story"
              variant="outlineMaroon"
              size="lg"
            >
              Read The Full Story & Philosophy
            </Button>
          </div>
        )}

        {/* Customer Testimonials Carousel at the very end of the About section */}
        <Testimonials />
      </div>
    </section>
  );
}
