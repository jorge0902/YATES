import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Anchor, Star, Music, Waves, Cake, Heart, Briefcase,
  Utensils, ArrowRight, MessageCircle, ChevronRight, Sparkles
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WHATSAPP = "971582177682";
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  cta: string;
  ctaWa?: string;
  ctaRoute?: string;
  badge?: string;
  gradient: string;
  accentColor: string;
}

export function AllServicesPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const services: ServiceCard[] = [
    {
      id: "fleet",
      icon: <Anchor className="w-8 h-8" />,
      tag: t("services.fleet.tag"),
      title: t("services.fleet.title"),
      subtitle: t("services.fleet.subtitle"),
      description: t("services.fleet.description"),
      highlights: t("services.fleet.highlights", { returnObjects: true }) as string[],
      cta: t("services.fleet.cta"),
      ctaRoute: "/services",
      ctaWa: t("services.fleet.ctaWa"),
      gradient: "from-blue-900/40 to-cyan-900/20",
      accentColor: "#00b4d8",
    },
    {
      id: "birthday",
      icon: <Cake className="w-8 h-8" />,
      tag: t("services.birthday.tag"),
      title: t("services.birthday.title"),
      subtitle: t("services.birthday.subtitle"),
      description: t("services.birthday.description"),
      highlights: t("services.birthday.highlights", { returnObjects: true }) as string[],
      cta: t("services.birthday.cta"),
      ctaRoute: "/packages/birthday",
      ctaWa: t("services.birthday.ctaWa"),
      badge: t("services.birthday.badge"),
      gradient: "from-pink-900/40 to-rose-900/20",
      accentColor: "#f72585",
    },
    {
      id: "romantic",
      icon: <Heart className="w-8 h-8" />,
      tag: t("services.romantic.tag"),
      title: t("services.romantic.title"),
      subtitle: t("services.romantic.subtitle"),
      description: t("services.romantic.description"),
      highlights: t("services.romantic.highlights", { returnObjects: true }) as string[],
      cta: t("services.romantic.cta"),
      ctaRoute: "/packages/romantic",
      ctaWa: t("services.romantic.ctaWa"),
      gradient: "from-red-900/40 to-pink-900/20",
      accentColor: "#e63946",
    },
    {
      id: "corporate",
      icon: <Briefcase className="w-8 h-8" />,
      tag: t("services.corporate.tag"),
      title: t("services.corporate.title"),
      subtitle: t("services.corporate.subtitle"),
      description: t("services.corporate.description"),
      highlights: t("services.corporate.highlights", { returnObjects: true }) as string[],
      cta: t("services.corporate.cta"),
      ctaRoute: "/packages/corporate",
      ctaWa: t("services.corporate.ctaWa"),
      gradient: "from-slate-800/40 to-blue-900/20",
      accentColor: "#4361ee",
    },
    {
      id: "dj",
      icon: <Music className="w-8 h-8" />,
      tag: t("services.dj.tag"),
      title: t("services.dj.title"),
      subtitle: t("services.dj.subtitle"),
      description: t("services.dj.description"),
      highlights: t("services.dj.highlights", { returnObjects: true }) as string[],
      cta: t("services.dj.cta"),
      ctaRoute: "/services/private-dj",
      ctaWa: t("services.dj.ctaWa"),
      badge: t("services.dj.badge"),
      gradient: "from-purple-900/40 to-violet-900/20",
      accentColor: "#7b2d8b",
    },
    {
      id: "catering",
      icon: <Utensils className="w-8 h-8" />,
      tag: t("services.catering.tag"),
      title: t("services.catering.title"),
      subtitle: t("services.catering.subtitle"),
      description: t("services.catering.description"),
      highlights: t("services.catering.highlights", { returnObjects: true }) as string[],
      cta: t("services.catering.cta"),
      ctaRoute: "/services/catering",
      ctaWa: t("services.catering.ctaWa"),
      gradient: "from-orange-900/40 to-yellow-900/20",
      accentColor: "#fb8500",
    },
    {
      id: "watersports",
      icon: <Waves className="w-8 h-8" />,
      tag: t("services.watersports.tag"),
      title: t("services.watersports.title"),
      subtitle: t("services.watersports.subtitle"),
      description: t("services.watersports.description"),
      highlights: t("services.watersports.highlights", { returnObjects: true }) as string[],
      cta: t("services.watersports.cta"),
      ctaRoute: "/services/water-sports",
      ctaWa: t("services.watersports.ctaWa"),
      gradient: "from-teal-900/40 to-cyan-900/20",
      accentColor: "#06d6a0",
    },
    {
      id: "bespoke",
      icon: <Sparkles className="w-8 h-8" />,
      tag: t("services.bespoke.tag"),
      title: t("services.bespoke.title"),
      subtitle: t("services.bespoke.subtitle"),
      description: t("services.bespoke.description"),
      highlights: t("services.bespoke.highlights", { returnObjects: true }) as string[],
      cta: t("services.bespoke.cta"),
      ctaWa: t("services.bespoke.ctaWa"),
      badge: t("services.bespoke.badge"),
      gradient: "from-slate-900/60 to-black",
      accentColor: "var(--color-accent)",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen w-full py-32 overflow-hidden">
      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.4em] text-[var(--color-accent)] uppercase mb-4 px-4 py-2 border border-[var(--color-accent)]/30 rounded-full bg-[var(--color-accent)]/10 backdrop-blur-md">
            {t("services.hero.label")}
          </span>
          <h1 className="font-serif text-white text-4xl md:text-7xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3] text-center">
            {t("services.hero.title_start")}{" "}
            <span className="italic font-light text-luxury-gold">{t("services.hero.title_accent")}</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed font-sans font-light">
            {t("services.hero.description")}
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[var(--color-accent)]/50" />
            <Star className="w-4 h-4 text-[var(--color-accent)]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[var(--color-accent)]/50" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(svc.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                relative group rounded-3xl overflow-hidden border border-white/10
                bg-gradient-to-br ${svc.gradient}
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(0,0,0,0.4)]
                hover:shadow-[0_0_60px_rgba(0,0,0,0.6)]
                transition-all duration-500
                hover:-translate-y-1
                ${svc.id === "bespoke" ? "xl:col-span-3 md:col-span-2" : ""}
              `}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${svc.accentColor}40`,
                }}
              />

              {svc.badge && (
                <div className="absolute top-5 right-5 z-10">
                  <span
                    className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${svc.accentColor}30`, color: svc.accentColor, border: `1px solid ${svc.accentColor}50` }}
                  >
                    {svc.badge}
                  </span>
                </div>
              )}

              <div className={`p-8 ${svc.id === "bespoke" ? "grid grid-cols-1 md:grid-cols-2 gap-8 items-center" : ""}`}>
                <div>
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${svc.accentColor}20`, color: svc.accentColor }}
                  >
                    {svc.icon}
                  </div>

                  <p className="text-xs font-bold tracking-[0.3em] mb-3" style={{ color: svc.accentColor }}>
                    {svc.tag}
                  </p>

                  <h2 className="text-2xl font-sans font-black text-white uppercase leading-tight mb-1">
                    {svc.title}
                  </h2>
                  <p className="text-sm text-white/50 font-light mb-4 font-sans">{svc.subtitle}</p>

                  <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans font-light">
                    {svc.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {svc.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/60 text-xs font-sans">
                        <ChevronRight className="w-3 h-3 shrink-0" style={{ color: svc.accentColor }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex gap-3 flex-wrap ${svc.id === "bespoke" ? "flex-col max-w-xs" : ""}`}>
                  <button
                    onClick={() =>
                      svc.ctaRoute ? navigate(svc.ctaRoute) : undefined
                    }
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:scale-105 group/btn shadow-lg"
                    style={{ backgroundColor: svc.accentColor }}
                  >
                    {svc.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {svc.ctaWa && (
                    <a
                      href={wa(svc.ctaWa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-sans font-bold text-sm tracking-wider uppercase border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(to right, transparent, ${svc.accentColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl overflow-hidden relative border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />
          <div className="relative z-10">
            <span className="text-xs font-sans font-bold tracking-[0.4em] text-[var(--color-accent)] uppercase">
              {t("services.footer_cta.label")}
            </span>
            <h2 className="text-4xl font-sans font-black text-white uppercase mt-4 mb-4">
              {t("services.footer_cta.title")}
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 font-sans font-light">
              {t("services.footer_cta.description")}
            </p>
            <a
              href={wa(t("services.footer_cta.ctaWa"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-accent)] text-white font-sans font-bold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[var(--color-accent)]/90 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {t("services.footer_cta.cta")}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
