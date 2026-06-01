import React from "react";
import Link from "next/link";
import { Sparkles, Anchor, ShieldCheck, HeartPulse, ChevronRight, Activity } from "lucide-react";

export default function AmenitiesPage() {
  const lifestyleSectors = [
    {
      icon: HeartPulse,
      title: "Wellness & Spa Sanctuaries",
      description: "Infinite water lines, private hydrotherapy caverns, and sensory treatment sanctuaries designed for cellular rejuvenation.",
      link: "/amenities/wellness-spa",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      tag: "SANCTUARY CARE"
    },
    {
      icon: ShieldCheck,
      title: "Elite Concierge & Butler Care",
      description: "24/7 personalized care, multi-lingual private valets, off-market reservation management, and private jet charter coordination.",
      link: "/amenities/concierge-services",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      tag: "ELITE OPERATIONS"
    },
    {
      icon: Anchor,
      title: "Marine & Yacht Club Privileges",
      description: "Dedicated deep-water slips, private yacht berthing rights, luxury yacht charters, and fully staffed seaside pavilions.",
      link: "/amenities/yacht-club",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80",
      tag: "OCEAN NAVIGATION"
    },
    {
      icon: Sparkles,
      title: "Epicurean Culinary Directors",
      description: "Bespoke in-residence kitchens directed by Michelin-starred culinary artists, fully supported by climate-controlled private cellars.",
      link: "/amenities/culinary-dining",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      tag: "MICHELIN DINING"
    }
  ];

  return (
    <div className="w-full bg-matte-black min-h-screen pt-32 pb-24 text-off-white">
      {/* Grid background */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Heading */}
        <div className="space-y-4 max-w-3xl mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
              THE HOSPITALITY LAYER
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-off-white">
            Amenities & <span className="italic font-normal">Lifestyle</span>
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed">
            Beyond standard square footage lies a highly sophisticated, fully integrated five-star hospitality infrastructure designed to simplify existence and elevate the everyday experience.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {lifestyleSectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="group flex flex-col md:flex-row items-stretch border border-white/5 bg-deep-charcoal rounded-sm overflow-hidden shadow-xl hover:border-elite-gold/20 transition-all duration-500 gold-glow"
              >
                {/* Image Section */}
                <div className="md:w-1/2 relative min-h-[250px] overflow-hidden">
                  <div className="absolute inset-0 bg-matte-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-sans text-[8px] tracking-widest font-semibold uppercase text-elite-gold bg-matte-black/60 px-2 py-1 border border-elite-gold/20 rounded-sm">
                      {sector.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full border border-elite-gold/20 flex items-center justify-center text-elite-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-2xl text-off-white font-medium group-hover:text-elite-gold transition-colors duration-300">
                      {sector.title}
                    </h3>
                    <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={sector.link}
                      className="font-sans text-[10px] uppercase tracking-[0.25em] text-elite-gold inline-flex items-center gap-1 group/btn"
                    >
                      Explore Space
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 p-8 md:p-12 lg:p-16 glassmorphic border border-white/5 text-center max-w-4xl mx-auto rounded-sm gold-glow">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-elite-gold font-bold">
              AI SMART HOMES
            </span>
            <h3 className="font-serif text-3xl text-off-white font-light tracking-wide">
              Fully Integrated Intelligence
            </h3>
            <p className="font-sans text-xs text-off-white/50 leading-relaxed">
              Every home integrates a private Savant AI control center. From voice-triggered blackout shades to triple-zone climate filtration and keyless security biometrics, intelligence works silently in the background.
            </p>
            <div className="pt-2">
              <Link
                href="/amenities/concierge-services"
                className="px-8 py-3 border border-elite-gold/50 hover:bg-elite-gold hover:text-matte-black text-elite-gold font-sans text-[10px] font-bold uppercase tracking-[0.25em] inline-block transition-all duration-300 rounded-sm"
              >
                Learn About Smart Tech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
