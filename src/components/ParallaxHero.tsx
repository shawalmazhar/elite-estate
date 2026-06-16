"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Compass, Award, ShieldCheck, MapPin } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80", // Sky Penthouse
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80", // Marina Luminary
];

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgImage, setBgImage] = useState(heroImages[0]);

  useEffect(() => {
    setBgImage(heroImages[Math.floor(Math.random() * heroImages.length)]);
  }, []);

  // Bind useScroll to the container - setting to 500vh for a very long, epic scroll experience
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // --- LAYER 1: BACKGROUND (Slow zoom, shift, and blur) ---
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const blurBg = useTransform(
    scrollYProgress, 
    [0, 0.4, 0.7, 1], 
    ["blur(0px)", "blur(2px)", "blur(4px)", "blur(6px)"]
  );

  // --- STAGE 1: Main Title "The Grand Horizon" (Visible 0% -> 25%) ---
  const opacityStage1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const yStage1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-40%"]);
  const scaleStage1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

  // --- STAGE 2: "Crafted Permanence" (Visible 28% -> 55%) ---
  const opacityStage2 = useTransform(scrollYProgress, [0.25, 0.32, 0.5, 0.55], [0, 1, 1, 0]);
  const yStage2 = useTransform(scrollYProgress, [0.25, 0.32, 0.5, 0.55], ["60px", "0px", "0px", "-60px"]);

  // --- STAGE 3: "A Curated Trilogy" specs (Visible 58% -> 88%) ---
  const opacityStage3 = useTransform(scrollYProgress, [0.55, 0.62, 0.82, 0.88], [0, 1, 1, 0]);
  const yStage3 = useTransform(scrollYProgress, [0.55, 0.62, 0.82, 0.88], ["80px", "0px", "0px", "-80px"]);

  // --- GENERAL ARCHITECTURAL GRID LAYERS (Parallax speed shifts) ---
  const yArchitectural = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yGridLines = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const scrollPastHero = () => {
    const container = containerRef.current;
    if (container) {
      window.scrollTo({
        top: container.offsetTop + container.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full bg-matte-black select-none overflow-visible"
    >
      {/* Sticky container acting as our viewport window */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10 flex items-center justify-center">
        
        {/* LAYER 1: Deepest Background (Luxury Villa Exterior at Dusk) */}
        <motion.div
          style={{ 
            y: yBg, 
            scale: scaleBg,
            filter: blurBg,
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/50 via-transparent to-matte-black z-10" />
          <img
            src={bgImage}
            alt="Elite Estate Grand Villa Background"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </motion.div>

        {/* LAYER 2: Architectural Details/Overlay Grid Lines */}
        <motion.div 
          style={{ y: yArchitectural }}
          className="absolute inset-0 z-15 pointer-events-none flex items-center justify-center"
        >
          {/* Subtle thin golden geometric frame structure outlining the viewport */}
          <div className="w-[92%] h-[84%] border border-elite-gold/10 relative rounded-sm flex items-center justify-center">
            {/* Corner highlights */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-elite-gold/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-elite-gold/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-elite-gold/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-elite-gold/30" />
            
            {/* Internal decorative axis line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-elite-gold/5" />
          </div>
        </motion.div>

        {/* LAYER 3: Decorative fine grids drifting slowly */}
        <motion.div
          style={{ y: yGridLines }}
          className="absolute inset-0 z-12 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:100px_100px]"
        />

        {/* ============================================================== */}
        {/* STAGE 1: INTRODUCTION HERO (0% -> 25%) */}
        {/* ============================================================== */}
        <motion.div
          style={{ opacity: opacityStage1, y: yStage1, scale: scaleStage1 }}
          className="absolute z-25 text-center px-6 w-full max-w-5xl pointer-events-none flex flex-col items-center justify-center"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-elite-gold/50" />
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] uppercase text-elite-gold font-semibold">
                A Private Sanctuary Awaits
              </span>
              <span className="w-8 h-[1px] bg-elite-gold/50" />
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-[0.08em] text-off-white leading-[1.1] relative">
              The Grand Horizon
            </h1>

            <p className="font-sans text-xs sm:text-sm text-off-white/60 tracking-wider max-w-lg mx-auto font-light leading-relaxed">
              Experience architectural masterpieces where structural brilliance meets the ultimate horizon.
            </p>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* STAGE 2: DETAILED INSIGHT / PHILOSOPHY (32% -> 50%) */}
        {/* ============================================================== */}
        <motion.div
          style={{ opacity: opacityStage2, y: yStage2 }}
          className="absolute z-25 px-6 max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none"
        >
          {/* Text Spec Column */}
          <div className="max-w-md space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
                CRAFTED PERMANENCE
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-off-white leading-tight">
              An compromise on <span className="italic">Vertical Privacy</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-off-white/50 leading-relaxed font-light">
              Suspended above the cities and oceans, our structures provide physical isolation and spatial grandeur. Crafted using imported Calacatta Gold marble and acoustic-dampened plaster to ensure ultimate tranquility.
            </p>
          </div>

          {/* Secondary Cutout Card floating overlay */}
          <div className="w-72 sm:w-80 md:w-96 p-6 md:p-8 glassmorphic-gold rounded-sm shadow-2xl border border-white/5 relative">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-elite-gold">
              [ REF 002-L ]
            </div>
            <h3 className="font-serif text-xl text-off-white font-normal mb-3">
              Spatial Excellence
            </h3>
            <div className="space-y-2 text-[11px] font-sans text-off-white/60 leading-relaxed font-light">
              <p>• 14 ft. Clear Ceiling Heights</p>
              <p>• Medical Grade Triple Zone HEPA Filtration</p>
              <p>• 1,200 Bottle Climate Controlled Wine Cellar</p>
              <p>• Dedicated Quad-Engine Helipad Access</p>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* STAGE 3: THE COLLECTION OVERVIEW / GALLERY SPOTLIGHT (62% -> 85%) */}
        {/* ============================================================== */}
        <motion.div
          style={{ opacity: opacityStage3, y: yStage3 }}
          className="absolute z-25 px-6 max-w-6xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12 pointer-events-none"
        >
          {/* Narrative Column */}
          <div className="max-w-md space-y-6 text-left md:text-right">
            <div className="flex items-center md:justify-end gap-2">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
                GLOBAL PORTFOLIO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-off-white leading-tight">
              A Global <span className="italic">Trilogy</span> of Masterworks
            </h2>
            <p className="font-sans text-xs sm:text-sm text-off-white/50 leading-relaxed font-light">
              From Manhattan’s towering heights to Dubai's pristine beachfronts and London’s historic avenues. Each location offers a completely tailored architectural sanctuary.
            </p>
          </div>

          {/* Location specs cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:max-w-xl">
            <div className="p-5 glassmorphic border border-white/5 rounded-sm space-y-2">
              <MapPin className="w-4 h-4 text-elite-gold mb-1" />
              <h4 className="font-serif text-sm text-off-white font-medium">Manhattan</h4>
              <p className="font-sans text-[10px] text-off-white/40 font-mono">THE SKY PENTHOUSE</p>
            </div>
            <div className="p-5 glassmorphic border border-white/5 rounded-sm space-y-2">
              <MapPin className="w-4 h-4 text-elite-gold mb-1" />
              <h4 className="font-serif text-sm text-off-white font-medium">Dubai</h4>
              <p className="font-sans text-[10px] text-off-white/40 font-mono">MARINA LUMINARY VILLA</p>
            </div>
            <div className="p-5 glassmorphic border border-white/5 rounded-sm space-y-2">
              <MapPin className="w-4 h-4 text-elite-gold mb-1" />
              <h4 className="font-serif text-sm text-off-white font-medium">London</h4>
              <p className="font-sans text-[10px] text-off-white/40 font-mono">BELGRAVIA MEWS SUITE</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Scroll HUD Indicator */}
        <div 
          onClick={scrollPastHero}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-25 flex flex-col items-center gap-2 text-off-white/40 hover:text-elite-gold transition-colors duration-300 cursor-pointer pointer-events-auto"
        >
          <span className="font-sans text-[8px] tracking-[0.3em] uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* Bottom Vignette Overlay to blend with contents below */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-matte-black to-transparent z-15 pointer-events-none" />
      </div>
    </div>
  );
}
