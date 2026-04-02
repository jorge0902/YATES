import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TestimonialsSection } from "./TestimonialsSection";

export function CorporatePackages() {
  const { t } = useTranslation();

  const PACKAGES = [
    {
      title: t("corporate.packages.meeting.title"),
      duration: t("corporate.packages.meeting.duration"),
      idealFor: t("corporate.packages.meeting.ideal_for"),
      highlights: t("corporate.packages.meeting.highlights"),
      includes: t("corporate.packages.meeting.includes", { returnObjects: true }) as string[],
      image: "/corp-event-2.png",
    },
    {
      title: t("corporate.packages.hosting.title"),
      duration: t("corporate.packages.hosting.duration"),
      idealFor: t("corporate.packages.hosting.ideal_for"),
      highlights: t("corporate.packages.hosting.highlights"),
      includes: t("corporate.packages.hosting.includes", { returnObjects: true }) as string[],
      image: "/corp-event-1.png",
    },
    {
      title: t("corporate.packages.branding.title"),
      duration: t("corporate.packages.branding.duration"),
      idealFor: t("corporate.packages.branding.ideal_for"),
      highlights: t("corporate.packages.branding.highlights"),
      includes: t("corporate.packages.branding.includes", { returnObjects: true }) as string[],
      image: "/corp-event-3.png",
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 xl:px-12 z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3]"
             dangerouslySetInnerHTML={{ __html: t("corporate.title") }}
          />
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-white/80 font-sans text-lg max-w-3xl mx-auto leading-relaxed tracking-wide drop-shadow-md"
          >
            {t("corporate.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
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
              <div className="relative h-60 overflow-hidden border-b border-white/20">
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
                   <div className="flex flex-col items-center justify-center bg-black/40 px-3 py-2 rounded-lg border border-white/10 shrink-0">
                     <Clock className="w-5 h-5 text-[var(--color-accent)] mb-1" />
                     <span className="text-white/80 text-[10px] uppercase font-bold tracking-widest">{pkg.duration}</span>
                   </div>
                   <div className="flex flex-col justify-center">
                     <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-1">{t("corporate.labels.ideal_for")}</span>
                     <span className="text-white text-sm font-sans flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-white/50" /> {pkg.idealFor}</span>
                   </div>
                </div>

                <div className="mb-6">
                   <span className="text-[var(--color-accent)] text-[10px] uppercase tracking-widest font-bold mb-1 block">{t("corporate.labels.highlights")}</span>
                  <p className="text-white/70 font-sans text-sm leading-relaxed">
                    {pkg.highlights}
                  </p>
                </div>

                <div className="flex-grow mb-8">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold mb-2 block">{t("corporate.labels.included")}</span>
                  <ul className="space-y-2">
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-start gap-2 text-white/80 text-[13px] font-sans">
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Orange Action Buttons */}
                <div className="mt-auto flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/971582177682?text=${encodeURIComponent(t("corporate.cta.wa_message", { package_title: pkg.title }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full py-3.5 btn-luxury-gold font-sans font-bold text-[13px] tracking-widest uppercase rounded-xl transition-colors"
                  >
                    {t("corporate.cta.whatsapp")}
                  </a>
                  <a 
                    href="tel:+971582177682"
                    className="flex items-center justify-center w-full py-3.5 bg-transparent border border-white/20 text-white/70 hover:text-white hover:bg-white/10 hover:border-[var(--color-accent)]/50 font-sans font-bold text-[13px] tracking-widest uppercase rounded-xl transition-colors"
                  >
                    {t("corporate.cta.call")}
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 border-t border-white/10 pt-24">
          <TestimonialsSection 
            tag={t("corporate.social.tag") || "EXECUTIVE REVIEWS"}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            items={[
              { name: t("testimonials.reviews.review3.name"), yacht: t("testimonials.reviews.review3.yacht"), text: t("testimonials.reviews.review3.text") },
              { name: t("testimonials.reviews.review2.name"), yacht: t("testimonials.reviews.review2.yacht"), text: t("testimonials.reviews.review2.text") },
              { name: t("testimonials.reviews.review1.name"), yacht: t("testimonials.reviews.review1.yacht"), text: t("testimonials.reviews.review1.text") }
            ]}
          />
        </div>

      </div>
    </section>
  );
}
