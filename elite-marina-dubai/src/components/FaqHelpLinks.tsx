import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FaqHelpLinks() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-16 px-6 xl:px-12 z-20 border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Help Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl justify-center mb-16">
          <a 
            href="/#fleet"
            className="flex-1 group relative px-8 py-5 btn-luxury-gold text-[#2E1A00] rounded-xl font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center"
          >
             <span className="relative z-10 flex items-center justify-center gap-2">
               {t("faq.help.view_fleet")}
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </a>
          
          <a 
            href="/packages"
            className="flex-1 group relative px-8 py-5 btn-luxury-gold text-[#2E1A00] rounded-xl font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center"
          >
             <span className="relative z-10 flex items-center justify-center gap-2">
               {t("faq.help.view_packages")}
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </a>

          <a 
            href="https://wa.me/971582177682"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group relative px-8 py-5 btn-luxury-gold text-[#2E1A00] rounded-xl font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center"
          >
             <span className="relative z-10 flex items-center justify-center gap-2">
               {t("faq.help.contact_support")}
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </a>
        </div>

        {/* SEO Tag Cloud */}
        <div className="w-full max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Dubai Yacht Rental", 
              "Yacht Party", 
              "Romantic Cruise", 
              "Sunset Cruises", 
              "Marina Yacht Rental",
              "Luxury Charter",
              "Corporate Events Dubai",
              "VIP Boat Rent"
            ].map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-white/40 text-[11px] font-sans tracking-widest uppercase hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
