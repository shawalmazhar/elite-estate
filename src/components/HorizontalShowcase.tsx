"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, MapPin, Compass } from "lucide-react";

interface SlideData {
  num: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    num: "01",
    title: "The Sky Penthouse",
    subtitle: "VERTICAL PARMANENCE",
    location: "Manhattan, New York",
    description: "Suspended 1,000 feet above Central Park, this iconic triplex sanctuary combines structural majesty with endless, unobstructed glass horizons.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    num: "02",
    title: "Marina Luminary",
    subtitle: "COASTAL BIOPHILIC",
    location: "Palm Jumeirah, Dubai",
    description: "An architectural masterwork carved along the pristine waters of Palm Jumeirah, capturing the essence of coastal luxury and private yacht access.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
  },
  {
    num: "03",
    title: "Belgravia Suite",
    subtitle: "HISTORICAL MODERNITY",
    location: "Belgrave Square, London",
    description: "A historic Victorian footprint reinvented as a private, high-spec modern pied-à-terre featuring luxury details and automated security.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HorizontalShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Bind useScroll to track vertical scrolling inside this container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Track scroll position to move the entire container horizontally: 3 panels = 0% to -66.6%
  const xContainer = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  // Horizontal Parallax: Backgrounds shift slower than the scroll, text shifts faster
  // For Slide 1 background: shifts slightly right-to-left
  const xBg1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);
  const xBg2 = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "0%", "-10%"]);
  const xBg3 = useTransform(scrollYProgress, [0.5, 1], ["10%", "0%"]);

  // Text speed: shifts faster to overshoot and create depth
  const xText1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-40%"]);
  const xText2 = useTransform(scrollYProgress, [0, 0.5, 1], ["40%", "0%", "-40%"]);
  const xText3 = useTransform(scrollYProgress, [0.5, 1], ["40%", "0%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-matte-black w-full">
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-matte-black flex items-center">
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] z-10 pointer-events-none" />

        {/* Horizontal Track holding the 3 full-screen pages */}
        <motion.div 
          style={{ x: xContainer }}
          className="flex h-full w-[300vw] flex-row items-center"
        >
          {/* SLIDE 1 */}
          <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
            {/* Background image container (slow parallax) */}
            <motion.div style={{ x: xBg1 }} className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/40 to-matte-black z-10" />
              <img src={slides[0].image} alt={slides[0].title} className="w-full h-full object-cover scale-105" />
            </motion.div>

            {/* Slide Content (fast parallax) */}
            <motion.div 
              style={{ x: xText1 }}
              className="relative z-20 w-full max-w-6xl px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-none"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-elite-gold font-bold">
                    {slides[0].subtitle}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
                  <span className="font-sans text-[10px] text-off-white/40 font-mono">STAGE 01</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-8xl font-light tracking-wide text-off-white leading-none">
                  {slides[0].title}
                </h2>
                
                <p className="font-sans text-sm md:text-base text-off-white/60 leading-relaxed font-light max-w-lg">
                  {slides[0].description}
                </p>

                <div className="flex items-center gap-2 text-elite-gold/60 text-[10px] uppercase tracking-[0.3em] font-medium pt-4 animate-pulse">
                  <span>Scroll down to slide</span>
                  <MoveRight className="w-4 h-4" />
                </div>
              </div>

              {/* Floating Meta Details Card */}
              <div className="glassmorphic-gold p-8 border border-white/5 rounded-sm justify-self-end max-w-sm hidden md:block">
                <div className="flex items-center gap-2 border-b border-elite-gold/20 pb-3 mb-4">
                  <MapPin className="w-4 h-4 text-elite-gold" />
                  <span className="font-sans text-[10px] tracking-widest text-elite-gold font-bold uppercase">{slides[0].location}</span>
                </div>
                <p className="font-mono text-[10px] text-off-white/40 leading-relaxed">
                  COORD: 40.7624° N, 73.9738° W<br />
                  ELEVATION: 1,000 FT ABOVE GROUND<br />
                  CURATOR: ELITE ESTATE ADVISORY
                </p>
              </div>
            </motion.div>
          </div>

          {/* SLIDE 2 */}
          <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
            <motion.div style={{ x: xBg2 }} className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/40 to-matte-black z-10" />
              <img src={slides[1].image} alt={slides[1].title} className="w-full h-full object-cover scale-105" />
            </motion.div>

            <motion.div 
              style={{ x: xText2 }}
              className="relative z-20 w-full max-w-6xl px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-none"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-elite-gold font-bold">
                    {slides[1].subtitle}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
                  <span className="font-sans text-[10px] text-off-white/40 font-mono">STAGE 02</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-8xl font-light tracking-wide text-off-white leading-none">
                  {slides[1].title}
                </h2>
                
                <p className="font-sans text-sm md:text-base text-off-white/60 leading-relaxed font-light max-w-lg">
                  {slides[1].description}
                </p>
              </div>

              <div className="glassmorphic-gold p-8 border border-white/5 rounded-sm justify-self-end max-w-sm hidden md:block">
                <div className="flex items-center gap-2 border-b border-elite-gold/20 pb-3 mb-4">
                  <MapPin className="w-4 h-4 text-elite-gold" />
                  <span className="font-sans text-[10px] tracking-widest text-elite-gold font-bold uppercase">{slides[1].location}</span>
                </div>
                <p className="font-mono text-[10px] text-off-white/40 leading-relaxed">
                  COORD: 25.1124° N, 55.1328° E<br />
                  FRONTAGE: 200 FT PRISTINE SHORELINE<br />
                  YACHT DOCK: 100 FT PRIVATE SLIP
                </p>
              </div>
            </motion.div>
          </div>

          {/* SLIDE 3 */}
          <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
            <motion.div style={{ x: xBg3 }} className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/40 to-matte-black z-10" />
              <img src={slides[2].image} alt={slides[2].title} className="w-full h-full object-cover scale-105" />
            </motion.div>

            <motion.div 
              style={{ x: xText3 }}
              className="relative z-20 w-full max-w-6xl px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-none"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-elite-gold font-bold">
                    {slides[2].subtitle}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
                  <span className="font-sans text-[10px] text-off-white/40 font-mono">STAGE 03</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-8xl font-light tracking-wide text-off-white leading-none">
                  {slides[2].title}
                </h2>
                
                <p className="font-sans text-sm md:text-base text-off-white/60 leading-relaxed font-light max-w-lg">
                  {slides[2].description}
                </p>
              </div>

              <div className="glassmorphic-gold p-8 border border-white/5 rounded-sm justify-self-end max-w-sm hidden md:block">
                <div className="flex items-center gap-2 border-b border-elite-gold/20 pb-3 mb-4">
                  <MapPin className="w-4 h-4 text-elite-gold" />
                  <span className="font-sans text-[10px] tracking-widest text-elite-gold font-bold uppercase">{slides[2].location}</span>
                </div>
                <p className="font-mono text-[10px] text-off-white/40 leading-relaxed">
                  COORD: 51.4988° N, 0.1528° W<br />
                  DESIGN: GRADE II LISTED CONTEMPORARY<br />
                  SECURITY: BIOMETRIC MILITARY ENTRY
                </p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
