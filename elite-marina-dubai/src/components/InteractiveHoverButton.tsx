import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function InteractiveHoverButton({ children, className = "", onClick }: InteractiveHoverButtonProps) {
  return (
    <motion.button
      whileHover="hover"
      initial="initial"
      onClick={onClick}
      className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full btn-old-gold px-8 py-4 font-bold uppercase tracking-wider transition-all ${className}`}
    >
      <motion.span
        variants={{
          initial: { x: 0 },
          hover: { x: -10 }
        }}
        className="relative z-10 flex items-center gap-2"
      >
        {children}
      </motion.span>

      <motion.div
        variants={{
          initial: { x: 20, opacity: 0 },
          hover: { x: 0, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute right-6 z-10"
      >
        <ArrowRight className="h-5 w-5" />
      </motion.div>

      {/* Ripple background effect */}
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 2, opacity: 0.1 }
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0 rounded-full bg-white"
      />
    </motion.button>
  );
}
