
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  Heart,
  ArrowUpRight,
  Utensils,
  ChevronRight
} from 'lucide-react';

import { RESTAURANT_DATA } from '../../data/restaurantData';
import { IMAGE_DATA } from '../../data/imageData';
import { NAV_LINKS } from '../../data/navigation';
import { FOOTER_DATA } from '../../data/footer';

export function Footer() {
  return (
    <footer className="relative bg-[#171411] text-[#F8F1E5] overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#8B1E24]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D6A84F]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Top golden border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D6A84F] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-8">

        {/* Brand CTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">

          <div>
            <span className="text-[#D6A84F] text-xs uppercase tracking-[0.3em] font-semibold">
              Authentic Punjabi Taste
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-3 leading-tight">
              Taste the Tradition,
              <span className="text-[#D6A84F]"> Love Every Bite.</span>
            </h2>

            <p className="text-white/50 text-sm mt-3 max-w-lg leading-relaxed">
              {FOOTER_DATA.brandDescription}
            </p>
          </div>

          <Link
            to="/visit-us#book-meal"
            className="inline-flex items-center justify-center gap-3 bg-[#D6A84F] text-[#211811] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#EAC477] transition-all duration-300 hover:-translate-y-1 shrink-0"
          >
            Book Your Table
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-14">

          {/* Brand */}
          <div className="space-y-6">

            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-14 h-14 rounded-full border border-[#D6A84F]/60 bg-[#8B1E24]/30 p-1 overflow-hidden">
                <img
                  src={IMAGE_DATA.brand.logo}
                  alt={IMAGE_DATA.brand.alt}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-[#D6A84F] leading-tight">
                  Amritsari
                </h3>
                <p className="text-xs tracking-[0.18em] uppercase text-white/70 mt-1">
                  Chhole Kulche
                </p>
              </div>
            </Link>

            <p className="text-sm text-white/55 leading-7">
              Bringing the authentic flavours of Amritsar
              to your plate. Fresh ingredients, traditional
              recipes and a taste worth remembering.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D6A84F]">
              <Utensils size={15} />
              <span className="tracking-wider uppercase">
                Made with Punjabi Love
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#D6A84F] mb-6">
              Explore
            </h4>

            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-[#D6A84F] transition-colors"
                  >
                    <ChevronRight
                      size={15}
                      className="text-[#D6A84F] group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#D6A84F] mb-6 flex items-center gap-2">
              <Clock size={18} />
              Opening Hours
            </h4>

            <div className="space-y-3">
              {RESTAURANT_DATA.hours.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 hover:border-[#D6A84F]/40 transition-colors"
                >
                  <p className="text-xs uppercase tracking-widest text-[#D6A84F] font-semibold">
                    {item.days}
                  </p>

                  <p className="text-sm font-semibold text-white mt-2">
                    {item.time}
                  </p>

                  <p className="text-xs text-white/40 mt-1">
                    {item.status}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/35 mt-4 leading-relaxed">
              {FOOTER_DATA.hoursDisclaimer}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#D6A84F] mb-6">
              Get In Touch
            </h4>

            <div className="space-y-4">

              {/* Call */}
              <a
                href={RESTAURANT_DATA.contact.phoneTel}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#D6A84F]/50 hover:bg-white/[0.07] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#D6A84F]/10 flex items-center justify-center shrink-0">
                  <Phone size={19} className="text-[#D6A84F]" />
                </div>

                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="text-sm font-bold mt-1 group-hover:text-[#D6A84F] transition-colors">
                    {RESTAURANT_DATA.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={RESTAURANT_DATA.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/[0.08] border border-[#25D366]/20 hover:border-[#25D366]/70 hover:bg-[#25D366]/[0.13] transition-all group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>

                <div>
                  <p className="text-xs text-[#25D366]/80 uppercase tracking-wider">
                    WhatsApp Enquiry
                  </p>
                  <p className="text-sm font-bold mt-1 text-white">
                    {RESTAURANT_DATA.contact.phoneDisplay}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-[#25D366] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>

              {/* Google Maps */}
              <a
                href={RESTAURANT_DATA.geo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-4 rounded-xl bg-[#8B1E24]/20 border border-[#8B1E24]/40 hover:border-[#D6A84F]/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#D6A84F]" />
                  <span className="text-sm font-semibold">
                    Get Directions
                  </span>
                </div>

                <ExternalLink
                  size={16}
                  className="text-[#D6A84F] group-hover:translate-x-1 transition-transform"
                />
              </a>

            </div>

            {/* Address */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-[#D6A84F] font-semibold mb-2">
                Visit Our Restaurant
              </p>
              <p className="text-sm text-white/50 leading-6">
                {RESTAURANT_DATA.address.full}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} {FOOTER_DATA.copyrightSuffix}
          </p>

          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>Crafted with</span>
            <Heart
              size={14}
              className="text-[#C94343] fill-[#C94343]"
            />
            <span>{FOOTER_DATA.bottomTagline}</span>
          </div>

          <Link
            to="/"
            className="text-xs text-[#D6A84F] hover:text-white transition-colors"
          >
            Back to Home ↑
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
