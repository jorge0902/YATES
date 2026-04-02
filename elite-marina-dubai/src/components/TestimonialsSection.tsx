import React from "react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { useTranslation } from "react-i18next";

interface TestimonialsSectionProps {
  items?: { name: string; yacht: string; text: string }[];
  title?: string;
  tag?: string;
  subtitle?: string;
}

export function TestimonialsSection({ items, title, tag, subtitle }: TestimonialsSectionProps) {
  const { t } = useTranslation();

  const defaultTestimonials = [
    { name: "Daniel H.", yacht: "Majesty 101 FT", text: t("testimonials.reviews.review1.text") },
    { name: "Sophia L.", yacht: "Benetti 164 FT", text: t("testimonials.reviews.review2.text") },
    { name: "James W.", yacht: "Azimut 80 FT", text: t("testimonials.reviews.review3.text") },
    { name: "Isabella M.", yacht: "Sunseeker 95 FT", text: t("testimonials.reviews.review4.text") || "Perfect getaway for our anniversary. The crew went above and beyond." },
    { name: "Lucas K.", yacht: "Feadship 120 FT", text: t("testimonials.reviews.review5.text") || "Unmatched luxury in Dubai. Every detail was curated to perfection." },
  ];

  const displayItems = items || defaultTestimonials;

  return (
    <section className="relative w-full py-24 px-6 xl:px-12 flex flex-col items-center justify-center overflow-hidden z-20">
      
      {/* Background layer with Blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto z-10 text-center flex flex-col items-center">
        
        {/* Section Header matches the image (REVIEWS -> WHAT GUESTS SAY -> Verified reviews...) */}
        <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-white/60 uppercase font-bold mb-6">
          {tag || t("testimonials.tag")}
        </span>
        
        <div className="mb-6">
          <h2 className="font-serif text-white text-3xl md:text-[42px] font-normal uppercase tracking-widest">
            {title || t("testimonials.title")}
          </h2>
        </div>

        <p className="text-white/60 font-sans text-sm md:text-base tracking-wide mb-16 px-4 max-w-2xl mx-auto">
          {subtitle || t("testimonials.subtitle")}
        </p>

        {/* The New Side-by-Side Carousel */}
        <div className="w-full">
          <TestimonialsCarousel testimonials={displayItems} />
        </div>

      </div>
    </section>
  );
}
