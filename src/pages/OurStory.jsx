import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Utensils, Heart } from 'lucide-react';
import { StorySection } from '../components/sections/StorySection';
import { Button } from '../components/common/Button';

/**
 * Our Story Page Component
 * "MADE WITH TRADITION. SERVED WITH LOVE."
 * Authentic Punjabi culinary storytelling, clay tandoor heritage, and Bahraich restaurant ethos.
 */
export function OurStory() {
  return (
    <div className="pt-24 bg-ivory">
      {/* Story Page Header Banner */}
      <div className="relative py-24 bg-charcoal text-ivory text-center px-4 overflow-hidden bg-punjabi-pattern">
        {/* Glow Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              The Journey of Flavour
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory uppercase"
          >
            Made With Tradition. <br />
            <span className="text-gold-gradient">Served With Love.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-ivory/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            How we bring the authentic culinary spirit of Amritsar’s rustic streets to our dining room in Bahraich, Uttar Pradesh.
          </motion.p>
        </div>
      </div>

      {/* Main 5 Story Pillars */}
      <StorySection isStandalonePage={true} />

      {/* Culinary Philosophy Banner */}
      <div className="bg-maroon text-ivory py-20 px-4 sm:px-6 lg:px-8 border-y-2 border-gold/40">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Heart className="w-10 h-10 text-gold mx-auto animate-pulse" />
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
            "A Kulcha Is Only As Good As The Clay It Touches"
          </h3>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            No tawa, no microwave shortcuts. Every single kulcha is stretched fresh by hand, layered with spiced stuffing, and baked against glowing charcoal embers in our live tandoor.
          </p>
          <div className="pt-4">
            <Button to="/menu" variant="gold" size="lg">
              Explore Our Fresh Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

