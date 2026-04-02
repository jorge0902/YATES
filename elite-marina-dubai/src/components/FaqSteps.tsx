import React from "react";
import { motion } from "framer-motion";
import { Ship, Calendar, GlassWater } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FaqSteps() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-20 px-6 xl:px-12 z-20 border-t border-white/5 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 
            className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3] text-center"
            dangerouslySetInnerHTML={{ __html: t("faq.steps.title") }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent z-0"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-6 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm flex items-center justify-center border-2 border-[#111]">1</span>
              <Ship className="w-10 h-10 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-3">Choose Your Yacht</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-[280px]">
              Choose a yacht from our fleet or tell us your number of guests for personalized advice.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-6 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm flex items-center justify-center border-2 border-[#111]">2</span>
              <Calendar className="w-10 h-10 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-3">Confirm the Route</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-[280px]">
              Confirm the date, time, and departure point (Dubai Marina or Dubai Harbour).
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] mb-6 relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm flex items-center justify-center border-2 border-[#111]">3</span>
              <GlassWater className="w-10 h-10 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-3">Come Aboard</h3>
            <p className="text-white/60 font-sans text-sm leading-relaxed max-w-[280px]">
              Come aboard and enjoy impeccable service with our premier crew.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
