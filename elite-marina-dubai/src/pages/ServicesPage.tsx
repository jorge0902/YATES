import React from "react";
import { StatsSection } from "../components/StatsSection";
import { CurationsSection } from "../components/CurationsSection";
import { ExperiencesSection } from "../components/ExperiencesSection";

export function ServicesPage() {
    return (
        <div className="pt-20"> {/* Add padding top to account for the fixed header */}
            <StatsSection />
            <CurationsSection />
            <ExperiencesSection />
        </div>
    );
}
