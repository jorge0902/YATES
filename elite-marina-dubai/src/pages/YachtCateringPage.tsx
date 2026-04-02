import React from "react";
import { YachtCateringSection } from "../components/YachtCateringSection";
import { motion } from "framer-motion";

export function YachtCateringPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full relative z-10 pt-20"
    >
      <YachtCateringSection />
    </motion.div>
  );
}
