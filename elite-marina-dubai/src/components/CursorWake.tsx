import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CursorWake() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; vx: number; vy: number }[]>([]);
  const lastPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const idCounter = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 10) {
        const angle = Math.atan2(dy, dx);
        const speed = 8; // Spread speed
        
        // Left wake
        const angleL = angle + Math.PI * 0.8;
        // Right wake
        const angleR = angle - Math.PI * 0.8;

        setParticles(prev => [
          ...prev,
          { id: idCounter.current++, x: e.clientX, y: e.clientY, vx: Math.cos(angleL) * speed, vy: Math.sin(angleL) * speed },
          { id: idCounter.current++, x: e.clientX, y: e.clientY, vx: Math.cos(angleR) * speed, vy: Math.sin(angleR) * speed }
        ].slice(-50)); // Limit particles to maintain performance with backdrop-filter

        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.8, scale: 0.2, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: 3,
              x: p.x + p.vx * 4,
              y: p.y + p.vy * 4
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute h-12 w-12 rounded-full border border-white/10 bg-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-[4px] backdrop-brightness-110"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}


