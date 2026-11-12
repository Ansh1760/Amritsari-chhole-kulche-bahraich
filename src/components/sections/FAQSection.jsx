import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../../data/faq';
import { SectionHeading } from '../common/SectionHeading';

/**
 * Frequently Asked Questions Section
 * Dynamically renders FAQs from src/data/faq.js with accessible accordion controls.
 */
export function FAQSection() {
  const [openId, setOpenId] = useState(FAQ_DATA.items[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-20 bg-ivory text-charcoal border-t border-gold/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline={FAQ_DATA.tagline}
          title={FAQ_DATA.title}
          hindiTitle={FAQ_DATA.hindiTitle}
          description={FAQ_DATA.subtitle}
          theme="light"
        />

        <div className="mt-10 sm:mt-12 space-y-3.5">
          {FAQ_DATA.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white/90 rounded-2xl border border-gold/35 overflow-hidden shadow-sm transition-colors duration-200 hover:border-gold"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
                >
                  <span className="flex items-center gap-3 font-serif font-bold text-base sm:text-lg text-charcoal">
                    <HelpCircle className="w-5 h-5 text-maroon shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-maroon shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-brown/90 leading-relaxed border-t border-gold/15">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

