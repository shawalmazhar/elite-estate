"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Compass, HeartPulse, ChevronRight, Activity, ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WellnessSpaPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll of the horizontal container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
  });

  // Map scroll progress (0 to 1) to horizontal translation (e.g. 0% to -65%)
  // Moves the visual track sideways as the user scrolls down
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const spaStations = [
    {
      title: "Hydrotherapy Sanctuary",
      desc: "Warm steam caverns carved using high-porosity basalt, featuring multi-temperature rain showers and hydro-jets to activate deep circular blood flow.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      num: "01"
    },
    {
      title: "Infinity Horizon Pool",
      desc: "A heated infinity waterline suspended at high elevation, fully integrated with underwater sound-systems and panoramic sky views.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      num: "02"
    },
    {
      title: "Treatment Chambers",
      desc: "Vibration-acoustic treatment beds, organic lavender essential diffusers, and highly specialized therapists curating custom somatic therapies.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      num: "03"
    },
    {
      title: "Ice Plunge & Cryo Suites",
      desc: "Sub-5°C thermal shocks designed to decrease systemic cellular inflammation, promote muscle recovery, and restore absolute biological homeostasis.",
      image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?auto=format&fit=crop&w=800&q=80",
      num: "04"
    }
  ];

  return (
    <div className="w-full bg-matte-black text-off-white">
      {/* Editorial Header Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        
        <Link
          href="/amenities"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-off-white/50 hover:text-elite-gold transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Amenities
        </Link>

        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
              WELLNESS CHAMBER INDEX
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide">
            The Wellness <span className="italic font-normal">Sanctuary</span>
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed max-w-2xl">
            An uncompromising, quiet environment crafted to separate you from external frequencies, centered entirely on sensory recovery, cellular repair, and peace.
          </p>
        </div>
      </section>

      {/* 2. HORIZONTAL TRACKING ANIMATION SECTION */}
      {/* This scroll container wraps the sticky container. A h-[250vh] gives scrolling space */}
      <section ref={scrollContainerRef} className="relative h-[250vh] bg-matte-black border-y border-white/5">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          {/* Scroll progress line at top of track */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-20">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-elite-gold origin-left"
            />
          </div>

          <div className="pl-6 md:pl-12 mb-8 relative z-20 pointer-events-none">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-elite-gold font-semibold block">
              SCROLL DOWN TO PROGRESS HORIZONTALLY
            </span>
          </div>

          {/* Sliding horizontal container */}
          <motion.div
            style={{ x: xTranslation }}
            className="flex gap-8 md:gap-12 px-6 md:px-12 w-[300vw] relative z-10"
          >
            {spaStations.map((station) => (
              <div
                key={station.title}
                className="w-[75vw] md:w-[45vw] lg:w-[35vw] flex flex-col gap-6 shrink-0"
              >
                {/* Image Showcase */}
                <div className="relative h-[380px] w-full overflow-hidden border border-white/10 rounded-sm shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={station.image}
                    alt={station.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Absolute Index Number */}
                  <div className="absolute top-5 right-5 z-20 text-5xl font-serif text-white/10 font-bold tracking-widest font-mono">
                    {station.num}
                  </div>
                </div>

                {/* Content Details */}
                <div className="glassmorphic p-6 md:p-8 border border-white/10 rounded-sm space-y-3 shadow-xl gold-glow">
                  <h3 className="font-serif text-2xl text-elite-gold font-medium">
                    {station.title}
                  </h3>
                  <p className="font-sans text-xs text-off-white/60 leading-relaxed">
                    {station.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Ending Splash Block */}
            <div className="w-[60vw] md:w-[35vw] shrink-0 flex flex-col justify-center p-8 md:p-12 glassmorphic-gold border border-elite-gold/20 rounded-sm text-center shadow-2xl gold-glow h-[560px]">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full border border-elite-gold/30 bg-elite-gold/15 flex items-center justify-center text-elite-gold mx-auto mb-4 animate-pulse">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-3xl text-off-white font-light tracking-wide">
                  Schedule Wellness Care
                </h3>
                <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                  Unlock priority bookings, direct room treatments, and private consultations with our medical spa directors.
                </p>
                <div className="pt-4">
                  <Link
                    href="/inquire"
                    className="px-8 py-3 bg-elite-gold text-matte-black font-sans text-[10px] font-bold uppercase tracking-[0.25em] inline-block hover:bg-white transition-all duration-300 rounded-sm"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. DETAILS OF SANCTUARY */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl font-light tracking-wide">
            Thermal Hydrotherapy Science
          </h2>
          <p className="font-sans text-xs text-off-white/50 leading-relaxed">
            Curated around standard biophilic health sciences, our Wellness sanctuary offers contrast thermal therapies (sub-5°C Ice Plunges and +85°C organic wood saunas) designed to reset cellular stress patterns. Triple filtration active HEPA grids and medical-grade air purity ensures an absolutely pristine chemical-free inhalation profile throughout the entire wellness center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
          <div className="p-6 border border-white/5 bg-deep-charcoal rounded-sm">
            <h4 className="font-serif text-lg text-elite-gold mb-2 font-medium">
              Medical-Grade Filtration
            </h4>
            <p className="text-off-white/50 leading-relaxed">
              Every spa cubic foot is refreshed 12 times per hour using medical-grade HEPA filters, keeping air completely free of dust, pollen, and airborne particles.
            </p>
          </div>
          <div className="p-6 border border-white/5 bg-deep-charcoal rounded-sm">
            <h4 className="font-serif text-lg text-elite-gold mb-2 font-medium">
              Sensory Recovery Integration
            </h4>
            <p className="text-off-white/50 leading-relaxed">
              Equipped with binaural acoustic sound therapy layers and high-frequency light dampening to completely ease mental and neural patterns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
