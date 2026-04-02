import React, { useState, useEffect, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  threshold = 0.1, 
  rootMargin = "200px" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef} className="min-h-[100px]">
      {isVisible ? children : <div className="h-full w-full" />}
    </div>
  );
};
