import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { StepOverview } from "@/components/how-it-works/StepOverview";
import { StepScheduling } from "@/components/how-it-works/StepScheduling";
import { StepPickup } from "@/components/how-it-works/StepPickup";
import { StepCleaning } from "@/components/how-it-works/StepCleaning";
import { StepDelivery } from "@/components/how-it-works/StepDelivery";
import { TimelineStrip } from "@/components/how-it-works/TimelineStrip";
import { TrackingSection } from "@/components/how-it-works/TrackingSection";
import { QualityGuarantee } from "@/components/how-it-works/QualityGuarantee";
import { EcoProcess } from "@/components/how-it-works/EcoProcess";
import { ProcessFaq } from "@/components/how-it-works/ProcessFaq";
import { ProcessTestimonials } from "@/components/how-it-works/ProcessTestimonials";
import { ProcessCta } from "@/components/how-it-works/ProcessCta";

export const metadata = {
  title: "How It Works — Cassio Dry Cleaners | Simple 4-Step Process",
  description: "Discover how Cassio makes professional dry cleaning effortless. From pickup to delivery in 24-48 hours with real-time tracking and eco-friendly care.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HowItWorksHero />
      <StepOverview />
      <StepScheduling />
      <StepPickup />
      <StepCleaning />
      <StepDelivery />
      <TimelineStrip />
      <TrackingSection />
      <QualityGuarantee />
      <EcoProcess />
      <ProcessFaq />
      <ProcessTestimonials />
      <ProcessCta />
      <Footer />
    </main>
  );
}
