import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { StepOverview } from "@/components/how-it-works/StepOverview";
import { StepsSection } from "@/components/how-it-works/StepsSection";
import { TimelineStrip } from "@/components/how-it-works/TimelineStrip";
import { QualityGuarantee } from "@/components/how-it-works/QualityGuarantee";
import { EcoProcess } from "@/components/how-it-works/EcoProcess";
import { Faq } from "@/components/home/Faq";
import { Testimonials } from "@/components/home/Testimonials";
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
      <StepsSection />
      <TimelineStrip />
      <QualityGuarantee />
      <EcoProcess />
      <Faq />
      <Testimonials />
      <ProcessCta />
      <Footer />
    </main>
  );
}
