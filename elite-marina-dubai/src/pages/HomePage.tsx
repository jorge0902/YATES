import { HeroSection } from "../components/HeroSection";
import { IntroSection } from "../components/IntroSection";
import { FleetSection } from "../components/FleetSection";
import { LazySection } from "../components/LazySection";

export function HomePage() {
    return (
        <div className="w-full relative z-10">
            <HeroSection />
            <LazySection>
                <IntroSection />
            </LazySection>
            <LazySection>
                <FleetSection />
            </LazySection>
        </div>
    );
}
