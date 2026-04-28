import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { BrandStory } from "@/components/about/BrandStory";
import { MissionValues } from "@/components/about/MissionValues";
import { Timeline } from "@/components/about/Timeline";
import { TeamGrid } from "@/components/about/TeamGrid";
import { Sustainability } from "@/components/about/Sustainability";
import { PressRecognition } from "@/components/about/PressRecognition";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata = {
  title: "About Us — Cassio Dry Cleaners | Our Story & Values",
  description: "Learn about Cassio Dry Cleaners' journey from a single shop to London's trusted garment care service. Discover our commitment to quality, sustainability, and customer care.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <BrandStory />
      <MissionValues />
      <Timeline />
      <TeamGrid />
      <Sustainability />
      <PressRecognition />
      <AboutStats />
      <AboutCta />
      <Footer />
    </main>
  );
}
