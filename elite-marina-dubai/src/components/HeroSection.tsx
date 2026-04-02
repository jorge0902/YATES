import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { InteractiveHoverButton } from "./InteractiveHoverButton";
import { ScrollVelocity } from "./ScrollVelocity";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full">
      {/* Background handled globally by WaterShader */}

      {/* Full-screen Dark Background Overlay for Text Legibility */}
      <div 
        className="absolute inset-0 z-[5] bg-black/20 backdrop-blur-sm transition-all duration-700 hover:bg-black/30"
      ></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mt-16 w-full flex flex-col justify-between h-[75%] md:h-auto md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white mb-4 absolute top-28 left-8 md:static"
          >
            <MapPin className="h-5 w-5 text-[var(--color-accent)]" />
            <span className="text-sm font-bold tracking-widest uppercase">{t('hero.subtitle')}</span>
          </motion.div>

          <div className="absolute bottom-16 left-8 right-8 md:static md:pr-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black italic text-white uppercase leading-none tracking-tighter mb-6"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <div className="mt-8">
              <a
                href="/#fleet"
                onClick={(e) => {
                  const el = document.getElementById('fleet');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <InteractiveHoverButton>
                  {t('hero.cta')}
                </InteractiveHoverButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Velocity Banner */}
      <div className="absolute bottom-2 left-0 w-full z-20 opacity-80 mix-blend-overlay">
        <ScrollVelocity baseVelocity={2} className="text-3xl md:text-4xl">
          {t('hero.scroll_banner')}
        </ScrollVelocity>
      </div>
    </section>
  );
}
