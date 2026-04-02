import React from "react";
import { CompanyOwnerSection } from "../components/CompanyOwnerSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { motion } from "framer-motion";

export function CompanyOwnerPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full relative z-10 pt-20"
    >
      <CompanyOwnerSection />
      <TestimonialsSection />
    </motion.div>
  );
}
