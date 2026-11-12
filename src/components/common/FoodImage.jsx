import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles } from 'lucide-react';
import { IMAGE_DATA } from '../../data/imageData';

/**
 * Resilient Food & Restaurant Image Component
 * Ensures:
 * - Proper aspect ratios and object-fit rules
 * - Zero distorted or stretched images
 * - Elegant culinary placeholders for any missing or loading image
 * - Meaningful alt text & lazy loading
 */
export function FoodImage({
  src,
  alt,
  title,
  category = 'Amritsari Special',
  className = '',
  aspectClass = 'aspect-[4/3]',
  objectFit = 'object-cover',
  objectPosition = 'object-center',
  fallbackSrc,
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const defaultFallback = category.toLowerCase().includes('ambience') || category.toLowerCase().includes('hall')
    ? IMAGE_DATA.placeholders.ambience.image
    : IMAGE_DATA.placeholders.food.image;

  const effectiveFallback = fallbackSrc || defaultFallback;

  return (
    <div className={`relative overflow-hidden bg-charcoal-dark ${aspectClass} ${className}`}>
      {/* Primary Image */}
      {!imageError && src ? (
        <img
          src={src}
          alt={alt || title || 'Amritsari Chhole Kulche Bahraich'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full ${objectFit} ${objectPosition} transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          loading="lazy"
          {...props}
        />
      ) : null}

      {/* Styled Elegant Placeholder if image has error or is loading */}
      {(imageError || !src || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-brown via-charcoal to-charcoal-dark border border-gold/25 transition-opacity duration-500 ${
            isLoaded && !imageError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-10 bg-punjabi-pattern pointer-events-none" />

          {/* Central Royal Emblem */}
          <div className="relative w-14 h-14 rounded-full border-2 border-gold/50 flex items-center justify-center mb-3 bg-gold/10 shadow-brass-glow">
            <UtensilsCrossed className="w-6 h-6 text-gold" />
            <Sparkles className="w-3.5 h-3.5 text-gold/80 absolute -top-1 -right-1 animate-pulse" />
          </div>

          {/* Category Pill */}
          <span className="relative z-10 text-[10px] uppercase tracking-widest text-gold font-bold mb-1.5 px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/30">
            {category}
          </span>

          {/* Title */}
          <h4 className="relative z-10 font-serif text-ivory text-base font-bold line-clamp-2 px-3 leading-snug">
            {title || alt || 'Authentic Punjabi Recipe'}
          </h4>

          {/* Tagline */}
          <span className="relative z-10 text-[11px] text-ivory/60 mt-1 italic font-light">
            Fresh from the Clay Tandoor • Bahraich
          </span>
        </div>
      )}
    </div>
  );
}
