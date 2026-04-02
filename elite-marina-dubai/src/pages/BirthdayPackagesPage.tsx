import React from "react";
import { BirthdayPackagesSection } from "../components/BirthdayPackagesSection";
import { motion } from "framer-motion";

export function BirthdayPackagesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative z-10 pt-20"
    >
      <BirthdayPackagesSection />
    </motion.div>
  );
}
