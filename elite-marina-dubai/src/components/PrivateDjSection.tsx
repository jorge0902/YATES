import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Music, Clock, Star, MapPin, Headphones, Activity, Gem, CheckCircle2 } from "lucide-react";
import { TestimonialsSection } from "./TestimonialsSection";
import { useTranslation } from "react-i18next";

export function PrivateDjSection() {
  const { t } = useTranslation();

  const METRICS = [
    { value: t("dj.metrics.minutes.value"), desc: t("dj.metrics.minutes.desc"), icon: Activity },
    { value: t("dj.metrics.hours.value"), desc: t("dj.metrics.hours.desc"), icon: Clock },
    { value: t("dj.metrics.vibes.value"), desc: t("dj.metrics.vibes.desc"), icon: Gem }
  ];

  const DJ_PACKAGES = [
    {
      title: t("dj.packages.sunset.title"),
      subtitle: t("dj.packages.sunset.subtitle"),
      desc: t("dj.packages.sunset.desc"),
      points: t("dj.packages.sunset.points", { returnObjects: true }) as string[],
      button: t("dj.packages.sunset.button"),
      image: "/assets/dj/sunset.png"
    },
    {
      title: t("dj.packages.party.title"),
      subtitle: t("dj.packages.party.subtitle"),
      desc: t("dj.packages.party.desc"),
      points: t("dj.packages.party.points", { returnObjects: true }) as string[],
      button: t("dj.packages.party.button"),
      image: "/assets/dj/party.png"
    },
    {
      title: t("dj.packages.vip.title"),
      subtitle: t("dj.packages.vip.subtitle"),
      desc: t("dj.packages.vip.desc"),
      points: t("dj.packages.vip.points", { returnObjects: true }) as string[],
      button: t("dj.packages.vip.button"),
      image: "/assets/dj/vip.png"
    }
  ];

  const STEPS = [
    {
      title: t("dj.how_it_works.step1.title"),
      desc: t("dj.how_it_works.step1.desc"),
    },
    {
      title: t("dj.how_it_works.step2.title"),
      desc: t("dj.how_it_works.step2.desc"),
    },
    {
      title: t("dj.how_it_works.step3.title"),
      desc: t("dj.how_it_works.step3.desc"),
    },
    {
      title: t("dj.how_it_works.step4.title"),
      desc: t("dj.how_it_works.step4.desc"),
    }
  ];

  const TAGS = t("dj.seo.tags", { returnObjects: true }) as string[];

  return (
    <div className="w-full relative z-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Global Dark Frosted Glass Overlay for the whole DJ Page */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[15px] pointer-events-none z-0"></div>
      
      {/* 1. DJ Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 xl:px-12 flex flex-col items-center justify-center z-10">

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] drop-shadow-[0_2px_15px_rgba(255,255,255,0.1)] mb-8 leading-[1.3]"
            dangerouslySetInnerHTML={{ __html: t("dj.hero.title") }}
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-sans text-lg lg:text-xl mx-auto leading-loose tracking-wide font-light mb-12 max-w-4xl"
          >
            "{t("dj.hero.subtitle")}"
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl"
          >
              {[
                { label: t("dj.hero.tags.dj_set"), icon: Headphones },
                { label: t("dj.hero.tags.sound"), icon: Music },
                { label: t("dj.hero.tags.playlist"), icon: Star },
                { label: t("dj.hero.tags.skyline"), icon: MapPin }
              ].map((tag) => (
                  <span key={tag.label} className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-[11px] md:text-xs font-sans tracking-widest uppercase font-light hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                      <tag.icon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {tag.label}
                  </span>
              ))}
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl"
          >
              <a 
                href="https://wa.me/971582177682"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-4 btn-luxury-gold rounded-full font-sans font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> {t("dj.hero.cta.whatsapp")}
              </a>
              <a 
                href="tel:+971582177682"
                className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-sans font-light text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> {t("dj.hero.cta.call")}
              </a>
              <button className="flex-1 px-6 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans font-light text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> {t("dj.hero.cta.email")}
              </button>
          </motion.div>

        </div>
      </section>

      {/* 2. Metrics Block */}
      <section className="relative w-full py-12 px-6 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICS.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-black/20 backdrop-blur-[20px] rounded-2xl border border-white/10"
            >
              <val.icon className="w-6 h-6 text-[var(--color-accent)] mb-4 opacity-80" strokeWidth={1.5} />
              <h4 className="text-white font-serif tracking-[0.15em] uppercase text-lg mb-2">{val.value}</h4>
              <p className="text-white/60 font-sans font-light text-[13px] leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. DJ Packages */}
      <section className="relative w-full py-24 px-6 xl:px-12 z-10">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold">
              {t("dj.packages.tag")}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {DJ_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] group relative"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden border-b border-white/10">
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                   <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0" />
                   <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                </div>

                {/* Package Content */}
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6">
                  <h3 className="text-xl font-serif text-white uppercase tracking-widest mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  <span className="text-[var(--color-accent)] font-sans text-[10px] tracking-widest uppercase mb-4 block opacity-90 border-b border-white/10 pb-4">
                    {pkg.subtitle}
                  </span>

                  <p className="text-white/70 font-sans font-light text-[13px] leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {pkg.points.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/80 font-sans font-light text-[13px]">
                          <Headphones className="w-4 h-4 text-[var(--color-accent)] opacity-60 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-4 bg-transparent border border-white/20 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 font-sans font-bold text-[11px] tracking-[0.2em] uppercase rounded-full transition-all duration-300 relative overflow-hidden group/btn">
                     <span className="relative z-10">{pkg.button}</span>
                  </button>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Booking Methodology */}
      <section className="relative w-full py-24 px-6 xl:px-12 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-[0.15em]">
              {t("dj.how_it_works.title")}
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto relative pl-12 md:pl-0">
            {/* Vertical connecting line */}
            <div className="absolute left-[23px] md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)]/30 to-transparent -translate-x-1/2"></div>
            
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex items-center md:justify-between w-full group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Number Circle Node */}
                  <div className="absolute left-[-41px] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[var(--color-accent)] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.5)] z-10">
                    <span className="text-white font-serif text-[13px] font-bold">0{idx + 1}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-xl p-6 shadow-lg hover:border-[var(--color-accent)]/50 transition-colors ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <h4 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-3">
                      {step.title}
                    </h4>
                    <p className="text-white/60 font-sans text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-[calc(50%-3rem)]"></div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Social Validation (Testimonials) */}
      <section className="relative w-full py-24 px-6 z-20">
        <div className="max-w-7xl mx-auto">
          <TestimonialsSection 
            tag={t("dj.social.tag")}
            title={t("dj.social.title")}
            subtitle={t("testimonials.subtitle")}
            items={[
              { name: t("dj.social.review1.name"), yacht: t("dj.social.review1.service"), text: t("dj.social.review1.text") },
              { name: t("dj.social.review2.name"), yacht: t("dj.social.review2.service"), text: t("dj.social.review2.text") },
              { name: t("dj.social.review3.name"), yacht: t("dj.social.review3.service"), text: t("dj.social.review3.text") },
              { name: t("dj.social.review4.name"), yacht: t("dj.social.review4.service"), text: t("dj.social.review4.text") }
            ]}
          />
        </div>
      </section>

      {/* 6. Tags & SEO Footer */}
      <section className="relative w-full pb-20 pt-10 px-6 z-20">
        <div className="max-w-4xl mx-auto text-center border-t border-white/10 pt-12">
          <p className="font-sans font-light text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">
            {t("dj.seo.tag_label")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TAGS.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-white/5 bg-transparent text-white/30 text-[10px] uppercase tracking-widest font-sans hover:text-white/60 hover:border-white/20 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
