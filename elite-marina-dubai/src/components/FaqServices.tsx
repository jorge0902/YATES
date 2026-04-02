import React from "react";
import { motion } from "framer-motion";
import { Anchor, Music, Gift, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const SERVICES = [
  {
    title: "PRIVATE CHARTER",
    desc: "For couples, families, and exclusive tourism.",
    icon: Anchor
  },
  {
    title: "YACHT PARTIES",
    desc: "Group celebrations, music, and skyline views.",
    icon: Music
  },
  {
    title: "BIRTHDAYS & EVENTS",
    desc: "Anniversaries, proposals, and special moments.",
    icon: Gift
  },
  {
    title: "CORPORATE CHARTER",
    desc: "Work teams, VIP clients, and executive comfort.",
    icon: Briefcase
  }
];

export function FaqServices() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-16 px-6 xl:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <span 
            className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-white/60 uppercase font-bold"
            dangerouslySetInnerHTML={{ __html: t("faq.services_list.title") }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-[15px] hover:bg-white/10 transition-colors shadow-xl flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-black/40 border border-white/5 flex items-center justify-center mb-6 ring-1 ring-transparent group-hover:ring-[var(--color-accent)]/50 transition-all">
                <service.icon className="w-7 h-7 text-white/80 group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
              <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 font-sans text-[13px] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
