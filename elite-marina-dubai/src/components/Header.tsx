import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { PrefetchLink } from "./PrefetchLink";
import { ChevronDown, Menu, X, Phone, Music, UtensilsCrossed, Anchor, Home, Gift, Building2, Heart, Info, Waves } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const { scrollY } = useScroll();
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const packagesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (packagesRef.current && !packagesRef.current.contains(e.target as Node)) {
        setPackagesOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-2xl"
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 xl:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <PrefetchLink to="/" className="flex items-center shrink-0">
          <img
            src="/logo-nuevo.png"
            alt="High Seas Yacht Rental"
            className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,120,0,0.45)]"
          />
        </PrefetchLink>

        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-10 text-[13px] font-sans tracking-[0.15em] text-white uppercase font-bold px-8">
          <PrefetchLink to="/" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">{t('nav.home')}</PrefetchLink>
          <a href="/#fleet" className="hover:text-[var(--color-accent)] transition-colors whitespace-nowrap">{t('nav.fleet')}</a>

          {/* SERVICES with dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              {t('nav.services')}
              <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50"
                >
                  {[
                    { label: t('nav.private_dj'), icon: "🎧", href: "/services/private-dj" },
                    { label: t('nav.catering'), icon: "🍽️", href: "/services/catering" },
                    { label: t('nav.water_sports'), icon: "🏄", href: "/services/water-sports" },
                  ].map((item) => (
                    <PrefetchLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-[12px] font-bold tracking-widest uppercase text-white/80 hover:text-[var(--color-accent)] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </PrefetchLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PACKAGES with dropdown */}
          <div ref={packagesRef} className="relative">
            <button
              onClick={() => setPackagesOpen(!packagesOpen)}
              className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              {t('nav.packages')}
              <motion.span animate={{ rotate: packagesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {packagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50"
                >
                  {[
                    { label: t('nav.birthday'), icon: "🎂", href: "/packages/birthday" },
                    { label: t('nav.corporate'), icon: "💼", href: "/packages/corporate" },
                    { label: t('nav.romantic'), icon: "🌹", href: "/packages/romantic" },
                  ].map((item) => (
                    <PrefetchLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setPackagesOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-[12px] font-bold tracking-widest uppercase text-white/80 hover:text-[var(--color-accent)] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </PrefetchLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ABOUT with dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              {t('nav.about_us')}
              <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50"
                >
                  {[
                    { label: t('nav.company_owner'), icon: "👤", href: "/company-owner" },
                    { label: t('nav.faq'), icon: "❓", href: "/faq" },
                  ].map((item) => (
                    <PrefetchLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setAboutOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-[12px] font-bold tracking-widest uppercase text-white/80 hover:text-[var(--color-accent)] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </PrefetchLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4 ml-auto shrink-0">

          <LanguageSelector />

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/yachts_rental_dubai_dxb?igsh=eDV6YzJhbDJvbXFu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@yacht_charter_dubai?_r=1&_t=ZS-950tXGnjkWr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
            </a>
          </div>

          {/* WhatsApp Pill */}
          <a
            href="https://wa.me/971582177682"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 h-12 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.3)] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-[18px] h-[18px] text-white group-hover:text-[var(--color-accent)] transition-colors">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span className="font-serif text-sm tracking-wider text-white font-bold ml-1 group-hover:text-[var(--color-accent)] transition-colors">+971 58 217 7682</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Sidebar - Dark Glassmorphic */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Darkened Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 w-[320px] max-w-[90vw] h-full bg-black/80 backdrop-blur-[50px] border-l border-white/10 shadow-2xl flex flex-col"
            >
              {/* Close Button at top corner */}
              <div className="flex items-center justify-between p-6 mt-4">
                <img src="/logo-nuevo.png" alt="Logo" className="h-10 w-auto opacity-80" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Content - Scrollable */}
              <div className="flex-grow overflow-y-auto px-6 py-4 space-y-10 custom-scrollbar">
                
                {/* 1. Main Navigation */}
                <div className="space-y-3">
                  <PrefetchLink 
                    to="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-white hover:text-[var(--color-accent)] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--color-accent)]/30">
                      <Home className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                    </div>
                    <span className="font-sans font-bold text-[14px] uppercase tracking-[0.2em]">{t('nav.home')}</span>
                  </PrefetchLink>

                  <a 
                    href="/#fleet" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-white hover:text-[var(--color-accent)] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[var(--color-accent)]/30">
                      <Anchor className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                    </div>
                    <span className="font-sans font-bold text-[14px] uppercase tracking-[0.2em]">{t('nav.fleet')}</span>
                  </a>
                </div>

                {/* 2. SERVICES SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-4 bg-[var(--color-accent)]/30"></div>
                    <span className="text-[var(--color-accent)] font-sans text-[10px] tracking-[0.4em] font-black uppercase">
                      {t('nav.services')}
                    </span>
                  </div>
                  
                  <div className="space-y-4 pl-2">
                    {[
                      { to: "/services/private-dj", label: t('nav.private_dj'), icon: <Music className="w-4 h-4" /> },
                      { to: "/services/catering", label: t('nav.catering'), icon: <UtensilsCrossed className="w-4 h-4" /> },
                      { to: "/services/water-sports", label: t('nav.water_sports'), icon: <Waves className="w-4 h-4" /> },
                    ].map((item, i) => (
                      <PrefetchLink 
                        key={i}
                        to={item.to} 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
                      >
                        <div className="text-[var(--color-accent)]/60">{item.icon}</div>
                        <span className="font-sans text-[12px] font-bold uppercase tracking-widest">{item.label}</span>
                      </PrefetchLink>
                    ))}
                  </div>
                </div>

                {/* 3. PACKAGES SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-4 bg-[var(--color-accent)]/30"></div>
                    <span className="text-[var(--color-accent)] font-sans text-[10px] tracking-[0.4em] font-black uppercase">
                      {t('nav.packages')}
                    </span>
                  </div>
                  
                  <div className="space-y-4 pl-2">
                    {[
                      { to: "/packages/birthday", label: t('nav.birthday'), icon: <Gift className="w-4 h-4" /> },
                      { to: "/packages/corporate", label: t('nav.corporate'), icon: <Building2 className="w-4 h-4" /> },
                      { to: "/packages/romantic", label: t('nav.romantic'), icon: <Heart className="w-4 h-4" /> },
                    ].map((item, i) => (
                      <PrefetchLink 
                        key={i}
                        to={item.to} 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
                      >
                        <div className="text-[var(--color-accent)]/60">{item.icon}</div>
                        <span className="font-sans text-[12px] font-bold uppercase tracking-widest">{item.label}</span>
                      </PrefetchLink>
                    ))}
                  </div>
                </div>

                {/* 4. ABOUT SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-4 bg-[var(--color-accent)]/30"></div>
                    <span className="text-[var(--color-accent)] font-sans text-[10px] tracking-[0.4em] font-black uppercase">
                      {t('nav.about')}
                    </span>
                  </div>
                  
                  <div className="space-y-4 pl-2">
                    <PrefetchLink 
                      to="/company-owner" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
                    >
                      <div className="text-[var(--color-accent)]/60"><Info className="w-4 h-4" /></div>
                      <span className="font-sans text-[12px] font-bold uppercase tracking-widest">{t('nav.about')}</span>
                    </PrefetchLink>
                    <PrefetchLink 
                      to="/faq" 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="flex items-center gap-4 text-white/60 hover:text-white transition-colors"
                    >
                      <div className="text-[var(--color-accent)]/60"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg></div>
                      <span className="font-sans text-[12px] font-bold uppercase tracking-widest">{t('nav.faq')}</span>
                    </PrefetchLink>
                  </div>
                </div>

                {/* 5. REDES SOCIALES */}
                <div className="pt-4 border-t border-white/5 space-y-6">
                  <span className="font-sans text-[9px] font-bold tracking-[0.4em] text-white/20 uppercase">
                    SÍGUENOS EN REDES
                  </span>
                  <div className="flex items-center gap-5">
                    <a href="https://www.instagram.com/yachts_rental_dubai_dxb?igsh=eDV6YzJhbDJvbXFu" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[var(--color-accent)]/20 transition-all border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://www.tiktok.com/@yacht_charter_dubai?_r=1&_t=ZS-950tXGnjkWr" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[var(--color-accent)]/20 transition-all border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                    </a>
                  </div>
                </div>

              </div>

              {/* Sidebar Footer - Contact */}
              <div className="p-8 bg-black/40 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-white font-serif text-[14px] tracking-widest">+971 58 217 7682</span>
                </div>
                <a
                  href="https://wa.me/971582177682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 flex items-center justify-center gap-3 rounded-xl btn-old-gold font-sans font-bold text-[12px] tracking-[0.2em] uppercase transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WHATSAPP
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Sidebar - Solid Black (MOVED OUTSIDE HEADER) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Dark Solid Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/95"
            />

            {/* Solid Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 w-[300px] max-w-[85vw] h-full bg-[#050505] border-l border-white/5 shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 bg-black border-b border-white/5">
                <img src="/logo-nuevo.png" alt="Logo" className="h-10 w-auto" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex-grow overflow-y-auto px-6 py-8 space-y-12">
                
                {/* 1. Main Navigation */}
                <div className="space-y-4">
                  <PrefetchLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white hover:text-[var(--color-accent)] transition-all">
                    <Home className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="font-sans font-bold text-[15px] uppercase tracking-[0.2em]">{t('nav.home')}</span>
                  </PrefetchLink>

                  <a href="/#fleet" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white hover:text-[var(--color-accent)] transition-all">
                    <Anchor className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="font-sans font-bold text-[15px] uppercase tracking-[0.2em]">{t('nav.fleet')}</span>
                  </a>
                </div>

                {/* 2. SERVICES SECTION */}
                <div className="space-y-6">
                  <span className="text-white/30 font-sans text-[10px] tracking-[0.4em] font-black uppercase">
                    {t('nav.services')}
                  </span>
                  
                  <div className="space-y-5 pl-2">
                    {[
                      { to: "/services/private-dj", label: t('nav.private_dj'), icon: <Music className="w-5 h-5" /> },
                      { to: "/services/catering", label: t('nav.catering'), icon: <UtensilsCrossed className="w-5 h-5" /> },
                      { to: "/services/water-sports", label: t('nav.water_sports'), icon: <Waves className="w-5 h-5" /> },
                    ].map((item, i) => (
                      <PrefetchLink key={i} to={item.to} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="text-[var(--color-accent)]">{item.icon}</div>
                        <span className="font-sans text-xs font-bold uppercase tracking-widest">{item.label}</span>
                      </PrefetchLink>
                    ))}
                  </div>
                </div>

                {/* 3. PACKAGES SECTION */}
                <div className="space-y-6">
                  <span className="text-white/30 font-sans text-[10px] tracking-[0.4em] font-black uppercase">
                    {t('nav.packages')}
                  </span>
                  
                  <div className="space-y-5 pl-2">
                    {[
                      { to: "/packages/birthday", label: t('nav.birthday'), icon: <Gift className="w-5 h-5" /> },
                      { to: "/packages/corporate", label: t('nav.corporate'), icon: <Building2 className="w-5 h-5" /> },
                      { to: "/packages/romantic", label: t('nav.romantic'), icon: <Heart className="w-5 h-5" /> },
                    ].map((item, i) => (
                      <PrefetchLink key={i} to={item.to} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="text-[var(--color-accent)]">{item.icon}</div>
                        <span className="font-sans text-xs font-bold uppercase tracking-widest">{item.label}</span>
                      </PrefetchLink>
                    ))}
                  </div>
                </div>

                {/* 4. ABOUT SECTION */}
                <div className="space-y-6">
                  <span className="text-white/30 font-sans text-[10px] tracking-[0.4em] font-black uppercase">
                    {t('nav.about')}
                  </span>
                  
                  <div className="space-y-5 pl-2">
                    <PrefetchLink to="/company-owner" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                      <Info className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="font-sans text-xs font-bold uppercase tracking-widest">{t('nav.about')}</span>
                    </PrefetchLink>
                    <PrefetchLink to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle text-[var(--color-accent)]"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                      <span className="font-sans text-xs font-bold uppercase tracking-widest">{t('nav.faq')}</span>
                    </PrefetchLink>
                  </div>
                </div>

                {/* 5. SOCIALS */}
                <div className="pt-8 border-t border-white/5 flex items-center gap-6 justify-center">
                  <a href="https://www.instagram.com/yachts_rental_dubai_dxb?igsh=eDV6YzJhbDJvbXFu" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@yacht_charter_dubai?_r=1&_t=ZS-950tXGnjkWr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 448 512" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                  </a>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-6 bg-black">
                <a
                  href="https://wa.me/971582177682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl btn-old-gold font-sans font-bold text-[13px] tracking-widest uppercase text-center block transition-all"
                >
                  WhatsApp Support
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

