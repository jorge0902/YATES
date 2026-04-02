import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function AnimatedTestimonialsList({
  className,
  children,
  delay = 1500,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const [index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (index < childrenArray.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length]);

  const itemsToShow = useMemo(() => {
    return childrenArray.slice(0, index + 1).reverse();
  }, [index, childrenArray]);

  return (
    <div className={`flex flex-col items-center gap-6 w-full ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0.95, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="w-full">
      {children}
    </motion.div>
  );
}
