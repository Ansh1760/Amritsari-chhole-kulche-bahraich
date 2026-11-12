import React from 'react';

/**
 * Editorial Section Heading Component
 * Combines traditional Indian typography, Punjabi gold flourishes, and modern whitespace.
 */
export function SectionHeading({
  tagline,
  title,
  hindiTitle,
  description,
  align = 'center',
  theme = 'dark', // 'dark' (on dark/maroon backgrounds) or 'light' (on ivory backgrounds)
  className = ''
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {/* Decorative Gold Badge / Tagline */}
      {tagline && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">
            {tagline}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        </div>
      )}

      {/* Main Title with Serif Font */}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
        isLight ? 'text-charcoal' : 'text-ivory'
      }`}>
        {title}
      </h2>

      {/* Optional Traditional Hindi Subheading */}
      {hindiTitle && (
        <span className="font-hindi text-base sm:text-lg text-gold/80 mt-1.5 tracking-wider font-normal">
          {hindiTitle}
        </span>
      )}

      {/* Traditional Flourish Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className={`h-[1px] w-12 ${isLight ? 'bg-gold/40' : 'bg-gold/30'}`} />
        <div className="w-2 h-2 rotate-45 border border-gold bg-gold/20" />
        <div className={`h-[1px] w-12 ${isLight ? 'bg-gold/40' : 'bg-gold/30'}`} />
      </div>

      {/* Supporting Text */}
      {description && (
        <p className={`text-base sm:text-lg font-light leading-relaxed ${
          isLight ? 'text-brown/80' : 'text-ivory/80'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}

