import React from "react";
import Link from "next/link";
import { Anchor, ShieldCheck, Compass, ArrowLeft, Star, Globe } from "lucide-react";

export default function YachtClubPage() {
  const yachtSpecs = [
    { label: "Deep-Water Berthing Depth", value: "Up to 24 feet" },
    { label: "Maximum Yacht Footprint", value: "110 feet LOA" },
    { label: "Power Infrastructure", value: "100-Amp 3-Phase Shore Power" },
    { label: "Refuel & Custom Vetting", value: "In-berth private service lines" },
    { label: "Seaside Butler Gate", value: "24/7 private gate direct access" }
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
              MARINE PRIVILEGES INDEX
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-off-white">
            The Yacht <span className="italic font-normal">Club</span> Docks
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed">
            Suspended along clean, deep coastal waters, our private berthing slips offer uncompromised convenience, high-capacity shore infrastructure, and seamless secure transitions for private yacht owners.
          </p>
        </div>

        {/* Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: HD Image & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-[480px] w-full overflow-hidden border border-white/10 rounded-sm shadow-2xl gold-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Yacht Docking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent pointer-events-none" />
            </div>

            <p className="font-serif text-2xl text-off-white/80 italic leading-relaxed pl-6 border-l-2 border-elite-gold">
              "A seamless harbor designed to link ocean-going vessels with private beachfront portals."
            </p>
          </div>

          {/* Right Column: Specifications Table & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-off-white font-medium">
                Berthing Coordinates
              </h3>
              <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                Slips are secured inside private wave-attenuated basins. Vetted residents have absolute ownership or priority lease privileges.
              </p>
            </div>

            {/* Specifications list */}
            <ul className="space-y-3 font-sans text-xs border-y border-white/5 py-6">
              {yachtSpecs.map((spec) => (
                <li key={spec.label} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-off-white/40">{spec.label}</span>
                  <span className="text-off-white font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>

            {/* Key Features */}
            <div className="space-y-4 font-sans text-xs">
              <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-elite-gold font-medium">
                Seaside Butler Services
              </h4>
              <ul className="space-y-2 text-off-white/70">
                <li className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-elite-gold shrink-0" />
                  <span>24/7 provisioning, custom laundry collections, and garbage sorting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-elite-gold shrink-0" />
                  <span>Dedicated crew lounges, private showers, and secure gear storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-elite-gold shrink-0" />
                  <span>Helipad-to-yacht secure transfer clearing logistics</span>
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
              PORT HARBOR REGISTRY
            </span>
            <h3 className="font-serif text-3xl text-off-white font-light tracking-wide">
              Secure Yacht Berthing Rights
            </h3>
            <p className="font-sans text-xs text-off-white/50 leading-relaxed">
              Vetting requests for docking slips are limited and issued on priority alignment. Vett your vessel parameters to reserve private berthing.
            </p>
            <div className="pt-2">
              <Link
                href="/inquire"
                className="px-8 py-3 bg-elite-gold text-matte-black font-sans text-[10px] font-bold uppercase tracking-[0.25em] inline-block hover:bg-white hover:text-matte-black transition-all duration-300 rounded-sm"
              >
                Inquire For Slip Vetting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
