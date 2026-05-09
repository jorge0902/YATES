import React, { memo } from "react";

export const WaterShader = memo(() => {
    return (
        <div className="fixed top-0 left-0 w-full h-[100dvh] z-[-1] bg-black overflow-hidden pointer-events-none">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/assets/video-poster.jpg"
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            >
                <source src="/assets/video-hero.webm" type="video/webm" />
                <source src="/assets/videolargo.mp4" type="video/mp4" />
            </video>
        </div>
    );
});

WaterShader.displayName = "WaterShader";
