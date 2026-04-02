import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { prefetchMap, PrefetchPath } from "../utils/prefetch";

interface PrefetchLinkProps extends LinkProps {
  to: string;
}

/**
 * A wrapper for React Router's Link that prefetches the target page's
 * component chunk when the user hovers or touches it, respecting network conditions.
 */
export const PrefetchLink: React.FC<PrefetchLinkProps> = ({ 
  to, 
  onMouseEnter, 
  onTouchStart,
  ...props 
}) => {
  const prefetch = () => {
    // 1. Check for "Save Data" mode
    const conn = (navigator as any).connection;
    if (conn && (conn.saveData || (conn.effectiveType && ["slow-2g", "2g", "3g"].includes(conn.effectiveType)))) {
      return;
    }

    // 2. Trigger the prefetch
    if (to in prefetchMap) {
      prefetchMap[to as PrefetchPath]();
    } else if (to.startsWith("/yachts/")) {
      prefetchMap["/yachts"]();
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    prefetch();
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    prefetch();
    if (onTouchStart) onTouchStart(e);
  };

  return (
    <Link 
      to={to} 
      onMouseEnter={handleMouseEnter} 
      onTouchStart={handleTouchStart}
      {...props} 
    />
  );
};
