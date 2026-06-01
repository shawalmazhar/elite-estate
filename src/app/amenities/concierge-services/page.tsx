import React from "react";
import Link from "next/link";
import { Anchor, ShieldCheck, Cpu, UtensilsCrossed, ArrowLeft, Star, Compass } from "lucide-react";

export default function ConciergeServicesPage() {
  const services = [
    {
      icon: ShieldCheck,
      title: "24/7 Private Butler & Valet Squad",
      desc: "Fully vetted, multi-lingual executive staff trained under global five-star protocols. Handling all deliveries, coordinate private transport, dry cleaning registries, and off-market venue reservations with absolute discretion.",
      specs: ["Vetted Security Clearance", "Multi-lingual Support", "Uncompromised Discretion"]
    },
    {
      icon: Anchor,
      title: "Marine & Yacht Docking Charters",
      desc: "Instant access to private berthing slips and yacht charter scheduling. Private docks are equipped with high-capacity shore power and dedicated butler refilling stations, fully supported by our seaside concierge team.",
      specs: ["Deep-Water Berthing", "Fully Vetted Crews", "Private Beachside Lounges"]
    },
    {
      icon: UtensilsCrossed,
      title: "Bespoke Culinary Chef Services",
      desc: "Michelin-caliber private dining in the comfort of your residence. Chefs build customized weekly menus around your dietary constraints, backed by fully stocked dry-aging chambers and automated climate wine cellars.",
      specs: ["Michelin-Caliber Menus", "In-Residence Preparation", "Climate Wine Vetting"]
    },
    {
      icon: Cpu,
      title: "Savant AI Smart-Home Systems",
      desc: "Seamless, unified control of your entire domain. Access audio, triple-zone climate filtration, biometric locks, and security sensors using centralized glass touchpanels, customized mobile apps, or encrypted voice commands.",
      specs: ["Biometric Door Lock", "Triple-Zone Filtration", "Encrypted Voice Commands"]
    }
  ];

  return (
    <div className="w-full bg-matte-black min-h-screen pt-32 pb-24 text-off-white">
      {/* Decorative radial glow */}
      <div className="absolute top-0 right-0 w-full h-[60vh] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Back Link */}
        <Link
          href="/amenities"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-off-white/50 hover:text-elite-gold transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Amenities
        </Link>

        {/* Editorial Heading */}
        <div className="space-y-4 max-w-3xl mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
              ELITE HOSPITALITY PROTOCOLS
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-off-white">
            Elite <span className="italic font-normal">Concierge</span> & AI
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed">
            Experience absolute seamless operation. A fully staffed private hospitality framework and cutting-edge biophilic technology work silently to provide security, speed, and peace.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group border border-white/5 bg-deep-charcoal p-8 md:p-10 rounded-sm relative overflow-hidden shadow-xl hover:border-elite-gold/20 transition-all duration-500 gold-glow"
              >
                {/* Visual grid highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] group-hover:scale-105 transition-transform duration-[3s]" />
                
                <div className="relative space-y-6">
                  <div className="w-12 h-12 rounded-full border border-elite-gold/20 flex items-center justify-center text-elite-gold">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl text-off-white font-medium group-hover:text-elite-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-2">
                    {service.specs.map((spec) => (
                      <span key={spec} className="font-sans text-[10px] uppercase tracking-wider text-elite-gold/80 flex items-center gap-1.5">
                        <Star className="w-2.5 h-2.5 fill-elite-gold/30" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="glassmorphic border border-white/10 p-8 md:p-12 lg:p-16 max-w-4xl mx-auto rounded-sm text-center shadow-2xl gold-glow relative">
          <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-elite-gold font-bold">
              VIP ACCESS REGISTRY
            </span>
            <h3 className="font-serif text-3xl text-off-white font-light tracking-wide">
              Request VIP Concierge Privileges
            </h3>
            <p className="font-sans text-xs text-off-white/50 leading-relaxed">
              Vetted property owners receive absolute premium credentials. Unlock deep-water berths, private chef culinary schedules, and advanced voice-biometric Savant setups before move-in.
            </p>
            <div className="pt-2">
              <Link
                href="/inquire"
                className="px-8 py-3 bg-elite-gold text-matte-black font-sans text-[10px] font-bold uppercase tracking-[0.25em] inline-block hover:bg-white hover:text-matte-black transition-all duration-300 rounded-sm"
              >
                Inquire For Private Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
