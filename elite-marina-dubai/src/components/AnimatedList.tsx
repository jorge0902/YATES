import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

const deals = [
  "Majesty 56ft: 20% OFF if booked in the next 2 hours",
  "Benetti 164ft reserved for 4 hours",
  "Azimut 62ft: Complimentary Jet Ski included",
];

export function AnimatedList() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setItems((prev) => {
        const next = [deals[i], ...prev].slice(0, 3);
        i = (i + 1) % deals.length;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <AnimatePresence>
        {items.map((item, idx) => (
          <motion.div
            key={item + idx}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur-md"
          >
            <Clock className="h-5 w-5 text-[var(--color-gold)]" />
            <span className="text-sm font-sans text-white/80">{item}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
