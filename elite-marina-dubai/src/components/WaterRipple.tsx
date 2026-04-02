import React, { useEffect, useState } from "react";

export function WaterRipple() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    let id = 0;
    const handleClick = (e: MouseEvent) => {
      setRipples((prev) => [...prev, { id: id++, x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
          onAnimationEnd={() => {
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
        />
      ))}
    </div>
  );
}
