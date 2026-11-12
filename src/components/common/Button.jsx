import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Premium Button Component
 * Features royal Punjabi palettes, brass glow hovers, and clean semantic routing.
 */
export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs uppercase px-5 py-2.5 gap-2',
    md: 'text-sm uppercase px-7 py-3.5 gap-2.5',
    lg: 'text-base uppercase px-9 py-4 gap-3 font-semibold'
  };

  const variantStyles = {
    // Royal Deep Maroon with gold border and glowing hover
    primary: 'bg-maroon text-ivory border border-gold/40 hover:bg-maroon-dark hover:border-gold hover:shadow-maroon-glow active:scale-95',
    
    // Radiant Mustard Gold metallic button
    gold: 'bg-gold-gradient text-charcoal font-semibold border border-yellow-300/40 hover:shadow-brass-glow hover:brightness-105 active:scale-95',

    // Traditional brass outline
    outline: 'bg-transparent text-gold border-2 border-gold/70 hover:bg-gold/10 hover:border-gold active:scale-95',

    // Outline on light background
    outlineMaroon: 'bg-transparent text-maroon border-2 border-maroon hover:bg-maroon hover:text-ivory active:scale-95',

    // Subtle Ghost
    ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5 active:scale-95'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

