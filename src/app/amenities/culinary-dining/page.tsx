import React from "react";
import Link from "next/link";
import { UtensilsCrossed, ShieldCheck, Compass, ArrowLeft, Star, Wine } from "lucide-react";

export default function CulinaryDiningPage() {
  const culinarySpecs = [
    { label: "Michelin-Caliber Chefs", value: "Curated worldwide database" },
    { label: "In-Residence Prep Capacity", value: "Up to 36 formal guests" },
    { label: "Wine Cellar Infrastructure", value: "Automated HSL Climate + Humidity" },
    { label: "Meat Aging Cabinets", value: "Custom dry-aging glass chambers" },
    { label: "Ventilation System", value: "18-Jet recessed quiet exhaust" }
  ];

  return (
    <div className="w-full bg-matte-black min-h-screen pt-32 pb-24 text-off-white relative">
      {/* Visual background coordinate grid */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.02] pointer-events-none" />

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
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
              CULINARY PRIVILEGES INDEX
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-off-white">
            Epicurean <span className="italic font-normal">Dining</span> Suites
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed">
            From intimate weekly dinners to formal grand banquets, our custom culinary suites combine absolute commercial prep standards with beautiful biophilic home design, directed by Michelin-vetted masters.
          </p>
        </div>

        {/* Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: HD Image & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-[480px] w-full overflow-hidden border border-white/10 rounded-sm shadow-2xl gold-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Culinary Kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent pointer-events-none" />
            </div>

            <p className="font-serif text-2xl text-off-white/80 italic leading-relaxed pl-6 border-l-2 border-elite-gold">
              "A workspace crafted to link grand formal entertaining with intimate epicurean craftsmanship."
            </p>
          </div>

          {/* Right Column: Specifications Table & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-off-white font-medium">
                Culinary Engineering
              </h3>
              <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                Residences feature custom primary and wet kitchens equipped with professional Gaggenau appliances, sub-zero refrigeration grids, and custom marble prep islands.
              </p>
            </div>

            {/* Specifications list */}
            <ul className="space-y-3 font-sans text-xs border-y border-white/5 py-6">
              {culinarySpecs.map((spec) => (
                <li key={spec.label} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-off-white/40">{spec.label}</span>
                  <span className="text-off-white font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>

            {/* Key Features */}
            <div className="space-y-4 font-sans text-xs">
              <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-elite-gold font-medium">
                Private Wine Registry
              </h4>
              <ul className="space-y-2 text-off-white/70">
                <li className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-elite-gold shrink-0" />
                  <span>Climate-controlled cabinets monitored via central Savant AI panels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-elite-gold shrink-0" />
                  <span>Sourcing access to rare vintage champagne and Bordeaux vaults</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-elite-gold shrink-0" />
                  <span>Glass-fronted design creating a striking architectural statement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="glassmorphic border border-white/10 p-8 md:p-12 lg:p-16 max-w-4xl mx-auto rounded-sm text-center shadow-2xl gold-glow relative">
          <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-elite-gold font-bold">
              EPICUREAN PRIVATE OFFICE
            </span>
            <h3 className="font-serif text-3xl text-off-white font-light tracking-wide">
              Request Private Chef Vetting
            </h3>
            <p className="font-sans text-xs text-off-white/50 leading-relaxed">
              Vetted owners receive priority matching with our Michelin-certified culinary coordinators. Schedule in-residence prep and tailored menus before move-in.
            </p>
            <div className="pt-2">
              <Link
                href="/inquire"
                className="px-8 py-3 bg-elite-gold text-matte-black font-sans text-[10px] font-bold uppercase tracking-[0.25em] inline-block hover:bg-white hover:text-matte-black transition-all duration-300 rounded-sm"
              >
                Inquire For Chef Registry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
