import { CTASection } from '../../components/CTASection';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { ItinerarySection } from '../../components/ItinerarySection';
import { JourneySection } from '../../components/JourneySection';
import { SocialSection } from '../../components/SocialSection';
import { StatsStrip } from '../../components/StatsStrip';
import { UGCContentSection } from '../../components/UGCContentSection';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-page text-text">
      <Hero />
      <StatsStrip />
      <JourneySection />
      <ItinerarySection />
      <UGCContentSection />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
