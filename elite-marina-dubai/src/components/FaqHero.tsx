import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FaqHero() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full pt-32 pb-20 px-6 xl:px-12 flex flex-col items-center justify-center overflow-hidden z-20">
      <div className="relative w-full max-w-5xl mx-auto z-10 text-center flex flex-col items-center">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3] text-center"
          dangerouslySetInnerHTML={{ __html: t("faq.hero.title") }}
        />

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 font-sans text-lg md:text-xl max-w-3xl leading-relaxed tracking-wide mb-12"
        >
          {t("faq.hero.description")}
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-16"
        >
          <a 
             href="https://wa.me/971582177682"
             target="_blank"
             rel="noopener noreferrer"
             className="group relative w-full sm:w-auto px-10 py-4 btn-luxury-gold text-[#2E1A00] rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] block"
          >
             <span className="relative z-10 flex items-center justify-center gap-3">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
               {t("faq.hero.cta.whatsapp")}
             </span>
          </a>
          
          <a
             href="tel:+971582177682"
             className="group relative w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 rounded-full text-white font-sans font-bold text-sm tracking-widest uppercase hover:border-white/50 hover:bg-white/5 transition-all duration-300 block text-center"
          >
             <span className="relative z-10 flex items-center justify-center gap-3">
               <Phone className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
               {t("faq.hero.cta.call")}
             </span>
          </a>
        </motion.div>

        {/* Horizontal Destinations Bar */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="w-full max-w-4xl mx-auto border-t border-white/10 pt-8"
        >
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-12 px-4">
            {["DUBAI MARINA", "DUBAI HARBOUR", "PALM JUMEIRAH", "ATLANTIS", "BURJ AL ARAB"].map((dest) => (
              <li key={dest} className="text-white/50 font-sans text-[11px] font-bold tracking-[0.3em] uppercase flex items-center gap-6">
                <span>{dest}</span>
                {dest !== "BURJ AL ARAB" && <span className="text-[var(--color-accent)]/50 hidden md:inline-block">•</span>}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
