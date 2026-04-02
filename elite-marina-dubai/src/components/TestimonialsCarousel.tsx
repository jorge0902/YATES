import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BadgeCheck, Star } from "lucide-react";

export interface Testimonial {
  name: string;
  yacht: string;
  text: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(2);

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setItemsToShow(1);
      else setItemsToShow(2);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - itemsToShow : prev - 1));
  };

  const slideRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= testimonials.length - itemsToShow ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const visibleItems = testimonials.slice(currentIndex, currentIndex + itemsToShow);
  
  if (visibleItems.length < itemsToShow) {
      visibleItems.push(...testimonials.slice(0, itemsToShow - visibleItems.length));
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center group mb-8">
      
      {/* Navigation Layer */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full flex justify-between px-2 md:px-0 z-20 pointer-events-none">
        <button
          onClick={slideLeft}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] transition-all backdrop-blur-md pointer-events-auto hidden sm:flex -ml-4 md:-ml-6"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={slideRight}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] transition-all backdrop-blur-md pointer-events-auto hidden sm:flex -mr-4 md:-mr-6"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="w-full overflow-hidden px-2 py-4">
        <div className="flex gap-6 justify-center min-h-[340px]">
          <AnimatePresence custom={direction} mode="popLayout">
            {visibleItems.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}-${idx}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`flex-shrink-0 flex flex-col justify-between bg-black/20 border border-white/5 rounded-2xl p-8 relative overflow-hidden backdrop-blur-md ${
                  itemsToShow === 1 ? 'w-full max-w-xl' : 'w-[calc(50%-12px)]'
                }`}
              >
                {/* Header (Name, Badge & Stars) */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-serif font-bold text-xl">{testimonial.name}</span>
                      <div className="flex items-center gap-1.5 translate-y-[2px]">
                         <BadgeCheck className="w-4 h-4 text-[#1DA1F2] fill-[#1DA1F2]/20" />
                         <span className="text-[10px] text-white/60 font-sans tracking-widest font-bold uppercase">Verified</span>
                      </div>
                    </div>
                    <span className="text-white/40 text-[10px] font-sans font-bold tracking-[0.3em] uppercase">
                      Charter: {testimonial.yacht}
                    </span>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-white fill-white" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow flex items-center mb-8">
                  <p className="text-white/80 font-serif text-[17px] leading-[1.8] tracking-wide relative z-10 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Middle Divider Line matching reference image */}
                <div className="w-full h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 mb-6"></div>

                {/* Footer Tags */}
                <div className="flex justify-between items-center w-full">
                  <span className="text-[11px] text-white/50 font-sans uppercase tracking-[0.3em] font-bold">Dubai</span>
                  <span className="text-[11px] font-sans text-white/50 uppercase tracking-[0.3em] font-bold">High Seas Yacht</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Dots */}
      <div className="mt-8 flex items-center gap-2">
        {Array.from({ length: testimonials.length - (itemsToShow > 1 ? 1 : 0) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-[var(--color-accent)] w-6" : "bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
