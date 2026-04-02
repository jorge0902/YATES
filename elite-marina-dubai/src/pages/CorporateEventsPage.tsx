import React from "react";
import { motion } from "framer-motion";
import { CorporateHero } from "../components/CorporateHero";
import { CorporateValueProp } from "../components/CorporateValueProp";
import { CorporatePackages } from "../components/CorporatePackages";
import { CorporateAddons } from "../components/CorporateAddons";
import { CorporateMethodology } from "../components/CorporateMethodology";

export function CorporateEventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen relative z-10 pt-20"
    >
      {/* Dark Transparent Background with Blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md -z-10 pointer-events-none"></div>

      <CorporateHero />
      <CorporateValueProp />
      <CorporatePackages />
      <CorporateAddons />
      <CorporateMethodology />
    </motion.div>
  );
}
