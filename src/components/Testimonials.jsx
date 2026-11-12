import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Quote, Clock } from 'lucide-react';
import { testimonials } from '../data/testimonials';

/**
 * Extracts up to 2 uppercase initials from a customer name for avatar fallback.
 */
function getInitials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}

/**
 * Reusable Customer Testimonials Carousel Component
 * Data is sourced strictly from src/data/testimonials.js.
 */
export function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  // Responsive cards-per-view calculation (1 mobile, 2 tablet, 3 desktop)
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  // Clamp index when viewport size changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 sm:mt-28 pt-14 sm:pt-16 border-t border-gold/30">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon/10 border border-maroon/25 text-maroon text-xs font-bold uppercase tracking-widest mb-3">
          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
          <span>Guest Feedback</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
          What Our Customers Say
        </h3>
        <p className="mt-2 text-brown/80 text-sm sm:text-base font-light">
          Real experiences and feedback from our customers.
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gold/50" />
          <div className="w-2 h-2 rotate-45 border border-gold bg-gold/40" />
          <div className="h-[1px] w-12 bg-gold/50" />
        </div>
      </div>

      {/* Carousel Viewport */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
      >
        <div className="overflow-hidden py-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2.5 sm:px-3"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <article className="h-full bg-white/95 rounded-2xl p-6 border border-gold/35 shadow-sm hover:shadow-lg hover:border-gold transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    {/* Top Row: Stars & Quote Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-4 h-4 ${
                              starIdx < item.rating
                                ? 'text-gold fill-gold'
                                : 'text-charcoal/20'
                            }`}
                          />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-maroon/25 shrink-0" />
                    </div>

                    {/* Review Copy */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed mb-4 ${
                        item.isPlaceholder
                          ? 'text-brown/70 italic'
                          : 'text-charcoal/90'
                      }`}
                    >
                      “{item.review}”
                    </p>

                    {/* Explicit Placeholder Status Badge (never presents placeholders as verified) */}
                    {item.isPlaceholder && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ivory border border-gold/40 text-brown/80 text-[11px] font-medium mb-4">
                        <Clock className="w-3 h-3 text-maroon/70" />
                        <span>Awaiting Confirmation</span>
                      </div>
                    )}
                  </div>

                  {/* Customer Profile Footer */}
                  <div className="pt-4 border-t border-gold/20 flex items-center gap-3">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-gold/60 shrink-0"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-11 h-11 rounded-full bg-maroon text-gold font-serif font-bold text-sm flex items-center justify-center border-2 border-gold/60 shrink-0"
                        aria-hidden="true"
                      >
                        {getInitials(item.name)}
                      </div>
                    )}

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-charcoal text-sm sm:text-base truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-brown/75 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-maroon shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white border border-gold/50 text-maroon hover:bg-maroon hover:text-ivory flex items-center justify-center shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-7 bg-maroon'
                      : 'w-2.5 bg-gold/50 hover:bg-gold'
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-white border border-gold/50 text-maroon hover:bg-maroon hover:text-ivory flex items-center justify-center shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

