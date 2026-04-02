import React from "react";
import { cn } from "../lib/utils";

export function Highlighter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block px-1 font-bold text-[var(--color-gold)]",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 h-[30%] w-full bg-[var(--color-gold)]/20 -z-10 transform -skew-x-12" />
    </span>
  );
}
