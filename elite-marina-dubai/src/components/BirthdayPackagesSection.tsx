import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star, Gift, Camera, UtensilsCrossed, PartyPopper } from "lucide-react";
import { useTranslation } from "react-i18next";

export function BirthdayPackagesSection() {
  const { t } = useTranslation();

  const PACKAGES = [
    {
      title: t("birthday.packages.marina_party.title"),
      duration: t("birthday.packages.marina_party.duration"),
      idealFor: t("birthday.packages.marina_party.ideal_for"),
      highlights: t("birthday.packages.marina_party.highlights"),
      includes: t("birthday.packages.marina_party.includes", { returnObjects: true }) as string[],
      image: "/pkg-birthday-1.png",
    },
    {
      title: t("birthday.packages.sunset_cruise.title"),
      duration: t("birthday.packages.sunset_cruise.duration"),
      idealFor: t("birthday.packages.sunset_cruise.ideal_for"),
      highlights: t("birthday.packages.sunset_cruise.highlights"),
      includes: t("birthday.packages.sunset_cruise.includes", { returnObjects: true }) as string[],
      image: "/pkg-birthday-2.png",
    },
    {
      title: t("birthday.packages.premier_vip.title"),
      duration: t("birthday.packages.premier_vip.duration"),
      idealFor: t("birthday.packages.premier_vip.ideal_for"),
      highlights: t("birthday.packages.premier_vip.highlights"),
      includes: t("birthday.packages.premier_vip.includes", { returnObjects: true }) as string[],
      image: "/pkg-birthday-3.png",
    }
  ];

  const ADDONS = [
    { title: t("birthday.addons.items.decoration.title"), desc: t("birthday.addons.items.decoration.desc"), icon: PartyPopper },
    { title: t("birthday.addons.items.cake.title"), desc: t("birthday.addons.items.cake.desc"), icon: Gift },
    { title: t("birthday.addons.items.catering.title"), desc: t("birthday.addons.items.catering.desc"), icon: UtensilsCrossed },
    { title: t("birthday.addons.items.photo.title"), desc: t("birthday.addons.items.photo.desc"), icon: Camera }
  ];

  return (
    <section id="birthday-packages" className="relative w-full py-24 px-6 xl:px-12 flex flex-col items-center justify-center overflow-hidden z-20 bg-black/40">
      
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#070707] pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-6 drop-shadow-2xl"
             dangerouslySetInnerHTML={{ __html: t("birthday.title") }}
          />
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/80 font-sans text-lg max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            {t("birthday.subtitle")}
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 w-full">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl group relative"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden border-b border-white/10">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                 <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                 <h3 className="absolute bottom-4 left-6 right-6 font-serif text-xl font-bold uppercase text-white tracking-wide z-20 drop-shadow-md">
                   {pkg.title}
                 </h3>
              </div>

              {/* Package Content */}
              <div className="p-6 flex flex-col flex-grow">
                
                <div className="flex gap-4 mb-4">
                   <div className="flex flex-col items-center justify-center bg-black/40 px-3 py-2 rounded-lg border border-white/10 shrink-0 min-w-[80px]">
                     <Clock className="w-5 h-5 text-[var(--color-accent)] mb-1" />
                     <span className="text-white/80 text-[10px] uppercase font-bold tracking-widest">{pkg.duration}</span>
                   </div>
                   <div className="flex flex-col justify-center">
                     <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1">{t("birthday.labels.ideal_for")}</span>
                     <span className="text-white text-sm font-sans flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-white/50" /> {pkg.idealFor}</span>
                   </div>
                </div>

                <div className="mb-6">
                  <span className="text-[var(--color-accent)] text-[10px] uppercase tracking-widest font-bold mb-1 block">{t("birthday.labels.highlights")}</span>
                  <p className="text-white/70 font-sans text-sm leading-relaxed">
                    {pkg.highlights}
                  </p>
                </div>

                <div className="flex-grow mb-8">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-2 block">{t("birthday.labels.whats_included")}</span>
                  <ul className="space-y-2">
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-start gap-2 text-white/80 text-[13px] font-sans">
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/971582177682?text=${encodeURIComponent(t("birthday.cta.whatsapp_message", { package: pkg.title }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full py-3.5 btn-luxury-gold text-white font-sans font-bold text-[13px] tracking-widest uppercase rounded-xl transition-colors"
                  >
                    {t("birthday.cta.whatsapp")}
                  </a>
                  <a 
                    href="tel:+971582177682"
                    className="flex justify-center items-center w-full py-3.5 bg-transparent border border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-[var(--color-accent)]/50 font-sans font-bold text-[13px] tracking-widest uppercase rounded-xl transition-colors"
                  >
                    {t("birthday.cta.call")}
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="w-full max-w-5xl mx-auto border-t border-white/10 pt-16">
          <div className="text-center mb-10">
             <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold">
               {t("birthday.addons.tag")}
             </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ADDONS.map((addon, idx) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors group"
              >
                <div className="mb-4 bg-black/40 p-3 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">
                  <addon.icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-white font-sans font-bold text-[12px] tracking-widest uppercase mb-2">{addon.title}</h4>
                <p className="text-white/50 font-sans text-[11px] leading-relaxed">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
