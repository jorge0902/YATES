import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Utensils, Flame, Coffee, Wine, Star, CheckCircle } from "lucide-react";
import { TestimonialsSection } from "./TestimonialsSection";
import { useTranslation } from "react-i18next";

export function YachtCateringSection() {
  const { t } = useTranslation();

  // 1. Hero Pills
  const HERO_CATEGORIES = [
    { label: t("catering.categories.canapes"), icon: Coffee },
    { label: t("catering.categories.bbq"), icon: Flame },
    { label: t("catering.categories.pastry"), icon: Utensils },
    { label: t("catering.categories.beverage"), icon: Wine },
  ];

  // 2. Visual Grid Categories
  const GRID_ITEMS = [
    { title: t("catering.grid.canapes.title"), desc: t("catering.grid.canapes.desc"), image: "/assets/catering/canapes.png", colSpan: 2 },
    { title: t("catering.grid.sushi.title"), desc: t("catering.grid.sushi.desc"), image: "/assets/catering/sushi.png", colSpan: 1 },
    { title: t("catering.grid.bbq_setup.title"), desc: t("catering.grid.bbq_setup.desc"), image: "/assets/catering/bbq.png", colSpan: 1 },
    { title: t("catering.grid.desserts.title"), desc: t("catering.grid.desserts.desc"), image: "/assets/yachts/exclusivity-2.jpeg", colSpan: 1 },
    { title: t("catering.grid.fruits.title"), desc: t("catering.grid.fruits.desc"), image: "/assets/yachts/exclusivity-3.jpeg", colSpan: 1 },
  ];

  // 3. Value Props
  const VALUE_PROPS = [
    { title: t("catering.value_props.presentation.title"), desc: t("catering.value_props.presentation.desc"), icon: Star },
    { title: t("catering.value_props.fresh.title"), desc: t("catering.value_props.fresh.desc"), icon: CheckCircle },
    { title: t("catering.value_props.professional.title"), desc: t("catering.value_props.professional.desc"), icon: Utensils }
  ];

  // 4. Menus
  const MENUS = [
    {
      title: t("catering.menus.platters.title"),
      subtitle: t("catering.menus.platters.subtitle"),
      idealFor: t("catering.menus.platters.ideal_for"),
      includes: t("catering.menus.platters.includes"),
      button: t("catering.menus.platters.button"),
      image: "/assets/catering/canapes.png"
    },
    {
      title: t("catering.menus.sushi.title"),
      subtitle: t("catering.menus.sushi.subtitle"),
      idealFor: t("catering.menus.sushi.ideal_for"),
      includes: t("catering.menus.sushi.includes"),
      button: t("catering.menus.sushi.button"),
      image: "/assets/catering/sushi.png"
    },
    {
      title: t("catering.menus.bbq.title"),
      subtitle: t("catering.menus.bbq.subtitle"),
      idealFor: t("catering.menus.bbq.ideal_for"),
      includes: t("catering.menus.bbq.includes"),
      button: t("catering.menus.bbq.button"),
      image: "/assets/catering/bbq.png"
    }
  ];

  // 5. Addons
  const ADDONS = [
    { title: t("catering.addons.cakes.title"), desc: t("catering.addons.cakes.desc") },
    { title: t("catering.addons.station.title"), desc: t("catering.addons.station.desc") },
    { title: t("catering.addons.decor.title"), desc: t("catering.addons.decor.desc") },
  ];

  return (
    <div className="w-full relative z-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Overlay Oscuro con Blur para el video de fondo */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent pointer-events-none" />
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 xl:px-12 flex flex-col items-center justify-center z-10">

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] drop-shadow-[0_2px_15px_rgba(255,255,255,0.1)] mb-8 leading-[1.3]"
            dangerouslySetInnerHTML={{ __html: t("catering.hero_title") }}
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-sans text-lg lg:text-xl mx-auto leading-loose tracking-wide font-light mb-12 max-w-4xl"
          >
            {t("catering.hero_description")}
          </motion.p>
          
          {/* Píldoras de cristal */}
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
                {t("catering.btns.request")}
              </button>
              <a 
                href="tel:+971582177682"
                className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-sans font-light text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> {t("catering.btns.call")}
              </a>
              <button className="flex-1 px-6 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-sans font-light text-[11px] md:text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> {t("catering.btns.email")}
              </button>
          </motion.div>

        </div>
      </section>

      {/* 2. Visual Grid (Galería de Selección) */}
      <section className="relative w-full py-16 px-6 xl:px-12 z-10">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GRID_ITEMS.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative h-64 md:h-80 rounded-2xl overflow-hidden group ${item.colSpan === 2 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 duration-500"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                  
                  {/* Etiqueta Flotante Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h4 className="text-white font-sans font-bold text-xs tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-white/70 font-sans font-light text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* 3. Propuesta de Valor */}
      <section className="relative w-full py-20 px-6 z-10 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light uppercase tracking-[0.15em]">
              {t("catering.value_props.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUE_PROPS.map((prop, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  <prop.icon className="w-6 h-6 text-[var(--color-accent)] mb-4 opacity-80" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-serif tracking-[0.15em] uppercase text-lg mb-2">{prop.title}</h4>
                <p className="text-white/60 font-sans font-light text-[13px] leading-relaxed px-4">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Menús Curados */}
      <section className="relative w-full py-24 px-6 xl:px-12 z-10">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold block mb-4">
              {t("catering.menus.header_tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light uppercase tracking-[0.15em]">
              {t("catering.menus.header_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MENUS.map((menu, idx) => (
              <motion.div
                key={menu.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] group relative"
              >
                <div className="relative h-56 overflow-hidden border-b border-white/10">
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-500"></div>
                   <img src={menu.image} alt={menu.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" />
                   <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6">
                  <h3 className="font-serif text-[1.2rem] font-bold uppercase text-white tracking-widest mb-1 drop-shadow-md">
                    {menu.title}
                  </h3>
                  <span className="text-[var(--color-accent)] font-sans text-[10px] tracking-widest uppercase mb-6 block opacity-90 border-b border-white/10 pb-4">
                    {menu.subtitle}
                  </span>

                  <div className="flex-grow mb-8 space-y-4">
                    <div>
                      <span className="block text-white/40 font-sans text-[10px] uppercase tracking-widest mb-1">{t("catering.menus.labels.ideal_for")}</span>
                      <p className="text-white/80 font-sans font-light text-[13px] leading-relaxed">{menu.idealFor}</p>
                    </div>
                    <div>
                      <span className="block text-white/40 font-sans text-[10px] uppercase tracking-widest mb-1">{t("catering.menus.labels.includes")}</span>
                      <p className="text-white/80 font-sans font-light text-[13px] leading-relaxed">{menu.includes}</p>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-transparent border border-white/20 text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 font-sans font-bold text-[11px] tracking-[0.2em] uppercase rounded-full transition-all duration-300 relative overflow-hidden group/btn">
                     <span className="relative z-10">{menu.button}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Complementos (Add-ons) */}
      <section className="relative w-full py-20 px-6 bg-black/40 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-light uppercase tracking-[0.15em] mb-4">
              {t("catering.addons.title")}
            </h2>
            <p className="text-white/50 font-sans font-light text-sm max-w-xl mx-auto">{t("catering.addons.subtitle")}</p>
          </div>

          <div className="flex flex-col gap-4">
            {ADDONS.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors"
              >
                <div>
                  <h4 className="text-white font-sans font-bold text-xs tracking-widest uppercase mb-2">{addon.title}</h4>
                  <p className="text-white/60 font-sans font-light text-[13px] md:max-w-xl">{addon.desc}</p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 border border-white/20 rounded-full text-white/80 font-sans text-[10px] tracking-widest uppercase hover:text-white hover:border-white/50 transition-colors">
                  {t("catering.addons.add_btn")}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Validación y Cierre */}
      <section className="relative w-full py-24 px-6 z-10 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <TestimonialsSection 
            tag={t("catering.menus.reviews_tag")}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            items={[
              { name: t("catering.testimonials.review1.name"), yacht: t("catering.testimonials.review1.tag"), text: t("catering.testimonials.review1.text") },
              { name: t("catering.testimonials.review2.name"), yacht: t("catering.testimonials.review2.tag"), text: t("catering.testimonials.review2.text") },
              { name: t("catering.testimonials.review3.name"), yacht: t("catering.testimonials.review3.tag"), text: t("catering.testimonials.review3.text") },
              { name: t("catering.testimonials.review4.name"), yacht: t("catering.testimonials.review4.tag"), text: t("catering.testimonials.review4.text") }
            ]}
          />

          <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent py-16 px-4 rounded-3xl border-y border-white/10">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light uppercase tracking-[0.1em] mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t("catering.cta.title") }} />
            <a
              href="https://wa.me/971582177682"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 btn-old-gold rounded-full font-sans font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              {t("catering.cta.button")}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
