import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Animated Kulcha Preloader Component
 * Displays a rotating golden tandoori kulcha with melting butter and steam
 */
export function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal text-ivory"
        >
          {/* Glowing Tandoori Ring */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Pulsing Outer Gold Halo */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 rounded-full bg-gold/20 blur-xl"
            />

            {/* Rotating Brass Thali Rim */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50"
            />

            {/* Handcrafted 2D Kulcha Graphic with blisters & butter */}
            <motion.div
              animate={{
                scale: [0.95, 1.02, 0.95],
                rotate: [0, 4, -4, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#F2C37A] via-[#DF9E4B] to-[#B87A29] shadow-2xl flex items-center justify-center border border-gold/40 overflow-hidden"
            >
              {/* Tandoor Char Marks */}
              <div className="absolute top-3 left-5 w-3 h-2 rounded-full bg-[#2A160C] opacity-75 blur-[0.5px]" />
              <div className="absolute bottom-4 right-4 w-4 h-2.5 rounded-full bg-[#3D2111] opacity-70" />
              <div className="absolute top-7 right-3 w-2.5 h-2 rounded-full bg-[#2A160C] opacity-65" />

              {/* Fresh Coriander Flecks */}
              <div className="absolute top-4 right-8 w-1.5 h-1 rounded-sm bg-[#2C6B2F] opacity-90" />
              <div className="absolute bottom-5 left-6 w-2 h-1 rounded-sm bg-[#2C6B2F] opacity-85 rotate-45" />

              {/* Melting Butter Dollop */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-6 h-4 rounded-full bg-[#FFD54F] shadow-md border border-[#FFE082]"
              />
            </motion.div>
          </div>

          {/* Luxury Punjabi Brand Title */}
          <div className="mt-8 text-center px-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-gold uppercase">
              Amritsari Chhole Kulche
            </h3>
            <p className="font-hindi text-sm text-ivory/70 mt-1 tracking-wider">
              शाही स्वाद • प्रामाणिक परंपरा
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-gold animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-gold animate-bounce" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

