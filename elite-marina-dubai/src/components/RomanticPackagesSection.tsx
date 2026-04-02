import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, MapPin, Sparkles, Utensils, Music, Camera, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TestimonialsSection } from "./TestimonialsSection";

export function RomanticPackagesSection() {
  const { t } = useTranslation();

  const values = t("romantic_packages.values", { returnObjects: true }) as any[];
  const valueIcons = [ShieldCheck, MapPin, Sparkles];

  const packages = t("romantic_packages.packages.items", { returnObjects: true }) as any[];
  const packageImages = ["/corp-event-2.png", "/corp-event-1.png", "/corp-event-3.png"];

  const addons = t("romantic_packages.addons.items", { returnObjects: true }) as any[];
  const addonIcons = [Utensils, Heart, Music, Camera];

  return (
    <section className="relative w-full py-24 px-6 xl:px-12 flex flex-col items-center justify-center overflow-hidden z-20">
      
      {/* Background layer */}
      {/* Background layer */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[15px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0f14]/60 to-[#0a0508] pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto z-10 flex flex-col items-center">
        
        {/* 1. Hero Romántico */}
        <div className="text-center mb-24 max-w-4xl">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3] drop-shadow-2xl"
          >
            {t("romantic_packages.hero.title_main")} <br/><span className="italic font-light text-luxury-gold text-4xl lg:text-5xl">{t("romantic_packages.hero.title_accent")}</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/80 font-sans text-lg lg:text-xl mx-auto leading-loose tracking-wide font-light mb-12"
          >
            {t("romantic_packages.hero.subtitle")}
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a 
              href="https://wa.me/971582177682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 btn-luxury-gold text-white font-sans font-bold text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
            >
              {t("romantic_packages.cta.whatsapp")}
            </a>
            <a 
              href="tel:+971582177682"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/50 text-white font-sans font-light text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
            >
              {t("romantic_packages.cta.call")}
            </a>
          </motion.div>
        </div>

        {/* 2. Propuesta de Valor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 w-full">
          {values.map((val, idx) => {
            const Icon = valueIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center p-8 bg-black/40 backdrop-blur-[20px] rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
              >
                {Icon && <Icon className="w-8 h-8 text-[var(--color-accent)] mb-6 opacity-80" />}
                <h4 className="text-white font-serif tracking-[0.15em] uppercase text-sm mb-4">{val.title}</h4>
                <p className="text-white/60 font-sans font-light text-[13px] leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Paquetes Románticos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 w-full">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col rounded-2xl overflow-hidden group relative bg-black/50 backdrop-blur-xl border border-white/10 hover:border-[rgba(255,182,193,0.3)] transition-all duration-500 shadow-[0_10px_40px_rgba(255,182,193,0.05)]"
              style={{
                 background: "linear-gradient(180deg, rgba(20,10,15,0.8) 0%, rgba(10,5,8,0.9) 100%)",
              }}
            >
              {/* Subtle Pink/Gold Gradient Overlay */}
              <div className="absolute inset-0 bg-[rgba(255,182,193,0.03)] group-hover:bg-[rgba(255,182,193,0.08)] pointer-events-none transition-colors duration-700"></div>

              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-700"></div>
                 <img src={packageImages[idx]} alt={pkg.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
                 <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[rgba(10,5,8,1)] to-transparent z-10"></div>
              </div>

              {/* Package Content */}
              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10">
                
                <h3 className="font-serif text-xl md:text-2xl text-white font-normal uppercase tracking-[0.15em] mb-2 drop-shadow-md">
                  {pkg.title}
                </h3>
                <span className="text-[var(--color-accent)] opacity-80 font-sans text-xs tracking-widest uppercase mb-6 block">
                  {pkg.idealFor}
                </span>

                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                   <Clock className="w-5 h-5 text-white/50" />
                   <span className="text-white/80 font-sans text-sm tracking-widest">{pkg.duration}</span>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {(pkg.includes as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 font-sans font-light text-sm">
                        <Heart className="w-4 h-4 text-[var(--color-accent)] opacity-60 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-4 btn-luxury-gold text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300">
                  {t("romantic_packages.cta.book")}
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Complementos de Lujo */}
        <div className="w-full max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
             <span className="font-serif text-2xl text-white uppercase tracking-[0.15em] font-light">
               {t("romantic_packages.addons.title")}
             </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, idx) => {
              const Icon = addonIcons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-black/20 border border-white/5 rounded-xl hover:border-white/20 transition-all group"
                >
                  {Icon && <Icon className="w-6 h-6 text-white/40 group-hover:text-[var(--color-accent)] transition-colors mb-4" strokeWidth={1.5} />}
                  <h4 className="text-white font-sans font-normal text-xs tracking-[0.15em] uppercase mb-2">{addon.title}</h4>
                  <p className="text-white/50 font-sans font-light text-[11px] leading-relaxed">{addon.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 5. Sección de Soporte */}
        <div className="w-full max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-md border border-[rgba(255,182,193,0.1)] rounded-3xl p-10 md:p-16 mb-24">
          <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-6 tracking-wide">
            {t("romantic_packages.support.title")}
          </h3>
          <p className="text-white/70 font-sans font-light text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("romantic_packages.support.desc")}
          </p>
          <button className="px-10 py-5 btn-luxury-gold font-sans font-bold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300">
            {t("romantic_packages.cta.contact")}
          </button>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <TestimonialsSection 
            tag={t("testimonials.tag")}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            items={[
              { name: t("testimonials.reviews.review2.name"), yacht: t("testimonials.reviews.review2.yacht"), text: t("testimonials.reviews.review2.text") },
              { name: t("testimonials.reviews.review1.name"), yacht: t("testimonials.reviews.review1.yacht"), text: t("testimonials.reviews.review1.text") },
              { name: t("testimonials.reviews.review3.name"), yacht: t("testimonials.reviews.review3.yacht"), text: t("testimonials.reviews.review3.text") }
            ]}
          />
        </div>

      </div>
    </section>
  );
}
