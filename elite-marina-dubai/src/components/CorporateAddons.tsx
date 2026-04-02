import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Mic, Music, Camera, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CorporateAddons() {
  const { t } = useTranslation();

  const ADDONS = (t("corporate.addons.items", { returnObjects: true }) as { title: string, desc: string }[]).map((item, idx) => {
    const icons = [UtensilsCrossed, Mic, Music, Camera, Tag];
    return {
      ...item,
      icon: icons[idx]
    };
  });

  return (
    <section className="relative w-full py-16 px-6 xl:px-12 z-20 bg-black/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold">
            {t("corporate.addons.tag")}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {ADDONS.map((addon, idx) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19px)] flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <addon.icon className="w-7 h-7 text-white/40 group-hover:text-white transition-colors mb-4 stroke-1" />
              <h4 className="text-white font-sans font-bold text-[11px] tracking-widest uppercase mb-2">
                {addon.title}
              </h4>
              <p className="text-white/50 font-sans text-[11px] leading-relaxed">
                {addon.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
