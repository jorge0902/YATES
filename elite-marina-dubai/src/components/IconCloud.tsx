import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Utensils, Music, Waves, Wine, Car } from "lucide-react";

const icons = [
  { icon: Utensils, label: "Private Chef" },
  { icon: Music, label: "DJ" },
  { icon: Waves, label: "Jet Ski" },
  { icon: Wine, label: "Champagne" },
  { icon: Car, label: "VIP Transfer" },
];

export function IconCloud() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        {icons.map((item, index) => {
          const angle = (index / icons.length) * Math.PI * 2;
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center justify-center gap-2"
              animate={{
                x: [x, x * 1.2, x],
                y: [y, y * 1.2, y],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <item.icon className="h-8 w-8 text-[var(--color-gold)]" />
              </div>
              <span className="text-xs font-sans tracking-widest text-white/60 uppercase">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
