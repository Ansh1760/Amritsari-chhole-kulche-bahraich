import React from 'react';
import { Flame, ShieldCheck, Award, Users } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';

const ICON_MAP = {
  Flame,
  ShieldCheck,
  Award,
  Users
};

/**
 * Why Choose Us / Services Section
 * Dynamically renders restaurant culinary pillars from src/data/services.js.
 */
export function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF8] text-charcoal border-y border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline={SERVICES_DATA.tagline}
          title={SERVICES_DATA.title}
          hindiTitle={SERVICES_DATA.hindiTitle}
          description={SERVICES_DATA.subtitle}
          theme="light"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.items.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Flame;
            return (
              <div
                key={service.id}
                className="bg-ivory/70 rounded-2xl p-6 border border-gold/35 shadow-sm hover:shadow-md hover:border-gold transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-maroon text-gold flex items-center justify-center mb-4 border border-gold/50">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="font-hindi text-xs text-punjabi font-semibold tracking-wide">
                  {service.hindi}
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mt-1">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-brown/85 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

