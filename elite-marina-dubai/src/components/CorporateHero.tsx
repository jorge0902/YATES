import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function CorporateHero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full pt-32 pb-20 px-6 xl:px-12 flex flex-col items-center justify-center overflow-hidden z-20">
      <div className="relative w-full max-w-5xl mx-auto z-10 text-center flex flex-col items-center">
        
        {/* Title */}
        <motion.h1 
          className="text-white font-serif text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          dangerouslySetInnerHTML={{ __html: t("corporate.hero.title") }}
        />

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 font-sans text-lg lg:text-xl mx-auto leading-loose tracking-wide font-light mb-12"
        >
          {t("corporate.hero.description")}
        </motion.p>
        
        {/* Category tags */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl"
        >
            {(t("corporate.hero.tags", { returnObjects: true }) as string[]).map((cat) => (
                <span key={cat} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 text-[11px] font-sans tracking-widest uppercase font-light hover:text-white hover:border-white/30 transition-all cursor-default">
                    {cat}
                </span>
            ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="flex flex-col sm:flex-row gap-6 justify-center"
        >
            <a
              href="https://wa.me/971582177682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 btn-luxury-gold text-white font-sans font-bold text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300"
            >
              {t("corporate.hero.cta.whatsapp")}
            </a>
            <a 
              href="mailto:info@premiermarinadubai.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/50 text-white font-sans font-light text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300"
            >
              {t("corporate.hero.cta.email")}
            </a>
        </motion.div>

      </div>
    </section>
  );
}
