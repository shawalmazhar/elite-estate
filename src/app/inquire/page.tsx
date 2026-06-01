"use client";

import React, { useState } from "react";
import {
  Compass, ShieldCheck, Mail, Phone, MapPin, Sparkles,
  ArrowRight, ArrowLeft, CheckCircle, Globe, DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function InquirePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    advisorCoords: "",
    investmentRange: "",
    propertyStyle: "",
    targetCity: "",
    timeline: "",
    yachtDockNeeded: "No",
    helipadTransit: "No"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 2000);
  };

  // Corporate Regional Offices (with physical latitude/longitude coordinates)
  const regionalOffices = [
    {
      city: "Dubai",
      title: "Palm Jumeirah Pavilion",
      latLong: "25.1124° N, 55.1390° E",
      phone: "+971 4 482 9000",
      email: "dxb.vetted@eliteestate.ae",
      address: "Frond G Private Office, Palm Jumeirah, Dubai, UAE"
    },
    {
      city: "London",
      title: "Belgrave Square Mews",
      latLong: "51.4988° N, 0.1539° W",
      phone: "+44 20 7946 0991",
      email: "lnd.registry@eliteestate.uk",
      address: "12 Belgrave Mews South, Belgravia, London, SW1X 8US"
    },
    {
      city: "New York",
      title: "Manhattan Sky Lounge",
      latLong: "40.7624° N, 73.9738° W",
      phone: "+1 212 555 0199",
      email: "nyc.private@eliteestate.com",
      address: "730 Fifth Avenue, Floor 44, New York, NY 10019"
    }
  ];

  return (
    <div className="w-full bg-matte-black min-h-screen pt-32 pb-24 text-off-white relative">
      {/* Visual coordinates grid */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[linear-gradient(to_right,#80808005_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Editorial Header */}
        <div className="space-y-4 max-w-3xl mb-20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-elite-gold" />
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-elite-gold font-semibold">
              VIP COMMUNICATIONS GATEWAY
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-off-white">
            Private <span className="italic font-normal">Inquiries</span>
          </h1>
          <p className="font-sans text-sm text-off-white/50 leading-relaxed">
            Our showing chambers and private office listings operate on a pre-vetted institutional basis. File your coordinates below to activate communication.
          </p>
        </div>

        {/* 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Prestigious Offices Directory */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-elite-gold font-bold block mb-2">
                GLOBAL NETWORKS
              </span>
              <h3 className="font-serif text-2xl text-off-white font-medium">
                Regional Hubs
              </h3>
              <p className="font-sans text-xs text-off-white/40 leading-relaxed mt-2 max-w-sm">
                Connect with our local managing directors or request secure communication details through our regional gateways.
              </p>
            </div>

            <div className="space-y-8">
              {regionalOffices.map((office) => (
                <div
                  key={office.city}
                  className="border-l border-white/10 hover:border-elite-gold pl-6 py-1 group transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-serif text-xl text-off-white group-hover:text-elite-gold transition-colors duration-300">
                      {office.city} Office
                    </h4>
                    <span className="font-mono text-[8px] text-elite-gold/60 uppercase tracking-widest bg-elite-gold/5 px-2 py-0.5 rounded-sm">
                      {office.latLong}
                    </span>
                  </div>
                  
                  <span className="block font-sans text-[10px] text-off-white/60 tracking-wider mb-3 uppercase">
                    {office.title}
                  </span>
                  
                  <p className="font-sans text-xs text-off-white/40 leading-relaxed mb-4 max-w-xs">
                    {office.address}
                  </p>

                  <div className="space-y-2 font-sans text-xs">
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 text-off-white/55 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-elite-gold/70" />
                      <span>{office.phone}</span>
                    </a>
                    
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-off-white/55 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-elite-gold/70" />
                      <span className="underline decoration-elite-gold/20">{office.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Multi-Step Vetted Onboarding Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphic border border-white/10 rounded-sm p-8 md:p-10 lg:p-12 shadow-2xl gold-glow relative">
              <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none" />

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6 max-w-md mx-auto"
                >
                  <div className="w-16 h-16 rounded-full border border-elite-gold/30 bg-elite-gold/10 flex items-center justify-center text-elite-gold mx-auto mb-4 animate-pulse">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-elite-gold font-bold block">
                    VETTED PROTOCOLS LOCKED
                  </span>
                  <h3 className="font-serif text-3xl text-off-white font-light tracking-wide">
                    Application Recorded
                  </h3>
                  <p className="font-sans text-xs text-off-white/50 leading-relaxed">
                    Our compliance panel is currently conducting a private liquidity and security review. An executive communication key will be dispatched to your coordinates within 2 hours.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/"
                      className="px-8 py-3 bg-white text-matte-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-elite-gold transition-colors duration-300 rounded-sm"
                    >
                      Return to Portal Home
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step indicators */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-6">
                    <span className="font-serif text-lg text-off-white font-medium">
                      Step {currentStep} of 3
                    </span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            currentStep >= step
                              ? "w-8 bg-elite-gold"
                              : "w-4 bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* STEP 1: LIQUIDITY & PORTFOLIO RANGE */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <h4 className="font-serif text-xl text-off-white font-light">
                            Vetted Liquidity Credentials
                          </h4>
                          <p className="font-sans text-[11px] text-off-white/40">
                            Elite Estate listings operate within highly restricted price points. Please declare your allocation parameters.
                          </p>
                        </div>

                        <div className="space-y-4 font-sans text-xs">
                          <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                            Target Investment Scale
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              { label: "$10M - $25M", val: "10-25" },
                              { label: "$25M - $50M", val: "25-50" },
                              { label: "$50M - $100M", val: "50-100" },
                              { label: "$100M+", val: "100+" }
                            ].map((opt) => {
                              const isSelected = formData.investmentRange === opt.val;
                              return (
                                <button
                                  key={opt.val}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, investmentRange: opt.val })}
                                  className={`p-4 border rounded-sm text-center font-medium uppercase tracking-widest transition-all duration-300 ${
                                    isSelected
                                      ? "bg-elite-gold/15 border-elite-gold text-elite-gold"
                                      : "border-white/5 bg-matte-black/30 text-off-white/50 hover:border-white/20"
                                  }`}
                                >
                                  {opt.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="space-y-4 font-sans text-xs">
                          <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                            Target Global Location
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            {["New York", "Dubai", "London"].map((city) => {
                              const isSelected = formData.targetCity === city;
                              return (
                                <button
                                  key={city}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, targetCity: city })}
                                  className={`p-3 border rounded-sm text-center font-medium uppercase tracking-widest transition-all duration-300 ${
                                    isSelected
                                      ? "bg-elite-gold/15 border-elite-gold text-elite-gold"
                                      : "border-white/5 bg-matte-black/30 text-off-white/50 hover:border-white/20"
                                  }`}
                                >
                                  {city}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: ARCHITECTURAL SANCTUARY PREFERENCES */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <h4 className="font-serif text-xl text-off-white font-light">
                            Sanctuary Spec Preferences
                          </h4>
                          <p className="font-sans text-[11px] text-off-white/40">
                            Declare specific structural coordinates or marine requirements for the private placement searches.
                          </p>
                        </div>

                        <div className="space-y-4 font-sans text-xs">
                          <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                            Preferred Architectural Layout
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {["Penthouse", "Coastal Villa", "Historical Studio"].map((style) => {
                              const isSelected = formData.propertyStyle === style;
                              return (
                                <button
                                  key={style}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, propertyStyle: style })}
                                  className={`p-3 border rounded-sm text-center font-medium uppercase tracking-widest transition-all duration-300 ${
                                    isSelected
                                      ? "bg-elite-gold/15 border-elite-gold text-elite-gold"
                                      : "border-white/5 bg-matte-black/30 text-off-white/50 hover:border-white/20"
                                  }`}
                                >
                                  {style}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 font-sans text-xs">
                          <div className="space-y-2">
                            <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                              Yacht Berthing Access?
                            </label>
                            <select
                              name="yachtDockNeeded"
                              value={formData.yachtDockNeeded}
                              onChange={handleChange}
                              className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 outline-0 focus:border-elite-gold/50 cursor-pointer text-off-white"
                            >
                              <option value="Yes">Yes, Dock Access Required</option>
                              <option value="No">No, Not Required</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                              Private Helipad Access?
                            </label>
                            <select
                              name="helipadTransit"
                              value={formData.helipadTransit}
                              onChange={handleChange}
                              className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 outline-0 focus:border-elite-gold/50 cursor-pointer text-off-white"
                            >
                              <option value="Yes">Yes, Rooftop Landing Required</option>
                              <option value="No">No, Not Required</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2 font-sans text-xs">
                          <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                            Target Relocation Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            required
                            className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 outline-0 focus:border-elite-gold/50 cursor-pointer text-off-white"
                          >
                            <option value="" disabled className="text-off-white/40">Select transition target</option>
                            <option value="Immediate">Immediate (Within 30 Days)</option>
                            <option value="90 Days">Quarterly Vetting (90 Days)</option>
                            <option value="6 Months">Flexible Vetting (6 Months+)</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: SECURE CREDENTIALS */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <h4 className="font-serif text-xl text-off-white font-light">
                            Secure Credentials & Contact
                          </h4>
                          <p className="font-sans text-[11px] text-off-white/40">
                            Log your formal legal credentials. Vetted submissions receive direct, encrypted correspondence pipelines.
                          </p>
                        </div>

                        <div className="space-y-4 font-sans text-xs">
                          <div className="space-y-2">
                            <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                              Full Legal Representative Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="e.g. Sterling K. Archer"
                              className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                                Private Direct Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. sterling@archer-holdings.ch"
                                className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                                Secure Signal / Telephone
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="e.g. +1 212 555 0199"
                                className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-off-white/40 uppercase tracking-widest text-[9px] block">
                              Advisor / Escrow Coordinates (Optional)
                            </label>
                            <textarea
                              name="advisorCoords"
                              value={formData.advisorCoords}
                              onChange={handleChange}
                              placeholder="Provide advisor legal name, secure banking routing codes, or special holding trust names."
                              rows={3}
                              className="w-full bg-matte-black/60 border border-white/10 rounded-sm px-4 py-3 text-[11px] outline-0 focus:border-elite-gold/50 transition-colors"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Form Action Controls */}
                  <div className="flex justify-between items-center pt-8 border-t border-white/5 font-sans text-xs">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-1.5 text-off-white/50 hover:text-white transition-colors py-2 uppercase tracking-widest text-[10px]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && (!formData.investmentRange || !formData.targetCity)) ||
                          (currentStep === 2 && !formData.propertyStyle)
                        }
                        className="flex items-center gap-1.5 px-6 py-3 border border-elite-gold text-elite-gold hover:bg-elite-gold hover:text-matte-black transition-all duration-300 font-bold uppercase tracking-widest text-[10px] rounded-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-elite-gold"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting || !formData.fullName || !formData.email || !formData.phone}
                        className="flex items-center gap-2 px-8 py-3 bg-elite-gold text-matte-black hover:bg-white hover:text-matte-black transition-all duration-500 font-bold uppercase tracking-widest text-[10px] rounded-sm disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-matte-black border-t-transparent rounded-full animate-spin" />
                            Vetting Registry...
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4" />
                            Submit Secure Request
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
