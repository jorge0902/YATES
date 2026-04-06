import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Target, Globe, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CompanyOwnerSection() {
  const { t } = useTranslation();

  const cards = [
    { title: t("owner.cards.clientele.title"), icon: <Star className="w-5 h-5 text-[var(--color-accent)]" />, desc: t("owner.cards.clientele.desc") },
    { title: t("owner.cards.f1.title"), icon: <Target className="w-5 h-5 text-[var(--color-accent)]" />, desc: t("owner.cards.f1.desc") },
    { title: t("owner.cards.worldwide.title"), icon: <Globe className="w-5 h-5 text-[var(--color-accent)]" />, desc: t("owner.cards.worldwide.desc") },
    { title: t("owner.cards.bespoke.title"), icon: <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />, desc: t("owner.cards.bespoke.desc") }
  ];

  return (
    <section id="owner" className="relative w-full py-24 px-6 xl:px-12 flex items-center justify-center overflow-hidden z-20">
      
      {/* Background Deep Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[25px] border-y border-white/10"></div>
      
      {/* Content Container */}
      <div className="relative w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        
        {/* Left Side: Owner Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <img
            src="/owner-profile.png"
            alt={`${t("owner.name")} - Founder`}
            className="w-full h-auto object-cover object-top grayscale-[15%] contrast-[1.15] brightness-90 saturate-[0.85] transition-transform duration-1000 group-hover:scale-105"
          />
          
          <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
             <img src="/logo-oro.png" alt="High Seas Yacht" className="h-10 opacity-50 drop-shadow-md" />
          </div>
        </motion.div>

        {/* Right Side: Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col text-left"
        >
          {/* Heading */}
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold mb-4">
            {t("owner.tag")}
          </span>
          <h2 
            className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase mb-8 leading-[1.3]"
            dangerouslySetInnerHTML={{ __html: t("owner.title") }}
          />

          {/* Description */}
          <div className="font-sans text-white/70 text-sm md:text-base leading-relaxed tracking-wider mb-8 max-w-xl">
            <h3 className="text-xl font-bold text-white mb-2 font-serif tracking-widest uppercase">
              {t("owner.name")}
            </h3>
            <p>
              {t("owner.description")}
            </p>
          </div>

          {/* 4 Glass Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 flex items-start gap-4 hover:bg-white/10 transition-colors shadow-lg">
                <div className="mt-1">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-[13px] uppercase tracking-widest font-sans">{card.title}</h4>
                  <p className="text-white/50 text-[12px] mt-1 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/971582177682"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 btn-luxury-gold text-[#2E1A00] px-8 py-4 rounded-full font-sans font-bold text-[13px] tracking-[0.2em] transition-all"
            >
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              {t("owner.cta.whatsapp")}
            </a>
            
            <a
              href="tel:+971582177682"
              className="group flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-8 py-4 rounded-full font-sans font-bold text-[13px] tracking-[0.2em] transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 group-hover:text-[var(--color-accent)] transition-colors" />
              {t("owner.cta.call")}
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
