import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  color?: string[];
  borderWidth?: number;
  duration?: number;
}

export function ShineBorder({
  children,
  className = "",
  color = ["#ec5b13", "#fbbf24", "#ffffff"],
  borderWidth = 1,
  duration = 14,
}: ShineBorderProps) {
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-xl p-[${borderWidth}px] ${className}`}
      style={{ padding: borderWidth }}
    >
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${color[0]} 360deg)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
      />
      <div className="relative z-10 h-full w-full rounded-[calc(0.75rem-1px)] bg-[#2a1f18]/20 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
