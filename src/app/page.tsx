import ParallaxHero from "@/components/ParallaxHero";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import PropertyCard from "@/components/PropertyCard";
import { propertiesData } from "@/data/properties";
import { Compass, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-matte-black text-off-white">
      {/* 1. IMMERSIVE MULTI-LAYERED PARALLAX HERO SECTION */}
      <section className="relative z-10 w-full">
        <ParallaxHero />
      </section>

      {/* 2. HORIZONTAL FULL-SCREEN PARALLAX SHOWCASE SECTION */}
      <HorizontalShowcase />

      {/* 2. SIGNATURE COLLECTION MASONRY SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 bg-matte-black">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
                CURATED INVENTORIES
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-off-white">
              The Signature <span className="italic font-normal">Collection</span>
            </h2>
            <p className="font-sans text-sm text-off-white/50 leading-relaxed">
              Carved into the skies and oceans, these architectural masterworks represent the absolute zenith of modern luxury and physical privacy.
            </p>
          </div>
          
          <div>
            <Link
              href="/properties"
              className="font-sans text-xs uppercase tracking-[0.25em] text-elite-gold border-b border-elite-gold/30 hover:border-elite-gold pb-1.5 transition-all duration-300"
            >
              Explore Full Collection
            </Link>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          {/* Card 1: Elevated, spans 7 columns on desktop, full row on tablet */}
          <div className="md:col-span-2 lg:col-span-7 space-y-4">
            <div className="text-[10px] font-sans text-elite-gold tracking-widest uppercase mb-1">
              [ Flagship Triplex ]
            </div>
            <PropertyCard property={propertiesData[0]} index={0} />
          </div>

          {/* Card 2: Lower, offset, spans 5 columns on desktop, half width on tablet */}
          <div className="md:col-span-1 lg:col-span-5 lg:mt-24 space-y-4">
            <div className="text-[10px] font-sans text-elite-gold tracking-widest uppercase mb-1">
              [ Coastal Masterpiece ]
            </div>
            <PropertyCard property={propertiesData[1]} index={1} />
          </div>

          {/* Card 3: Spans 6 columns on desktop, half width on tablet */}
          <div className="md:col-span-1 lg:col-span-6 lg:-mt-12 space-y-4">
            <div className="text-[10px] font-sans text-elite-gold tracking-widest uppercase mb-1">
              [ Historical Modernity ]
            </div>
            <PropertyCard property={propertiesData[2]} index={2} />
          </div>

          {/* Right Editorial Block: Spans 6 columns, acts as a visual break */}
          <div className="md:col-span-2 lg:col-span-6 flex flex-col justify-center p-8 md:p-12 lg:p-20 glassmorphic border border-white/5 relative rounded-sm group overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] group-hover:scale-105 transition-transform duration-[4s]" />
            
            <div className="relative space-y-6">
              <div className="w-12 h-12 rounded-full border border-elite-gold/20 flex items-center justify-center text-elite-gold mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-off-white font-light leading-snug">
                "An uncompromising philosophy centered on vertical privacy and structural permanence."
              </h3>
              <p className="font-sans text-xs text-off-white/40 leading-relaxed uppercase tracking-[0.2em] border-l border-elite-gold pl-4">
                ELITE ESTATE ARCHITECTURAL ADVISORY BOARD
              </p>
              
              <div className="pt-4">
                <Link
                  href="/inquire"
                  className="px-6 py-3 bg-elite-gold text-matte-black font-sans text-[10px] font-bold uppercase tracking-[0.25em] inline-block hover:bg-white hover:text-matte-black transition-all duration-300 rounded-sm"
                >
                  Schedule Private Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
