import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Camera, Settings, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CorporateValueProp() {
  const { t } = useTranslation();

  const PROPOSITIONS = (t("corporate.value_prop.propositions", { returnObjects: true }) as { title: string, desc: string }[]).map((prop, idx) => {
    const icons = [Award, ShieldCheck, Camera, Settings, MapPin, Users];
    return {
      ...prop,
      icon: icons[idx]
    };
  });

  return (
    <section className="relative w-full py-20 px-6 xl:px-12 z-20 overflow-hidden">
      
      {/* Background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#050505] pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-bold">
            {t("corporate.value_prop.tag")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {PROPOSITIONS.map((prop, idx) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-8 bg-black/40 backdrop-blur-[20px] rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group hover:bg-white/5 transition-colors duration-300"
            >
              <prop.icon className="w-8 h-8 text-[var(--color-accent)] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-white font-serif tracking-[0.15em] uppercase text-sm mb-4">{prop.title}</h4>
              <p className="text-white/60 font-sans font-light text-[13px] leading-relaxed">{prop.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
