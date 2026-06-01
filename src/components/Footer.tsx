"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, Mail, ArrowRight, Anchor, HelpCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-matte-black border-t border-white/5 pt-20 pb-12 relative z-10 overflow-hidden">
      {/* Subtle glow layer in footer */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-elite-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-elite-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] font-medium text-off-white">
                ELITE ESTATE
              </span>
              <span className="block text-[8px] font-sans tracking-[0.5em] uppercase text-elite-gold mt-1">
                LUXURY PORTAL
              </span>
            </div>
            <p className="font-sans text-xs text-off-white/50 leading-relaxed max-w-xs">
              Curating architectural masterpieces and private vertical sanctuaries for the global elite. Crafted for longevity and endless horizons.
            </p>
            {/* Social Icons including Yacht/Anchor for prestigious vibe */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white/50 hover:text-elite-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/shawal-mazhar-53a79430a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white/50 hover:text-elite-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="/amenities/yacht-club"
                className="text-off-white/50 hover:text-elite-gold transition-colors duration-300"
                title="Elite Yacht Club"
              >
                <Anchor className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-elite-gold mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home Portfolio", href: "/" },
                { name: "Signature Residences", href: "/properties" },
                { name: "Amenities & Lifestyle", href: "/amenities" },
                { name: "Wellness & Spa Sanctuary", href: "/amenities/wellness-spa" },
                { name: "Elite Concierge Care", href: "/amenities/concierge-services" },
                { name: "Marine & Yacht Privileges", href: "/amenities/yacht-club" },
                { name: "Epicurean Culinary", href: "/amenities/culinary-dining" },
                { name: "VIP Inquiry", href: "/inquire" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-off-white/50 hover:text-off-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Properties list */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-elite-gold mb-6 font-medium">
              The Collection
            </h4>
            <ul className="space-y-3">
              {[
                { name: "The Sky Penthouse", href: "/properties/the-sky-penthouse" },
                { name: "Marina Luminary Villa", href: "/properties/marina-luminary-villa" },
                { name: "Belgravia Mews Suite", href: "/properties/belgravia-manor-studio" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-off-white/50 hover:text-off-white transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Offices */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-elite-gold mb-2 font-medium">
              Private Registry
            </h4>
            <p className="font-sans text-xs text-off-white/50 leading-relaxed">
              Subscribe to unlock off-market listings and private penthouses.
            </p>
            {subscribed ? (
              <div className="text-xs text-elite-gold font-sans tracking-wider border border-elite-gold/30 p-3 rounded-sm bg-elite-gold/5">
                Successfully enrolled in our Private Registry.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-2 relative group">
                <input
                  type="email"
                  placeholder="Your private email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-0 outline-0 flex-1 text-xs text-off-white placeholder-off-white/30 font-sans tracking-wide"
                />
                <button
                  type="submit"
                  className="text-off-white/70 hover:text-elite-gold transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <div className="pt-2">
              <span className="block font-sans text-[10px] text-off-white/40 uppercase tracking-widest leading-loose">
                DUBAI • LONDON • NEW YORK
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="font-sans text-[10px] text-off-white/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Elite Estate. All Private Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-[9px] text-off-white/30 hover:text-off-white uppercase tracking-[0.2em] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="font-sans text-[9px] text-off-white/30 hover:text-off-white uppercase tracking-[0.2em] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-[9px] text-off-white/30 hover:text-off-white uppercase tracking-[0.2em] transition-colors duration-300">
              Regulated Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
