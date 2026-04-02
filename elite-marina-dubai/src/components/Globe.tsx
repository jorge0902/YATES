import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.83, 0.68, 0.21], // Gold
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        { location: [25.2048, 55.2708], size: 0.1 }, // Dubai
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative flex aspect-square w-full max-w-[600px] items-center justify-center overflow-hidden mx-auto">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", contain: "layout paint size" }}
      />
    </div>
  );
}
