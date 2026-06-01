"use client";

import React, { useRef, useEffect, useState } from "react";
import { Info, X, Compass, ChevronDown, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollVideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  // States
  const [video1Duration, setVideo1Duration] = useState(0);
  const [video2Duration, setVideo2Duration] = useState(0);
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [showBlueprint, setShowBlueprint] = useState(false);

  // High-performance target times (for Lerping)
  const targetTime1 = useRef(0);
  const targetTime2 = useRef(0);

  // Standard Lerp Helper
  const lerp = (start: number, end: number, amt: number) => {
    return (1 - amt) * start + amt * end;
  };

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    // Load durations
    const onLoaded1 = () => {
      if (video1) {
        setVideo1Duration(video1.duration);
        setVideo1Loaded(true);
        // Force Chrome to initialize the video decoding pipeline
        video1.play().then(() => {
          video1.pause();
        }).catch(() => {});
      }
    };
    const onLoaded2 = () => {
      if (video2) {
        setVideo2Duration(video2.duration);
        setVideo2Loaded(true);
        // Force Chrome to initialize the video decoding pipeline
        video2.play().then(() => {
          video2.pause();
        }).catch(() => {});
      }
    };

    if (video1) {
      if (video1.readyState >= 1) onLoaded1();
      else video1.addEventListener("loadedmetadata", onLoaded1);
    }
    if (video2) {
      if (video2.readyState >= 1) onLoaded2();
      else video2.addEventListener("loadedmetadata", onLoaded2);
    }

    return () => {
      if (video1) video1.removeEventListener("loadedmetadata", onLoaded1);
      if (video2) video2.removeEventListener("loadedmetadata", onLoaded2);
    };
  }, []);

  // Frame Scrubbing Loop
  useEffect(() => {
    let animationFrameId: number;

    const tick = () => {
      const video1 = video1Ref.current;
      const video2 = video2Ref.current;
      const container = containerRef.current;

      if (!container) {
        animationFrameId = requestAnimationFrame(tick);
        return;
      }

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      // Calculate progress relative to container viewport
      let fraction = -rect.top / totalScrollable;
      fraction = Math.max(0, Math.min(fraction, 1));
      setScrollProgress(fraction);

      // 1. DUAL VIDEO SCROLL SCRUBBING MATH
      if (fraction <= 0.45) {
        // Video 1 scrubs, Video 2 is invisible
        const p1 = fraction / 0.45;
        if (video1Loaded && video1Duration > 0) {
          targetTime1.current = p1 * video1Duration;
        }
        
        if (video1) video1.style.opacity = "1";
        if (video2) {
          video2.style.opacity = "0";
          targetTime2.current = 0;
        }
        setOverlayOpacity(0);
      } 
      else if (fraction > 0.45 && fraction < 0.55) {
        // Transition Zone (Cross-fade & Overlay Fades in)
        const tProgress = (fraction - 0.45) / 0.1; // 0 to 1
        
        // Hold Video 1 at end, Video 2 at beginning
        targetTime1.current = video1Duration;
        targetTime2.current = 0;

        // Cross-fade videos
        if (video1) video1.style.opacity = `${1 - tProgress}`;
        if (video2) video2.style.opacity = `${tProgress}`;

        // Horizon Bridge Overlay fades in/out on a sine curve
        const oOpacity = Math.sin(tProgress * Math.PI); // Peak at 1.0 in the middle
        setOverlayOpacity(oOpacity);
      } 
      else {
        // Video 2 scrubs, Video 1 is invisible
        const p2 = (fraction - 0.55) / 0.45;
        if (video2Loaded && video2Duration > 0) {
          targetTime2.current = p2 * video2Duration;
        }

        if (video1) {
          video1.style.opacity = "0";
          targetTime1.current = video1Duration;
        }
        if (video2) video2.style.opacity = "1";
        setOverlayOpacity(0);
      }

      // 2. LERPING THE TIME ASSIGNMENT FOR ULTRA-SMOOTH SCRUBBING
      if (video1 && video1Loaded && video1.readyState >= 1) {
        const diff = targetTime1.current - video1.currentTime;
        if (Math.abs(diff) > 0.01) {
          const newTime = lerp(video1.currentTime, targetTime1.current, 0.12);
          video1.currentTime = Math.max(0, Math.min(newTime, video1Duration - 0.05));
        }
      }

      if (video2 && video2Loaded && video2.readyState >= 1) {
        const diff = targetTime2.current - video2.currentTime;
        if (Math.abs(diff) > 0.01) {
          const newTime = lerp(video2.currentTime, targetTime2.current, 0.12);
          video2.currentTime = Math.max(0, Math.min(newTime, video2Duration - 0.05));
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(animationFrameId);
  }, [video1Loaded, video2Loaded, video1Duration, video2Duration]);

  // Smooth scroll helper to jump below video player
  const scrollPastVideo = () => {
    const container = containerRef.current;
    if (container) {
      window.scrollTo({
        top: container.offsetTop + container.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className="relative h-[650vh] w-full bg-matte-black">
      {/* Sticky video container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10 flex items-center justify-center">
        {/* Background dark overlay for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-matte-black/50 z-20 pointer-events-none" />

        {/* Video 1: Lounge */}
        <video
          ref={video1Ref}
          src="/MEDIA/Luxury_modern_house_interior_GOP1.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
          style={{ opacity: 1 }}
        />

        {/* Video 2: Culinary Suite */}
        <video
          ref={video2Ref}
          src="/MEDIA/Luxury_modern_house_interior_0030_GOP1.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
          style={{ opacity: 0 }}
        />

        {/* Watermark Covering HUD Telemetry Overlay (only active for Video 1) */}
        {scrollProgress < 0.55 && (
          <div
            className="absolute bottom-10 right-4 sm:right-10 z-25 bg-matte-black/90 backdrop-blur-md border border-elite-gold/30 px-4 sm:px-5 py-3 sm:py-4 rounded-sm font-mono text-right select-none shadow-2xl transition-opacity duration-300 w-48 sm:w-64 pointer-events-none"
            style={{
              opacity: scrollProgress <= 0.45 ? 1 : (0.55 - scrollProgress) / 0.1,
            }}
          >
            <span className="block text-[7px] sm:text-[8px] uppercase tracking-[0.25em] text-elite-gold font-bold mb-1">
              [ HUD SPATIAL DETECT ]
            </span>
            <span className="block text-[8px] sm:text-[10px] text-off-white font-medium tracking-wider mb-0.5 animate-pulse">
              ZONE: FORMAL SALON
            </span>
            <span className="block text-[8px] sm:text-[9px] text-off-white/40 uppercase tracking-widest mb-0.5">
              ELEVATION: 1,000 FT
            </span>
            <span className="block text-[8px] sm:text-[9px] text-off-white/40 uppercase tracking-widest">
              GRID: 40.7624° N, 73.9738° W
            </span>
          </div>
        )}

        {/* Dynamic Title / Scroll Indicator overlay */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-25 pointer-events-none px-6 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-elite-gold font-medium block">
              A Private Sanctuary Awaits
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-[0.1em] text-off-white">
              The Grand Horizon
            </h1>
          </motion.div>
        </div>

        {/* Scroll helper indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-25 flex flex-col items-center gap-2 text-off-white/40 hover:text-elite-gold transition-colors duration-300 cursor-pointer pointer-events-auto" onClick={scrollPastVideo}>
          <span className="font-sans text-[8px] tracking-[0.3em] uppercase">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* The Transition Zone / Horizon Bridge overlay */}
        {overlayOpacity > 0.05 && (
          <div
            className="absolute inset-0 z-35 flex items-center justify-center px-6 transition-all duration-100 bg-matte-black/20"
            style={{ opacity: overlayOpacity }}
          >
            <div className="glassmorphic-gold p-8 md:p-12 max-w-lg w-full text-center relative rounded-sm shadow-2xl shadow-black/80 gold-glow">
              <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-elite-gold block mb-3 font-semibold">
                THE HORIZON BRIDGE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-off-white font-medium mb-4">
                Transitioning Sanctuary
              </h3>
              <p className="font-sans text-xs text-off-white/60 leading-relaxed mb-6">
                Passing seamlessly from the Double-Height Lounge to the Bespoke Culinary Space.
              </p>

              {/* Pulsing Hotspot */}
              <div className="flex justify-center mb-2">
                <button
                  onClick={() => setShowBlueprint(true)}
                  className="relative flex items-center justify-center w-12 h-12 rounded-full border border-elite-gold/50 bg-matte-black/60 group hover:border-elite-gold hover:scale-105 transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full bg-elite-gold/20 animate-ping" />
                  <Activity className="w-5 h-5 text-elite-gold" />
                </button>
              </div>
              <span className="block font-sans text-[8px] uppercase tracking-[0.2em] text-elite-gold/70 animate-pulse mt-2">
                Tap Hotspot to Open Blueprint
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Blueprint Popover Modal */}
      <AnimatePresence>
        {showBlueprint && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-matte-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glassmorphic-gold p-8 md:p-12 max-w-3xl w-full relative rounded-sm max-h-[85vh] overflow-y-auto gold-glow"
            >
              <button
                onClick={() => setShowBlueprint(false)}
                className="absolute top-6 right-6 text-off-white/50 hover:text-elite-gold transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-elite-gold block mb-2">
                    Spatial Architecture Plan
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-off-white font-light tracking-wide">
                    The Culinary-Lounge Transition
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Left Column: Specs */}
                  <div className="space-y-5">
                    <h4 className="font-serif text-lg text-elite-gold border-b border-elite-gold/20 pb-2">
                      Engineering Coordinates
                    </h4>
                    <ul className="space-y-3 font-sans text-xs">
                      <li className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-off-white/40">Total Area</span>
                        <span className="text-off-white">1,450 sq. ft.</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-off-white/40">Ceiling Height</span>
                        <span className="text-off-white">14 ft. Clear</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-off-white/40">Primary Countertop</span>
                        <span className="text-off-white">Calacatta Borghini Gold</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-off-white/40">Ventilation System</span>
                        <span className="text-off-white">18-Jet Custom Recessed</span>
                      </li>
                      <li className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-off-white/40">Smart Integration</span>
                        <span className="text-off-white">Savant AI Climate Control</span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column: Mini blueprint graphics */}
                  <div className="flex flex-col justify-between">
                    <div className="border border-white/10 rounded p-5 bg-white/[0.02] flex-1 flex flex-col justify-center items-center relative min-h-[180px]">
                      {/* Grid representation */}
                      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                      <div className="relative border border-elite-gold/30 w-full h-full max-w-[200px] max-h-[140px] p-3 rounded flex flex-col justify-between text-[8px] font-mono text-elite-gold">
                        <div className="flex justify-between border-b border-elite-gold/20 pb-1">
                          <span>[LOUNGE AREA]</span>
                          <span>14.0m x 8.5m</span>
                        </div>
                        <div className="text-center py-2 animate-pulse font-sans tracking-widest text-[9px]">
                          -- THE HORIZON BRIDGE --
                        </div>
                        <div className="flex justify-between border-t border-elite-gold/20 pt-1">
                          <span>[CULINARY ZONE]</span>
                          <span>12.5m x 6.2m</span>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans text-[11px] text-off-white/50 leading-relaxed mt-4 italic">
                      "An uninterrupted flow crafted to link grand formal entertaining with intimate epicurean craftsmanship."
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setShowBlueprint(false)}
                    className="px-6 py-2.5 bg-elite-gold text-matte-black text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-white hover:text-matte-black transition-colors duration-300"
                  >
                    Return to Experience
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
