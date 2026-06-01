"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, ShieldCheck, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Residences", href: "/properties" },
    { name: "Amenities", href: "/amenities" },
    { name: "Inquire", href: "/inquire" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "py-4 bg-matte-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "py-7 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-medium text-off-white group-hover:text-elite-gold transition-colors duration-300">
              ELITE ESTATE
            </span>
            <span className="text-[9px] font-sans tracking-[0.4em] uppercase text-elite-gold border border-elite-gold/30 px-1.5 py-0.5 rounded-sm">
              PORTAL
            </span>
          </Link>

          {/* Desktop Navigation Links (Hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 py-1 ${
                    isActive
                      ? "text-elite-gold font-medium"
                      : "text-off-white/70 hover:text-off-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-elite-gold" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4">
            {/* Desktop VIP CTA */}
            <Link
              href="/inquire"
              className="hidden sm:inline-flex relative px-5 py-2.5 overflow-hidden group rounded-sm border border-elite-gold/50 bg-transparent transition-all duration-500"
            >
              <span className="absolute inset-0 w-0 bg-elite-gold transition-all duration-500 ease-out group-hover:w-full -z-10" />
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-elite-gold group-hover:text-matte-black transition-colors duration-500 flex items-center gap-2">
                <Mail className="w-3 h-3" />
                Private Tour
              </span>
            </Link>

            {/* Mobile/Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden text-off-white hover:text-elite-gold transition-colors duration-300 p-2"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Glassmorphic Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 top-[73px] z-40 md:hidden bg-matte-black/95 backdrop-blur-2xl border-t border-white/5 overflow-y-auto px-6 py-12 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8 text-center pt-8">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-serif text-3xl tracking-wider transition-colors duration-300 ${
                        isActive ? "text-elite-gold" : "text-off-white/70 hover:text-off-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-6 items-center pt-12 border-t border-white/5"
            >
              <Link
                href="/inquire"
                className="w-full max-w-xs text-center py-4 bg-elite-gold text-matte-black font-sans text-[11px] font-bold uppercase tracking-[0.25em] rounded-sm shadow-lg shadow-elite-gold/5"
              >
                Schedule Private Tour
              </Link>
              <span className="font-sans text-[8px] uppercase tracking-widest text-off-white/30">
                DUBAI • LONDON • NEW YORK
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
