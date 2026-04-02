import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function CorporateMethodology() {
  const { t } = useTranslation();

  const STEPS = [
    { num: "01", title: t('how_it_works.steps.step1.title'), desc: t('how_it_works.steps.step1.desc') },
    { num: "02", title: t('how_it_works.steps.step2.title'), desc: t('how_it_works.steps.step2.desc') },
    { num: "03", title: t('how_it_works.steps.step3.title'), desc: t('how_it_works.steps.step3.desc') },
    { num: "04", title: t('how_it_works.steps.step4.title'), desc: t('how_it_works.steps.step4.desc') }
  ];

  return (
    <section className="relative w-full py-24 px-6 xl:px-12 z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-serif text-white text-3xl md:text-4xl font-normal uppercase tracking-widest drop-shadow-md"
          >
            {t('how_it_works.title')}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto relative pl-12 md:pl-0">
          
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-accent)]/30 to-transparent -translate-x-1/2"></div>
          
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex items-center md:justify-between w-full group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                {/* Number Circle Node */}
                <div className="absolute left-[-41px] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[var(--color-accent)] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.5)] z-10">
                   <span className="text-white font-serif text-[13px] font-bold">{step.num}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-xl p-6 shadow-lg hover:border-[var(--color-accent)]/50 transition-colors ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <h4 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/60 font-sans text-[13px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block w-[calc(50%-3rem)]"></div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
