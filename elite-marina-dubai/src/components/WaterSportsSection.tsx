import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, Waves, ShieldCheck, Zap, Anchor, Camera, Clock, Star, Plus, Minus } from "lucide-react";
import { TestimonialsSection } from "./TestimonialsSection";
import { useTranslation } from "react-i18next";

export function WaterSportsSection() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const HERO_CATEGORIES = [
    { label: t("watersports.hero.categories.jetski"), icon: Zap },
    { label: t("watersports.hero.categories.seabob"), icon: Anchor },
    { label: t("watersports.hero.categories.wakeboarding"), icon: Waves },
    { label: t("watersports.hero.categories.safety"), icon: ShieldCheck },
  ];

  const ACTIVITIES = [
    {
      title: t("watersports.catalog.activities.jetski.title"),
      subtitle: t("watersports.catalog.activities.jetski.subtitle"),
      desc: t("watersports.catalog.activities.jetski.desc"),
      image: "/assets/watersports/jetski.png"
    },
    {
      title: t("watersports.catalog.activities.seabob.title"),
      subtitle: t("watersports.catalog.activities.seabob.subtitle"),
      desc: t("watersports.catalog.activities.seabob.desc"),
      image: "/assets/watersports/seabob.png"
    },
    {
      title: t("watersports.catalog.activities.wakeboarding.title"),
      subtitle: t("watersports.catalog.activities.wakeboarding.subtitle"),
      desc: t("watersports.catalog.activities.wakeboarding.desc"),
      image: "/assets/watersports/wakeboard.png"
    },
    {
      title: t("watersports.catalog.activities.banana.title"),
      subtitle: t("watersports.catalog.activities.banana.subtitle"),
      desc: t("watersports.catalog.activities.banana.desc"),
      image: "/assets/yachts/exclusivity-2.jpeg"
    },
    {
      title: t("watersports.catalog.activities.donut.title"),
      subtitle: t("watersports.catalog.activities.donut.subtitle"),
      desc: t("watersports.catalog.activities.donut.desc"),
      image: "/assets/yachts/exclusivity-3.jpeg"
    },
    {
      title: t("watersports.catalog.activities.paddle.title"),
      subtitle: t("watersports.catalog.activities.paddle.subtitle"),
      desc: t("watersports.catalog.activities.paddle.desc"),
      image: "/assets/yachts/exclusivity-1.jpeg"
    }
  ];

  const WHAT_TO_EXPECT = [
    { title: t("watersports.expectations.safety.title"), desc: t("watersports.expectations.safety.desc"), icon: ShieldCheck },
    { title: t("watersports.expectations.timing.title"), desc: t("watersports.expectations.timing.desc"), icon: Clock },
    { title: t("watersports.expectations.content.title"), desc: t("watersports.expectations.content.desc"), icon: Camera }
  ];

  const FAQS = t("watersports.faq.items", { returnObjects: true }) as { q: string, a: string }[];

  return (
    <div className="w-full relative z-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Global Dark Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[15px] pointer-events-none z-0"></div>
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 xl:px-12 flex flex-col items-center justify-center z-10">
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] drop-shadow-[0_2px_15px_rgba(255,255,255,0.1)] mb-8 leading-[1.3]"
            dangerouslySetInnerHTML={{ __html: t("watersports.hero.title") }}
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-sans text-lg lg:text-xl mx-auto leading-loose tracking-wide font-light mb-12 max-w-4xl"
          >
            "{t("watersports.hero.subtitle")}"
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl"
          >
              {HERO_CATEGORIES.map((cat) => (
                  <span key={cat.label} className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-[11px] md:text-xs font-sans tracking-widest uppercase font-light hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                      <cat.icon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {cat.label}
                  </span>
              ))}
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl"
          >
              <button className="flex-1 px-6 py-4 btn-luxury-gold rounded-full font-sans font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2">
                 {t("watersports.hero.cta.book")}
              </button>
              <a 
                href="tel:+971582177682"
                className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-sans font-light text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> {t("watersports.hero.cta.call")}
              </a>
              <button className="flex-1 px-6 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans font-light text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> {t("watersports.hero.cta.email")}
              </button>
          </motion.div>

        </div>
      </section>

      {/* 2. Catálogo de Actividades */}
      <section className="relative w-full py-20 px-6 xl:px-12 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold block mb-4">
              {t("watersports.catalog.tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-[0.15em]">
              {t("watersports.catalog.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden border-b border-white/10">
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" />
                   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                  <h3 className="font-serif text-[1.2rem] font-bold uppercase text-white tracking-widest mb-1 drop-shadow-md">
                    {item.title}
                  </h3>
                  <span className="text-[var(--color-accent)] font-sans text-[10px] tracking-widest uppercase mb-4 block opacity-90 pb-2">
                    {item.subtitle}
                  </span>
                  <p className="text-white/70 font-sans font-light text-[13px] leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  <button className="w-full py-3 bg-transparent border border-white/20 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 font-sans font-bold text-[10px] tracking-[0.2em] uppercase rounded-full transition-all duration-300">
                     {t("watersports.catalog.add_to_charter")}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Qué Esperar (Infografía) */}
      <section className="relative w-full py-20 px-6 z-10 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light uppercase tracking-[0.15em]">
              {t("watersports.expectations.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line inside grid for larger screens (optional) */}
            <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-[1px] bg-white/10 z-0"></div>

            {WHAT_TO_EXPECT.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-black border border-[var(--color-accent)] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,107,0,0.3)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                  <item.icon className="w-6 h-6 text-white opacity-90" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-sans font-bold tracking-widest uppercase text-[12px] mb-4 bg-black/80 backdrop-blur-md px-4 py-1 rounded-full">{item.title}</h4>
                <p className="text-white/60 font-sans font-light text-[13px] leading-relaxed px-4 max-w-[280px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ de Deportes Acuáticos */}
      <section className="relative w-full py-24 px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-[0.15em] mb-4">
              {t("watersports.faq.title")}
            </h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-sans font-bold text-[13px] tracking-widest uppercase pr-4">
                    {faq.q}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-[var(--color-accent)]">
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-white/60 font-sans font-light text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Validación y Cierre */}
      <section className="relative w-full pb-24 pt-10 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-20">
          
          <TestimonialsSection 
            tag={t("watersports.social.tag")}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            items={[
              { name: t("watersports.social.review1.name"), yacht: t("watersports.social.review1.service"), text: t("watersports.social.review1.text") },
              { name: t("watersports.social.review2.name"), yacht: t("watersports.social.review2.service"), text: t("watersports.social.review2.text") },
              { name: t("watersports.social.review3.name"), yacht: t("watersports.social.review3.service"), text: t("watersports.social.review3.text") },
              { name: t("watersports.social.review4.name"), yacht: t("watersports.social.review4.service"), text: t("watersports.social.review4.text") }
            ]}
          />

          <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent py-16 px-4 rounded-3xl border-y border-white/10">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light uppercase tracking-[0.1em] mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: t("watersports.footer.title") }} />
            <p className="text-white/60 font-sans text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
              {t("watersports.footer.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/971582177682"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 btn-old-gold rounded-full font-sans font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-3"
              >
                <MessageCircle className="w-4 h-4" /> {t("watersports.footer.cta_whatsapp")}
              </a>
              <a 
                href="tel:+971582177682"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> {t("watersports.footer.cta_call")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
