import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

interface Trail {
  x: number;
  y: number;
  age: number;
}

export const WaterOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ripples: Ripple[] = [];
    const trail: Trail[] = [];

    let mouseX = -500;
    let mouseY = -500;
    let frameCount = 0;

    const spawnRipple = (x: number, y: number, big = false) => {
      ripples.push({
        x, y,
        radius: 0,
        maxRadius: big ? 200 : 80,
        alpha: big ? 0.4 : 0.22,
        speed: big ? 3.5 : 2.2,
      });
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      trail.push({ x: mouseX, y: mouseY, age: 0 });
      if (trail.length > 35) trail.shift();
      // Spawn small ripple every 8 frames of movement
      if (frameCount % 8 === 0) spawnRipple(mouseX, mouseY);
    };

    const onClick = (e: MouseEvent) => {
      spawnRipple(e.clientX, e.clientY, true);
      spawnRipple(e.clientX, e.clientY, true);
    };

    const onTouchMove = (e: TouchEvent) => {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
      trail.push({ x: mouseX, y: mouseY, age: 0 });
      if (trail.length > 35) trail.shift();
      if (frameCount % 8 === 0) spawnRipple(mouseX, mouseY);
    };

    const onTouchStart = (e: TouchEvent) => {
      spawnRipple(e.touches[0].clientX, e.touches[0].clientY, false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    let rafId: number;

    const draw = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 2. Draw trail — each point is a small expanding bubble
      for (let i = trail.length - 1; i >= 0; i--) {
        const pt = trail[i];
        pt.age += 0.06;
        const opacity = Math.max(0, 0.08 - pt.age); // more subtle trail
        const r = 8 + pt.age * 30;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(180, 215, 255, ${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        if (pt.age >= 0.8) trail.splice(i, 1);
      }

      // 3. Draw concentric ripple rings
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.radius += rp.speed;
        rp.alpha -= rp.alpha / (rp.maxRadius / rp.speed) * 1.1;

        if (rp.alpha <= 0.01 || rp.radius >= rp.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        const progress = rp.radius / rp.maxRadius;

        // Outer ring
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(180, 215, 255, ${rp.alpha * 0.85})`;
        ctx.lineWidth = 1.5 - progress * 0.5;
        ctx.stroke();

        // Second inner ring (slight offset for depth)
        if (rp.radius > 20) {
          ctx.beginPath();
          ctx.arc(rp.x, rp.y, rp.radius * 0.65, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 230, 255, ${rp.alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 50,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
};
