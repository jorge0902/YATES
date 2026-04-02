import React from "react";
import { Film, Plane, Flower2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CurationsSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Film,
      title: t("curations.features.cinema.title"),
      desc: t("curations.features.cinema.desc"),
    },
    {
      icon: Plane,
      title: t("curations.features.helipad.title"),
      desc: t("curations.features.helipad.desc"),
    },
    {
      icon: Flower2,
      title: t("curations.features.spa.title"),
      desc: t("curations.features.spa.desc"),
    },
  ];

  return (
    <section className="bg-black/60 backdrop-blur-sm py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/yachts/timonyate.jpeg"
              alt="Yacht Helm"
              className="col-span-2 w-full h-64 object-cover rounded-2xl"
            />
            <img
              src="/assets/yachts/WhatsApp Image 2026-03-09 at 9.50.01 AM (2).jpeg"
              alt="Yacht Exterior"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <img
              src="/assets/yachts/WhatsApp Image 2026-03-09 at 9.50.01 AM (1).jpeg"
              alt="Yacht Interior"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 
              className="text-5xl font-black italic text-white uppercase tracking-tighter mb-6"
              dangerouslySetInnerHTML={{ __html: t("curations.title") }}
            />
            <p className="text-gray-300 mb-12 leading-relaxed">
              {t("curations.description")}
            </p>

            <div className="space-y-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center text-[var(--color-accent)]">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
