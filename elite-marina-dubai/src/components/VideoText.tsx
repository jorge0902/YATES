import React from "react";
import { cn } from "../lib/utils";

interface VideoTextProps {
  text: string;
  videoSrc: string;
  className?: string;
}

export function VideoText({ text, videoSrc, className }: VideoTextProps) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden py-24", className)}>
      <h2 className="text-[15vw] font-serif font-bold uppercase leading-none tracking-tighter text-transparent bg-clip-text relative z-10">
        {text}
      </h2>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50 pointer-events-none"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
