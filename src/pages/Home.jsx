import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Navigation, Phone, Utensils, Sparkles, ArrowRight } from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { StorySection } from '../components/sections/StorySection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { MenuSection } from '../components/sections/MenuSection';
import { GallerySection } from '../components/sections/GallerySection';
import { FAQSection } from '../components/sections/FAQSection';
import { VisitSection } from '../components/sections/VisitSection';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { HOME_SPECIAL_MENU } from '../data/menuData';

/**
 * Homepage Component
 * Renders the redesigned 2D Hero, Special Menu cards, Info Strip,
 * followed sequentially by Story (with Testimonials), Why Choose Us,
 * Menu Preview, Gallery Preview, FAQ, and Visit Us sections.
 */
export function Home() {
  return (
    <div className="w-full bg-[#F8F1E5]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Our Special Menu Section */}
      <section className="py-14 sm:py-20 bg-[#6F1717] text-[#F8F1E5] relative border-b-4 border-[#D4A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#521010] border border-[#D4A441]/60 text-[#D4A441] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fresh From Clay Tandoor</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F1E5] tracking-tight">
              Our Special Menu
            </h2>
            <p className="font-hindi text-lg sm:text-xl text-[#D4A441] mt-1.5 font-medium">
              हमारा विशेष मेनू • शुद्ध देसी घी और मक्खन से भरपूर
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-[2px] w-12 bg-[#D4A441]/60" />
              <div className="w-2.5 h-2.5 rotate-45 bg-[#D4A441]" />
              <div className="h-[2px] w-12 bg-[#D4A441]/60" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {HOME_SPECIAL_MENU.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FFFDF8] text-[#211A16] rounded-2xl overflow-hidden border-2 border-[#D4A441] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#211A16]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1E4D2B] text-[#F8F1E5] text-[10px] font-bold uppercase tracking-wider shadow-sm border border-[#76E08D]/40">
                      {item.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#6F1717] text-[#D4A441] font-serif font-bold text-sm sm:text-base border border-[#D4A441] shadow-sm">
                      {item.price}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#6F1717] leading-snug">
                          {item.name}
                        </h3>
                        <p className="font-hindi text-sm font-semibold text-[#9B2920] mt-0.5">
                          {item.hindiName}
                        </p>
                      </div>
                      <span
                        className="mt-1 w-4 h-4 rounded-sm border-2 border-[#1E4D2B] bg-white flex items-center justify-center shrink-0"
                        title="Pure Vegetarian"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#1E4D2B]" />
                      </span>
                    </div>

                    <p className="mt-2.5 text-sm text-[#493024] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <Link
                    to="/menu"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F8F1E5] hover:bg-[#D4A441] text-[#6F1717] hover:text-[#211A16] font-semibold text-xs uppercase tracking-wider border border-[#D4A441] transition-colors duration-200"
                  >
                    <span>View In Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#D4A441] hover:bg-[#E5BF5F] text-[#211A16] font-bold text-sm sm:text-base uppercase tracking-wider shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Full Menu (24+ Dishes)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Bottom Information Strip: Location, Opening Hours & Location Button */}
      <section className="py-10 sm:py-12 bg-[#1E4D2B] text-[#F8F1E5] border-b-4 border-[#D4A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="flex items-start gap-4 bg-[#163B20] p-5 rounded-2xl border border-[#D4A441]/40">
              <div className="w-11 h-11 rounded-xl bg-[#D4A441] text-[#211A16] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#D4A441] uppercase tracking-wide">
                  Our Location
                </h3>
                <p className="mt-1 text-sm text-[#F8F1E5]/90 leading-relaxed">
                  {RESTAURANT_DATA.address.full}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#163B20] p-5 rounded-2xl border border-[#D4A441]/40">
              <div className="w-11 h-11 rounded-xl bg-[#D4A441] text-[#211A16] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="w-full">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#D4A441] uppercase tracking-wide">
                  Opening Hours
                </h3>
                <div className="mt-1 space-y-1 text-sm text-[#F8F1E5]/90">
                  {RESTAURANT_DATA.hours.map((item, idx) => (
                    <div key={idx} className="flex flex-wrap justify-between gap-2">
                      <span className="font-medium text-[#F8F1E5]">{item.days}:</span>
                      <span className="text-[#E5BF5F] font-semibold">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center justify-end gap-3">
              <a
                href={RESTAURANT_DATA.geo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4A441] hover:bg-[#E5BF5F] text-[#211A16] font-bold text-sm uppercase tracking-wider shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={RESTAURANT_DATA.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#6F1717] hover:bg-[#521010] text-[#F8F1E5] font-bold text-sm uppercase tracking-wider border border-[#D4A441]/70 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#D4A441]" />
                <span>{RESTAURANT_DATA.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Us / Our Story Section (Includes Customer Testimonials Carousel at the end) */}
      <StorySection />

      {/* 5. Why Choose Us / Services Section */}
      <WhyChooseUsSection />

      {/* 6. Complete Menu Preview */}
      <MenuSection limitItems={true} />

      {/* 7. Gallery Preview */}
      <GallerySection limitItems={true} />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Visit Us & Contact Section */}
      <VisitSection />
    </div>
  );
}
