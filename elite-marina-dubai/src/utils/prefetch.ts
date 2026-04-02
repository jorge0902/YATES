/**
 * Prefetch mapping for all lazy-loaded pages.
 * Calling these functions will trigger the browser to download the corresponding JS chunk.
 */
export const prefetchMap = {
  "/": () => import("../pages/HomePage"),
  "/services": () => import("../pages/ServicesPage"),
  "/services/private-dj": () => import("../pages/PrivateDjPage"),
  "/services/catering": () => import("../pages/YachtCateringPage"),
  "/services/water-sports": () => import("../pages/WaterSportsPage"),
  "/company-owner": () => import("../pages/CompanyOwnerPage"),
  "/faq": () => import("../pages/FaqPage"),
  "/packages/birthday": () => import("../pages/BirthdayPackagesPage"),
  "/packages/corporate": () => import("../pages/CorporateEventsPage"),
  "/packages/romantic": () => import("../pages/RomanticPackagesPage"),
  "/yachts": () => import("../pages/YachtDetailsPage"),
};

export type PrefetchPath = keyof typeof prefetchMap;
