import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootLayout } from "./layouts/RootLayout";
import { Preloader } from "./components/Preloader";

// Lazy-loaded pages with named export handling
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const CompanyOwnerPage = lazy(() => import("./pages/CompanyOwnerPage").then(m => ({ default: m.CompanyOwnerPage })));
const FaqPage = lazy(() => import("./pages/FaqPage").then(m => ({ default: m.FaqPage })));
const BirthdayPackagesPage = lazy(() => import("./pages/BirthdayPackagesPage").then(m => ({ default: m.BirthdayPackagesPage })));
const CorporateEventsPage = lazy(() => import("./pages/CorporateEventsPage").then(m => ({ default: m.CorporateEventsPage })));
const RomanticPackagesPage = lazy(() => import("./pages/RomanticPackagesPage").then(m => ({ default: m.RomanticPackagesPage })));
const PrivateDjPage = lazy(() => import("./pages/PrivateDjPage").then(m => ({ default: m.PrivateDjPage })));
const YachtCateringPage = lazy(() => import("./pages/YachtCateringPage").then(m => ({ default: m.YachtCateringPage })));
const WaterSportsPage = lazy(() => import("./pages/WaterSportsPage").then(m => ({ default: m.WaterSportsPage })));
const YachtDetailsPage = lazy(() => import("./pages/YachtDetailsPage").then(m => ({ default: m.YachtDetailsPage })));
const AllServicesPage = lazy(() => import("./pages/AllServicesPage").then(m => ({ default: m.AllServicesPage })));

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Routes>
            <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/private-dj" element={<PrivateDjPage />} />
            <Route path="/services/catering" element={<YachtCateringPage />} />
            <Route path="/services/water-sports" element={<WaterSportsPage />} />
            <Route path="/company-owner" element={<CompanyOwnerPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/packages" element={<AllServicesPage />} />
            <Route path="/packages/birthday" element={<BirthdayPackagesPage />} />
            <Route path="/packages/corporate" element={<CorporateEventsPage />} />
            <Route path="/packages/romantic" element={<RomanticPackagesPage />} />
            <Route path="/yachts/:id" element={<YachtDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  );
}
