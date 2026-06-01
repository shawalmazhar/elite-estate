"use client";

import React, { useState, use, useEffect } from "react";
import { propertiesData, Property } from "@/data/properties";
import { notFound } from "next/navigation";
import {
  Compass, BedDouble, Bath, Maximize, Calendar, ArrowRight,
  ShieldAlert, Sparkles, MapPin, CheckCircle, ChevronLeft, HelpCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Find matching property
  const property = propertiesData.find((p) => p.id === id);

  // States
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFloorPlan, setActiveFloorPlan] = useState("Level 1");
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  
  // Booking Form States
  const [bookingDate, setBookingDate] = useState("");
  const [conciergeAddons, setConciergeAddons] = useState<string[]>([]);
  const [personalMessage, setPersonalMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Set default level if property changes
  useEffect(() => {
    if (property && property.floorPlans.length > 0) {
      setActiveFloorPlan(property.floorPlans[0].level);
    }
  }, [property]);

  if (!property) {
    notFound();
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 2000);
  };

  const toggleAddon = (addon: string) => {
    if (conciergeAddons.includes(addon)) {
      setConciergeAddons(conciergeAddons.filter((a) => a !== addon));
    } else {
      setConciergeAddons([...conciergeAddons, addon]);
    }
  };

  // 1. SPECIFIC BLUEPRINT HOTSPOTS FOR THE SKY PENTHOUSE
  // Renders coordinate-based hotspots on the interactive SVGs
  const renderHotspots = () => {
    if (id !== "the-sky-penthouse") return null;

    if (activeFloorPlan === "Level 1") {
      return (
        <>
          {/* Lounge Hotspot */}
          <div
            className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
            onMouseEnter={() => setHoveredHotspot("Grand Reception Salon: 1,450 sq. ft. room featuring double-height 28ft ceilings and floor-to-ceiling panoramic glass faces.")}
            onMouseLeave={() => setHoveredHotspot(null)}
          >
            <div className="w-5 h-5 rounded-full bg-elite-gold border border-matte-black cursor-pointer flex items-center justify-center relative">
              <span className="absolute inset-0 bg-elite-gold/30 rounded-full animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-matte-black" />
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-matte-black/90 border border-white/10 px-2 py-1 rounded text-[9px] uppercase tracking-widest text-elite-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
              Reception Salon
            </span>
          </div>

          {/* Culinary Hotspot */}
          <div
            className="absolute top-[65%] left-[70%] -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
            onMouseEnter={() => setHoveredHotspot("Bespoke Culinary Suite: Pro-grade Gaggenau appliances, dual prep islands, integrated cold chambers, and walk-in butler prep butler pantry.")}
            onMouseLeave={() => setHoveredHotspot(null)}
          >
            <div className="w-5 h-5 rounded-full bg-elite-gold border border-matte-black cursor-pointer flex items-center justify-center relative">
              <span className="absolute inset-0 bg-elite-gold/30 rounded-full animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-matte-black" />
            </div>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-matte-black/90 border border-white/10 px-2 py-1 rounded text-[9px] uppercase tracking-widest text-elite-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
              Culinary Suite
            </span>
          </div>
        </>
      );
    }

    if (activeFloorPlan === "Level 2") {
      return (
        <>
          {/* Master Bedroom Hotspot */}
          <div
            className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
            onMouseEnter={() => setHoveredHotspot("Owner's Sanctuary Suite: Spans 2,200 sq. ft. including dual onyx dressing rooms, an private security vault, and dynamic morning juice bar.")}
            onMouseLeave={() => setHoveredHotspot(null)}
          >
            <div className="w-5 h-5 rounded-full bg-elite-gold border border-matte-black cursor-pointer flex items-center justify-center relative">
              <span className="absolute inset-0 bg-elite-gold/30 rounded-full animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-matte-black" />
            </div>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-matte-black/90 border border-white/10 px-2 py-1 rounded text-[9px] uppercase tracking-widest text-elite-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
              Master Sanctuary
            </span>
          </div>
        </>
      );
    }

    if (activeFloorPlan === "Rooftop Oasis") {
      return (
        <>
          {/* Pool Hotspot */}
          <div
            className="absolute top-[45%] left-[40%] -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
            onMouseEnter={() => setHoveredHotspot("Heated Infinity Oasis Pool: Floating acrylic basin creating an incredible illusion of swimming directly into the Manhattan clouds.")}
            onMouseLeave={() => setHoveredHotspot(null)}
          >
            <div className="w-5 h-5 rounded-full bg-elite-gold border border-matte-black cursor-pointer flex items-center justify-center relative">
              <span className="absolute inset-0 bg-elite-gold/30 rounded-full animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-matte-black" />
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-matte-black/90 border border-white/10 px-2 py-1 rounded text-[9px] uppercase tracking-widest text-elite-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
              Infinity Sky Pool
            </span>
          </div>

          {/* Helipad Hotspot */}
          <div
            className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
            onMouseEnter={() => setHoveredHotspot("Private Helipad Terminal: Structural rooftop boarding terminal cleared for Sikorsky S-76 and light twin private aircraft transfers.")}
            onMouseLeave={() => setHoveredHotspot(null)}
          >
            <div className="w-5 h-5 rounded-full bg-elite-gold border border-matte-black cursor-pointer flex items-center justify-center relative">
              <span className="absolute inset-0 bg-elite-gold/30 rounded-full animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-matte-black" />
            </div>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-matte-black/90 border border-white/10 px-2 py-1 rounded text-[9px] uppercase tracking-widest text-elite-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
              Helipad Terminal
            </span>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className="w-full bg-matte-black min-h-screen pt-32 pb-24 text-off-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-off-white/50 hover:text-elite-gold transition-colors duration-300 mb-12"
        >
          <ChevronLeft className="w-4 h-4" />
          Return to Portfolio
        </Link>

        {/* 1. HERO SHOWCASE DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Premium HD Showcase Carousel (Ken Burns style) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-[550px] w-full overflow-hidden border border-white/10 rounded-sm gold-glow">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  src={property.galleryImages[activeImageIndex] || property.heroImage}
                  alt={`${property.name} gallery image ${activeImageIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent pointer-events-none" />
              
              {/* Pagination controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20">
                <span className="font-sans text-[10px] text-off-white/60 tracking-wider">
                  Gallery Showcase {activeImageIndex + 1} / {property.galleryImages.length}
                </span>
                
                <div className="flex gap-2">
                  {property.galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                        activeImageIndex === idx
                          ? "bg-elite-gold border-elite-gold scale-125"
                          : "border-white/40 bg-transparent hover:border-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-4">
              {property.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-24 overflow-hidden border rounded-sm transition-all duration-300 ${
                    activeImageIndex === idx
                      ? "border-elite-gold scale-[1.02]"
                      : "border-white/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Summary Cards */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-elite-gold font-semibold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-elite-gold" />
                {property.location}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide leading-tight">
                {property.name}
              </h1>
              <div className="flex items-baseline gap-4 pt-2">
                <span className="font-serif text-3xl text-elite-gold font-light">
                  {property.price}
                </span>
                <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-off-white/40">
                  Private Placement Registry
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-off-white/60 leading-relaxed border-l-2 border-elite-gold/50 pl-4 py-1">
              {property.longDescription}
            </p>

            {/* Mini Specs Row */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 font-sans text-xs">
              <div>
                <span className="block text-off-white/40 text-[9px] uppercase tracking-widest mb-1.5">
                  Beds
                </span>
                <span className="font-serif text-lg text-off-white font-medium">
                  {property.bedrooms} Suites
                </span>
              </div>
              <div>
                <span className="block text-off-white/40 text-[9px] uppercase tracking-widest mb-1.5">
                  Baths
                </span>
                <span className="font-serif text-lg text-off-white font-medium">
                  {property.bathrooms} Salons
                </span>
              </div>
              <div>
                <span className="block text-off-white/40 text-[9px] uppercase tracking-widest mb-1.5">
                  Total Footprint
                </span>
                <span className="font-serif text-lg text-off-white font-medium">
                  {property.area}
                </span>
              </div>
            </div>

            {/* Quick specifications checklists */}
            <div className="space-y-4">
              <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-elite-gold font-medium">
                Sanctuary Specifications
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs">
                {property.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-off-white/70">
                    <CheckCircle className="w-3.5 h-3.5 text-elite-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE FLOOR PLANS TABS & SVG BLUEPRINTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 border-t border-white/5 pt-20">
          {/* Left: SVG Blueprint Area */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold block mb-2 font-semibold">
                ARCHITECTURAL BLUEPRINTS
              </span>
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Interactive Floor Layouts
              </h2>
              <p className="font-sans text-xs text-off-white/50 leading-relaxed max-w-xl mt-2">
                Select a floor to render its vectors. Hover over the pulsing gold coordinates to inspect spatial dimensions and room-by-room materials listings.
              </p>
            </div>

            {/* Level Selector Tabs */}
            <div className="flex border-b border-white/5 pb-4 gap-6">
              {property.floorPlans.map((plan) => (
                <button
                  key={plan.level}
                  onClick={() => {
                    setActiveFloorPlan(plan.level);
                    setHoveredHotspot(null);
                  }}
                  className={`font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-300 pb-2 border-b-2 ${
                    activeFloorPlan === plan.level
                      ? "text-elite-gold border-elite-gold font-medium"
                      : "text-off-white/40 border-transparent hover:text-off-white"
                  }`}
                >
                  {plan.level}
                </button>
              ))}
            </div>

            {/* Immersive SVG Container */}
            <div className="relative border border-white/10 rounded-sm bg-white/[0.01] p-10 h-[480px] flex items-center justify-center overflow-hidden">
              {/* Engineering Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {/* Asymmetric Vector Walls */}
              <svg className="w-full h-full max-w-[500px] max-h-[350px] overflow-visible text-elite-gold/30 stroke-current stroke-1 pointer-events-none" viewBox="0 0 100 100">
                <rect x="5" y="5" width="90" height="90" fill="none" className="stroke-elite-gold/15" />
                
                {/* Structural Walls depending on levels */}
                {activeFloorPlan === "Level 1" && (
                  <>
                    <path d="M 5,35 H 95 M 5,65 H 95 M 35,5 V 95 M 65,5 V 95" fill="none" />
                    <circle cx="50" cy="50" r="10" fill="none" className="stroke-elite-gold/10 stroke-dasharray" strokeDasharray="2,2" />
                  </>
                )}
                {activeFloorPlan === "Level 2" && (
                  <>
                    <path d="M 5,25 H 95 M 5,75 H 95 M 50,5 V 95" fill="none" />
                    <line x1="20" y1="25" x2="20" y2="75" />
                    <line x1="80" y1="25" x2="80" y2="75" />
                  </>
                )}
                {activeFloorPlan === "Rooftop Oasis" && (
                  <>
                    <circle cx="40" cy="45" r="15" fill="none" />
                    <path d="M 5,30 H 95 M 70,30 V 95" fill="none" />
                  </>
                )}
              </svg>

              {/* Renders Custom Pulse Hotspots */}
              {renderHotspots()}

              {/* Blueprint Description Overlay */}
              <div className="absolute bottom-5 left-5 right-5 glassmorphic p-4 border border-white/5 max-w-sm pointer-events-none">
                <span className="font-sans text-[8px] uppercase tracking-widest text-elite-gold block mb-1">
                  Floor Overview
                </span>
                <p className="font-sans text-[10px] text-off-white/60 leading-relaxed">
                  {property.floorPlans.find((fp) => fp.level === activeFloorPlan)?.description}
                </p>
              </div>

              {/* Hotspot Hover Box */}
              <AnimatePresence>
                {hoveredHotspot && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-5 left-5 right-5 glassmorphic-gold p-4 border border-elite-gold/20 text-center pointer-events-none z-30 shadow-2xl"
                  >
                    <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-elite-gold font-bold block mb-1">
                      ACTIVE COORD SCAN
                    </span>
                    <p className="font-sans text-[11px] text-off-white leading-relaxed font-medium">
                      {hoveredHotspot}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Technical specifications list */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-serif text-xl text-off-white border-b border-white/5 pb-3">
              Materials & Engineering
            </h3>
            <ul className="space-y-4 font-sans text-xs">
              {property.specs.map((spec, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-off-white/40">{spec.label}</span>
                  <span className="text-off-white font-medium text-right max-w-[180px]">
                    {spec.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. PRIVATE RESERVATION / VIP BOOKING FORM */}
        <div className="glassmorphic border border-white/10 rounded-sm p-8 md:p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl gold-glow relative z-10">
          <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full border border-elite-gold/30 bg-elite-gold/10 flex items-center justify-center text-elite-gold mx-auto mb-4 animate-pulse">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-elite-gold font-bold block">
                VIP APPLICATION RECEIVED
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-off-white font-light">
                Inquiry Logged
              </h3>
              <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                An Elite Estate Private Representative will review your portfolio credentials within 2 hours. A secure communication channel is being established.
              </p>
              <div className="pt-4">
                <Link
                  href="/properties"
                  className="px-6 py-3 bg-white text-matte-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-elite-gold hover:text-matte-black transition-all duration-300 rounded-sm"
                >
                  Return to Index
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              <div className="text-center space-y-3">
                <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold block">
                  VIP SCHEDULING
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-off-white font-light tracking-wide">
                  Private Showing Application
                </h3>
                <p className="font-sans text-xs text-off-white/40 leading-relaxed max-w-xl mx-auto">
                  A showing requires vetted escrow availability or institutional verification. Please indicate your targets.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs pt-4">
                {/* Full name input */}
                <div className="space-y-2">
                  <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sterling K. Archer"
                    className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                    Secure Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sterling@archer-holdings.ch"
                    className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                  />
                </div>

                {/* Target Date selection */}
                <div className="space-y-2">
                  <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                    Target Showing Date
                  </label>
                  <div className="relative flex items-center border border-white/10 rounded-sm bg-matte-black/60 focus-within:border-elite-gold/50 transition-colors pr-3">
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-transparent border-0 outline-0 px-4 py-3 text-[11px] text-off-white cursor-pointer"
                    />
                    <Calendar className="w-4 h-4 text-off-white/30" />
                  </div>
                </div>

                {/* Investment Portfolio range */}
                <div className="space-y-2">
                  <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                    Vetted Liquidity Range
                  </label>
                  <select
                    required
                    className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors cursor-pointer text-off-white"
                  >
                    <option value="" disabled selected className="text-off-white/40">Select liquidity threshold</option>
                    <option value="1">$10,000,000 - $25,000,000</option>
                    <option value="2">$25,000,000 - $50,000,000</option>
                    <option value="3">$50,000,000 - $100,000,000</option>
                    <option value="4">$100,000,000+</option>
                  </select>
                </div>
              </div>

              {/* Concierge requirements */}
              <div className="space-y-3 font-sans text-xs">
                <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                  Private Concierge Add-ons (Optional)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Private Helipad Transit",
                    "Direct Jet Charter",
                    "Yacht Docking Access",
                    "Dedicated Chef Tasting",
                  ].map((addon) => {
                    const isSelected = conciergeAddons.includes(addon);
                    return (
                      <button
                        key={addon}
                        type="button"
                        onClick={() => toggleAddon(addon)}
                        className={`p-3 border rounded-sm text-[10px] text-center font-medium uppercase tracking-wider transition-all duration-300 ${
                          isSelected
                            ? "bg-elite-gold/15 border-elite-gold text-elite-gold"
                            : "border-white/5 bg-matte-black/30 text-off-white/50 hover:border-white/20"
                        }`}
                      >
                        {addon}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-2 font-sans text-xs">
                <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                  Confidential Message & Escrow Coordinates
                </label>
                <textarea
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  placeholder="Provide any institutional credentials, advisor coordinates, or specific hospitality requirements."
                  rows={4}
                  className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="relative px-10 py-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-matte-black bg-elite-gold hover:bg-white transition-all duration-500 rounded-sm font-semibold flex items-center gap-3 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-matte-black border-t-transparent rounded-full animate-spin" />
                      Vetting Credentials...
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="w-4 h-4" />
                      Submit Private Application
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
