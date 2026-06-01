"use client";

import React from "react";
import Link from "next/link";
import { Compass, BedDouble, Bath, Maximize, ArrowUpRight } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <div className="group relative overflow-hidden bg-deep-charcoal border border-white/5 rounded-sm shadow-2xl transition-all duration-700 ease-out hover:border-elite-gold/30 gold-glow">
      {/* Dynamic Image Wrapper with Zoom on Hover */}
      <div className="relative h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-matte-black/40 z-10 transition-opacity duration-500 group-hover:opacity-80" />
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.heroImage}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out scale-100 group-hover:scale-105"
        />

        {/* Top Floating Badge */}
        <div className="absolute top-5 left-5 z-20">
          <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.25em] bg-matte-black/60 backdrop-blur-md text-elite-gold px-3 py-1.5 border border-elite-gold/20 rounded-sm">
            {property.type}
          </span>
        </div>

        {/* Bottom Floating Premium Info Box */}
        <div className="absolute bottom-6 left-6 right-6 z-25 glassmorphic p-5 md:p-6 transition-all duration-500 border border-white/10 group-hover:border-elite-gold/30">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-elite-gold block mb-1">
                {property.location}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-off-white font-medium group-hover:text-elite-gold transition-colors duration-300">
                {property.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="font-serif text-lg text-elite-gold font-light block">
                {property.price}
              </span>
              <span className="font-sans text-[8px] tracking-[0.1em] uppercase text-off-white/40 block">
                Private Escrow
              </span>
            </div>
          </div>

          <p className="font-sans text-[11px] text-off-white/50 leading-relaxed mb-5 line-clamp-2">
            {property.description}
          </p>

          {/* Details Row */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-white/5 font-sans text-[10px] text-off-white/70">
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-elite-gold/80" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-elite-gold/80" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <Maximize className="w-3.5 h-3.5 text-elite-gold/80" />
              <span>{property.area}</span>
            </div>
          </div>

          {/* Hover Arrow to indicate action */}
          <div className="absolute bottom-5 right-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <div className="w-8 h-8 rounded-full border border-elite-gold/30 flex items-center justify-center text-elite-gold bg-matte-black/40">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Link overlay */}
      <Link href={`/properties/${property.id}`} className="absolute inset-0 z-30" aria-label={`View ${property.name}`} />
    </div>
  );
}
