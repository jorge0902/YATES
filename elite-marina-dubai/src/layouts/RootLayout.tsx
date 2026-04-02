import React from "react";
import { Outlet } from "react-router-dom";
import { WaterShader } from "../components/WaterShader";
import { WaterOverlay } from "../components/WaterOverlay";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

/**
 * RootLayout provides a persistent UI structure that prevents 
 * global components (like the background video) from unmounting 
 * during route transitions.
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen text-[var(--color-dark)] selection:bg-[var(--color-accent)] selection:text-white font-sans overflow-hidden">
      {/* Persistent Background Layer */}
      <WaterShader />
      <WaterOverlay />
      
      {/* Persistent Navigation */}
      <Header />
      
      {/* Route-dependent Content */}
      <main className="w-full h-full relative z-10">
        <Outlet />
      </main>

      {/* Persistent Footer and CTA */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
