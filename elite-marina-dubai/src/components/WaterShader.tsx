import React, { memo } from "react";

export const WaterShader = memo(() => {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/assets/video-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/assets/video-hero.webm" type="video/webm" />
                <source src="/assets/videolargo.mp4" type="video/mp4" />
            </video>
        </div>
    );
});

WaterShader.displayName = "WaterShader";
