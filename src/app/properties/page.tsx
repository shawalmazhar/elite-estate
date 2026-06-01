"use client";

import React, { useState, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import { propertiesData, Property } from "@/data/properties";
import { SlidersHorizontal, Search, RefreshCw, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertiesGridPage() {
  // Filter States
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(50000000);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Options
  const propertyTypes = ["All", "Penthouse", "Villa", "Studio"];
  const cities = ["All", "New York", "Dubai", "London"];

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return propertiesData.filter((property) => {
      const matchesType = selectedType === "All" || property.type === selectedType;
      const matchesCity = selectedCity === "All" || property.city === selectedCity;
      const matchesPrice = property.numericPrice <= maxPrice;
      const matchesSearch =
        property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesType && matchesCity && matchesPrice && matchesSearch;
    });
  }, [selectedType, selectedCity, maxPrice, searchQuery]);

  const resetFilters = () => {
    setSelectedType("All");
    setSelectedCity("All");
    setMaxPrice(50000000);
    setSearchQuery("");
  };

  return (
    <div className="w-full bg-matte-black min-h-screen pt-32 pb-24 text-off-white">
      {/* Decorative background grid */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Heading */}
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
              THE PORTFOLIO INDEX
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-off-white">
            Elite <span className="italic font-normal">Residences</span>
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed">
            Browse our limited collection of iconic penthouses, beachfront estates, and historical sanctuaries, fully vetted for absolute security and structural excellence.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="glassmorphic border border-white/10 p-6 md:p-8 rounded-sm mb-12 space-y-6 shadow-2xl gold-glow">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2 text-elite-gold">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium">
                Refine Selection
              </span>
            </div>
            
            {(selectedType !== "All" || selectedCity !== "All" || maxPrice !== 50000000 || searchQuery !== "") && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-off-white/40 hover:text-elite-gold transition-colors duration-300 font-sans text-[10px] uppercase tracking-wider"
              >
                <X className="w-3.5 h-3.5" />
                Clear Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-xs">
            {/* 1. Property Type Selector */}
            <div className="space-y-2">
              <label className="text-off-white/40 uppercase tracking-widest text-[10px] block">
                Residence Style
              </label>
              <div className="flex flex-wrap gap-1.5">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-2 rounded-sm border text-[10px] uppercase tracking-wider transition-all duration-300 ${
                      selectedType === type
                        ? "bg-elite-gold border-elite-gold text-matte-black font-semibold"
                        : "border-white/10 bg-transparent text-off-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. City Selector */}
            <div className="space-y-2">
              <label className="text-off-white/40 uppercase tracking-widest text-[10px] block">
                Global Location
              </label>
              <div className="flex flex-wrap gap-1.5">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-2 rounded-sm border text-[10px] uppercase tracking-wider transition-all duration-300 ${
                      selectedCity === city
                        ? "bg-elite-gold border-elite-gold text-matte-black font-semibold"
                        : "border-white/10 bg-transparent text-off-white/70 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Price Range Slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-off-white/40">Max Investment</span>
                <span className="text-elite-gold font-medium">
                  ${(maxPrice / 1000000).toFixed(1)}M
                </span>
              </div>
              <input
                type="range"
                min={10000000}
                max={50000000}
                step={2000000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 bg-white/10 accent-elite-gold rounded-sm cursor-pointer outline-none"
              />
              <div className="flex justify-between text-[8px] text-off-white/30 font-mono">
                <span>$10.0M</span>
                <span>$50.0M</span>
              </div>
            </div>

            {/* 4. Text Search input */}
            <div className="space-y-2">
              <label className="text-off-white/40 uppercase tracking-widest text-[10px] block">
                Keyword Search
              </label>
              <div className="flex items-center border border-white/10 rounded-sm px-3 py-2 bg-matte-black/40 group focus-within:border-elite-gold/50 transition-colors duration-300">
                <Search className="w-3.5 h-3.5 text-off-white/30 mr-2 group-focus-within:text-elite-gold transition-colors" />
                <input
                  type="text"
                  placeholder="e.g. Penthouse, Central Park"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-0 outline-0 text-[11px] text-off-white placeholder-off-white/30 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8 text-xs font-sans text-off-white/40">
          <span>
            Showing {filteredProperties.length} of {propertiesData.length} Signature Listings
          </span>
        </div>

        {/* Properties Grid with Framer Motion AnimatePresence */}
        <AnimatePresence mode="popLayout">
          {filteredProperties.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <PropertyCard property={property} index={idx} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glassmorphic border border-white/5 p-16 rounded-sm text-center max-w-xl mx-auto mt-12 space-y-4"
            >
              <RefreshCw className="w-8 h-8 text-elite-gold/60 animate-spin mx-auto mb-2" />
              <h3 className="font-serif text-2xl text-off-white font-light">
                No Sanctuaries Found
              </h3>
              <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                Adjust your investment range, city coordinates, or style descriptors to reveal other off-market assets.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 px-6 py-2.5 bg-elite-gold text-matte-black font-sans text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-white transition-all duration-300"
              >
                Reset Search Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
