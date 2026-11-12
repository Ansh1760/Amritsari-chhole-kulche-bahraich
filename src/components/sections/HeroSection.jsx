import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Award, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurantData';
import { IMAGE_DATA } from '../../data/imageData';

/**
 * Traditional 2D Homepage Hero Section – Sardar Ji Amritsari Kulche
 * Features:
 * - Warm cream, dark maroon, mustard yellow, and dark green Indian restaurant palette
 * - Original Sardar Ji photograph prominently on the left
 * - Chef mascot illustration, large Hindi heading "अमृतसरी कुलचे", tagline "असली अमृतसरी स्वाद!"
 * - Pure Vegetarian badge & prominent "हमारा मेनू देखें" CTA button
 * - Authentic Amritsari Kulcha with Chhole food photography on the right
 * - Clean, lightweight 2D layout with zero 3D effects
 */
export function HeroSection() {
  return (
    <section className="relative w-full bg-[#F8F1E5] text-[#211A16] pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden border-b-4 border-[#D4A441]">
      {/* Subtle Traditional Border Accent */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#6F1717] via-[#D4A441] to-[#6F1717]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heritage Ribbon */}
        <div className="flex justify-center mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-6 py-1.5 rounded-full bg-[#6F1717] text-[#F8F1E5] border border-[#D4A441] shadow-sm max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A441] shrink-0" />
            <span className="text-[11px] sm:text-sm font-semibold tracking-wider uppercase truncate">
              {RESTAURANT_DATA.name} • Bahraich
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4A441] shrink-0" />
          </div>
        </div>

        {/* Main 3-Column Hero Grid: Owner Photo (Left) | Branding & Logo (Center) | Kulcha & Chhole (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* LEFT: Owner Photograph */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border-2 sm:border-4 border-[#6F1717] shadow-lg bg-[#FFFDF8] p-1.5 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-b from-[#F8F1E5] to-[#EAD7B7]">
                <img
                  src={IMAGE_DATA.hero.sardarJi.image}
                  alt={IMAGE_DATA.hero.sardarJi.alt}
                  className="w-full h-full object-contain object-bottom pt-2 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211A16]/90 via-[#211A16]/45 to-transparent p-3 sm:p-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#D4A441] text-[#211A16] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                    <Award className="w-3 h-3" />
                    Sardar Ji • Founder
                  </span>
                  <p className="text-[#F8F1E5] font-serif text-xs sm:text-sm font-semibold">
                    Authentic Punjabi Hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: Brand Mascot Logo, Pure Veg Badge, Hindi Heading, Tagline & CTA */}
          <div className="lg:col-span-4 order-1 lg:order-2 text-center flex flex-col items-center px-1 sm:px-2">
            {/* Brand Chef Logo (same as Navbar) */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-3">
              <img
                src={IMAGE_DATA.brand.logo}
                alt={IMAGE_DATA.brand.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Pure Vegetarian Badge (Dark Green) */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#1E4D2B] text-[#F8F1E5] border border-[#2E6F40] shadow-sm mb-3 max-w-full">
              {/* Standard Indian Pure Veg Mark */}
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm border-2 border-[#76E08D] bg-white flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1E4D2B]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase">
                100% Pure Vegetarian • शुद्ध शाकाहारी
              </span>
            </div>

            {/* Large Hindi Heading */}
            <h1 className="font-hindi text-3xl sm:text-5xl xl:text-6xl font-bold text-[#6F1717] leading-tight tracking-wide">
              अमृतसरी कुलचे
            </h1>

            {/* Tagline */}
            <p className="mt-2 font-hindi text-lg sm:text-2xl font-semibold text-[#9B2920] bg-[#D4A441]/25 px-3.5 sm:px-4 py-1 rounded-lg border border-[#D4A441]/50">
              असली अमृतसरी स्वाद!
            </p>

            {/* Supporting English Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#493024] font-medium max-w-sm leading-relaxed">
              Fresh clay-tandoor stuffed kulchas brushed with pure desi butter & served with slow-cooked Pindi Chhole.
            </p>

            {/* Prominent CTA Button */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                to="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#6F1717] hover:bg-[#521010] text-[#F8F1E5] font-bold text-base sm:text-lg border-2 border-[#D4A441] shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Utensils className="w-5 h-5 text-[#D4A441]" />
                <span className="font-hindi tracking-wide">हमारा मेनू देखें</span>
              </Link>
            </div>

            {/* Quick Location Pill */}
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#493024]/80 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#6F1717] shrink-0" />
              <span>Near Tikora Mod, Lucknow Road, Bahraich</span>
            </div>
          </div>

          {/* RIGHT: Amritsari Kulcha with Chhole Food Photography */}
          <div className="lg:col-span-4 order-3">
            <div className="relative rounded-2xl overflow-hidden border-2 sm:border-4 border-[#6F1717] shadow-lg bg-[#FFFDF8] p-1.5 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={IMAGE_DATA.hero.kulchaChhole.image}
                  alt={IMAGE_DATA.hero.kulchaChhole.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211A16]/90 via-[#211A16]/40 to-transparent p-3 sm:p-3.5">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#1E4D2B] text-[#F8F1E5] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                    Clay Tandoor Special
                  </span>
                  <p className="text-[#F8F1E5] font-serif text-xs sm:text-sm font-semibold">
                    Crispy Amritsari Kulcha & Pindi Chhole
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
