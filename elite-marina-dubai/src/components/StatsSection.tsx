import React from "react";
import { useTranslation } from "react-i18next";

export function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    { id: "01", label: t("stats.length.label"), value: t("stats.length.value") },
    { id: "02", label: t("stats.capacity.label"), value: t("stats.capacity.value") },
    { id: "03", label: t("stats.staterooms.label"), value: t("stats.staterooms.value") },
  ];

  return (
    <section className="bg-black/50 backdrop-blur-sm py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="p-8 md:p-12 text-center border border-white/10 rounded-xl bg-black/30">
              <div className="text-6xl font-black text-[var(--color-accent)] opacity-40 mb-2">
                {stat.id}
              </div>
              <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-3xl font-black italic text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
