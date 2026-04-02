import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export function FaqAccordion() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const FAQ_DATA: FAQCategory[] = [
    {
      title: t("faq.categories.logistics.title"),
      items: [
        { question: t("faq.categories.logistics.q1.q"), answer: t("faq.categories.logistics.q1.a") },
        { question: t("faq.categories.logistics.q2.q"), answer: t("faq.categories.logistics.q2.a") },
        { question: t("faq.categories.logistics.q3.q"), answer: t("faq.categories.logistics.q3.a") },
        { question: t("faq.categories.logistics.q4.q"), answer: t("faq.categories.logistics.q4.a") },
        { question: t("faq.categories.logistics.q5.q"), answer: t("faq.categories.logistics.q5.a") },
        { question: t("faq.categories.logistics.q6.q"), answer: t("faq.categories.logistics.q6.a") }
      ]
    },
    {
      title: t("faq.categories.experience.title"),
      items: [
        { question: t("faq.categories.experience.q1.q"), answer: t("faq.categories.experience.q1.a") },
        { question: t("faq.categories.experience.q2.q"), answer: t("faq.categories.experience.q2.a") },
        { question: t("faq.categories.experience.q3.q"), answer: t("faq.categories.experience.q3.a") },
        { question: t("faq.categories.experience.q4.q"), answer: t("faq.categories.experience.q4.a") },
        { question: t("faq.categories.experience.q5.q"), answer: t("faq.categories.experience.q5.a") },
        { question: t("faq.categories.experience.q6.q"), answer: t("faq.categories.experience.q6.a") },
        { question: t("faq.categories.experience.q7.q"), answer: t("faq.categories.experience.q7.a") },
        { question: t("faq.categories.experience.q8.q"), answer: t("faq.categories.experience.q8.a") }
      ]
    },
    {
      title: t("faq.categories.events.title"),
      items: [
        { question: t("faq.categories.events.q1.q"), answer: t("faq.categories.events.q1.a") },
        { question: t("faq.categories.events.q2.q"), answer: t("faq.categories.events.q2.a") },
        { question: t("faq.categories.events.q3.q"), answer: t("faq.categories.events.q3.a") },
        { question: t("faq.categories.events.q4.q"), answer: t("faq.categories.events.q4.a") },
        { question: t("faq.categories.events.q5.q"), answer: t("faq.categories.events.q5.a") },
        { question: t("faq.categories.events.q6.q"), answer: t("faq.categories.events.q6.a") }
      ]
    },
    {
      title: t("faq.categories.policies.title"),
      items: [
        { question: t("faq.categories.policies.q1.q"), answer: t("faq.categories.policies.q1.a") },
        { question: t("faq.categories.policies.q2.q"), answer: t("faq.categories.policies.q2.a") },
        { question: t("faq.categories.policies.q3.q"), answer: t("faq.categories.policies.q3.a") },
        { question: t("faq.categories.policies.q4.q"), answer: t("faq.categories.policies.q4.a") }
      ]
    }
  ];

  return (
    <section className="relative w-full py-20 px-6 xl:px-12 z-20">
      <div className="max-w-4xl mx-auto">
        
        {FAQ_DATA.map((category, catIdx) => (
          <div key={category.title} className="mb-12">
            <h3 className="font-serif text-xl md:text-2xl text-[var(--color-accent)] mb-6 tracking-wide drop-shadow-md border-b border-white/10 pb-4">
              {category.title}
            </h3>
            
            <div className="flex flex-col gap-4">
              {category.items.map((item, itemIdx) => {
                const id = `${catIdx}-${itemIdx}`;
                const isOpen = openIndex === id;
                return (
                  <motion.div 
                    key={id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: itemIdx * 0.05 }}
                    className="bg-black/40 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <h4 className="font-serif text-[1.1rem] text-white tracking-wide pr-8">
                        {item.question}
                      </h4>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-[var(--color-accent)] border-[var(--color-accent)]' : 'border-white/20 bg-transparent'}`}>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                           <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-white/60'}`} />
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-2">
                             <div className="w-full h-[1px] bg-white/5 mb-4"></div>
                             <p className="font-sans text-[15px] text-[#f5f5f5] leading-relaxed tracking-wide">
                               {item.answer}
                             </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
