import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Calendar, Users, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../../data/restaurantData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { createBookingWhatsAppUrl } from '../../utils/whatsapp';

/**
 * Visit Us & Booking Enquiry Section
 * Integrates verified restaurant coordinates, Google Maps, Call/WhatsApp quick buttons,
 * and the complete frontend WhatsApp-based booking enquiry form.
 */
export function VisitSection() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    instructions: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState(null);

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    // Indian mobile number validation: 10 digits, starts with 6-9
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please choose a preferred time slot.';
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Number of guests must be at least 1.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const whatsappUrl = createBookingWhatsAppUrl(formData);
    setSubmittedWhatsAppUrl(whatsappUrl);

    // Open WhatsApp in a new tab with prefilled message
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book-meal" className="py-16 sm:py-24 bg-charcoal text-ivory relative overflow-hidden bg-punjabi-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tagline="Find Us In Bahraich"
          title="VISIT US & BOOK YOUR MEAL"
          hindiTitle="पधारें • प्रामाणिक पंजाबी स्वाद का आनंद लें"
          description="Located near Tikora Mod on Lucknow Road, Hemariya, Bahraich. Walk in or send a quick table enquiry via WhatsApp."
          theme="dark"
        />

        {/* Quick Action Buttons Row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESTAURANT_DATA.contact.phoneTel}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-maroon text-ivory font-semibold text-sm uppercase tracking-wider border border-gold/50 shadow-md hover:shadow-maroon-glow hover:bg-maroon-dark transition-all"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call Now: {RESTAURANT_DATA.contact.phoneDisplay}</span>
          </a>

          <a
            href={RESTAURANT_DATA.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-sm uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={RESTAURANT_DATA.geo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-gradient text-charcoal font-bold text-sm uppercase tracking-wider shadow-brass-glow hover:brightness-105 transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Two-Column Grid: Left: Map & Info, Right: Booking Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols): Verified Location, Map, Timings */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address Card */}
            <div className="bg-charcoal-light p-6 sm:p-8 rounded-3xl border border-gold/30 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold/80 font-semibold block">
                    Verified Location
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ivory mt-0.5">
                    Amritsari Chhole Kulche
                  </h3>
                  <p className="text-ivory/80 text-sm mt-2 leading-relaxed">
                    {RESTAURANT_DATA.address.full}
                  </p>
                  <p className="text-xs text-gold/60 mt-1">
                    Coordinates: {RESTAURANT_DATA.geo.latitude}, {RESTAURANT_DATA.geo.longitude}
                  </p>
                </div>
              </div>

              {/* Service Timings (Editable) */}
              <div className="pt-6 border-t border-gold/20 space-y-3">
                <div className="flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Restaurant Service Hours</span>
                </div>
                
                {RESTAURANT_DATA.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-xs text-ivory/80 bg-charcoal/50 p-2.5 rounded-lg border border-gold/10">
                    <span className="font-medium text-ivory">{h.days}</span>
                    <span className="text-gold font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Interior Preview Card */}
              <div className="pt-4">
                <span className="text-xs uppercase tracking-wider text-gold/80 font-semibold block mb-2">
                  Dining Hall Preview
                </span>
                <div className="rounded-xl overflow-hidden border border-gold/30 aspect-[16/9]">
                  <img
                    src="/images/gallery/restaurant-interior.jpg"
                    alt="Restaurant Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border-2 border-gold/40 shadow-xl bg-charcoal-light h-72 relative">
              <iframe
                title="Restaurant Location Map"
                src={RESTAURANT_DATA.geo.embedUrl}
                className="w-full h-full border-0 filter contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column (7 cols): Book Your Meal Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-charcoal-light p-5 sm:p-8 md:p-10 rounded-3xl border-2 border-gold/40 shadow-2xl relative">
              
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                  Table & Meal Reservation Enquiry
                </span>
                <h3 className="font-serif text-3xl font-bold text-ivory">
                  BOOK YOUR MEAL
                </h3>
                <p className="text-sm text-ivory/70 mt-2">
                  Fill in your details below to generate an instant booking enquiry directly on our verified restaurant WhatsApp.
                </p>
              </div>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {submittedWhatsAppUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-4 rounded-2xl bg-[#25D366]/20 border border-[#25D366] text-ivory text-sm space-y-2"
                  >
                    <div className="flex items-center gap-2 text-[#25D366] font-bold">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>WhatsApp Enquiry Created Successfully!</span>
                    </div>
                    <p className="text-xs text-ivory/90 leading-relaxed">
                      Your booking details have been formatted and opened in WhatsApp. If it did not open automatically, click the button below:
                    </p>
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all mt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Open In WhatsApp Again</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field 1: Customer Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-ivory/90 mb-2">
                    Customer Name <span className="text-punjabi">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-ivory placeholder-ivory/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold ${
                      errors.name ? 'border-punjabi focus:ring-punjabi' : 'border-gold/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-punjabi-light flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Mobile Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-ivory/90 mb-2">
                    Indian Mobile Number <span className="text-punjabi">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-sm text-gold font-semibold select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      placeholder="98765 43210"
                      className={`w-full pl-14 pr-4 py-3 rounded-xl bg-charcoal border text-ivory placeholder-ivory/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold ${
                        errors.phone ? 'border-punjabi focus:ring-punjabi' : 'border-gold/30'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-punjabi-light flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Row: Date, Time & Number of Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-ivory/90 mb-2">
                      Booking Date <span className="text-punjabi">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-3 py-3 rounded-xl bg-charcoal border text-ivory text-sm focus:outline-none focus:ring-2 focus:ring-gold ${
                        errors.date ? 'border-punjabi focus:ring-punjabi' : 'border-gold/30'
                      }`}
                    />
                    {errors.date && (
                      <p className="mt-1 text-xs text-punjabi-light">{errors.date}</p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-ivory/90 mb-2">
                      Preferred Time <span className="text-punjabi">*</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3 py-3 rounded-xl bg-charcoal border text-ivory text-sm focus:outline-none focus:ring-2 focus:ring-gold ${
                        errors.time ? 'border-punjabi focus:ring-punjabi' : 'border-gold/30'
                      }`}
                    >
                      <option value="">Select Time</option>
                      <option value="10:00 AM">10:00 AM (Brunch)</option>
                      <option value="12:00 PM">12:00 PM (Lunch)</option>
                      <option value="01:30 PM">01:30 PM (Lunch)</option>
                      <option value="03:00 PM">03:00 PM (Afternoon)</option>
                      <option value="05:30 PM">05:30 PM (Evening Snacks)</option>
                      <option value="07:30 PM">07:30 PM (Dinner)</option>
                      <option value="09:00 PM">09:00 PM (Late Dinner)</option>
                      <option value="10:00 PM">10:00 PM (Dinner)</option>
                    </select>
                    {errors.time && (
                      <p className="mt-1 text-xs text-punjabi-light">{errors.time}</p>
                    )}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-ivory/90 mb-2">
                      Guests <span className="text-punjabi">*</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-3 py-3 rounded-xl bg-charcoal border border-gold/30 text-ivory text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Party)'].map((num) => (
                        <option key={num} value={num}>
                          {num} {typeof num === 'number' && num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-ivory/90 mb-2">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    rows={3}
                    placeholder="E.g. Extra butter on kulcha, mild spice for kids, window seating, special thali pre-order..."
                    className="w-full px-4 py-3 rounded-xl bg-charcoal border border-gold/30 text-ivory placeholder-ivory/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                {/* Disclaimer note */}
                <p className="text-xs text-ivory/60 italic leading-relaxed">
                  * Note: Clicking "BOOK YOUR MEAL" opens WhatsApp directly with your pre-filled enquiry to restaurant number <strong>917947141309</strong>. This is a direct WhatsApp-based enquiry.
                </p>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-charcoal font-bold text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-brass-glow hover:brightness-105 active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4 text-charcoal" />
                  <span>BOOK YOUR MEAL</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

