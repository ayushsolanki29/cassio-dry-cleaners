import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessTrustStrip } from "@/components/business/BusinessTrustStrip";
import { IndustriesGrid } from "@/components/business/IndustriesGrid";
import { IndustryDeepDives } from "@/components/business/IndustryDeepDives";
import { ServiceInclusions } from "@/components/business/ServiceInclusions";
import { OnboardingProcess } from "@/components/business/OnboardingProcess";
import { BusinessStats } from "@/components/business/BusinessStats";
import { CaseStudy } from "@/components/business/CaseStudy";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { BusinessCta } from "@/components/business/BusinessCta";

export const metadata = {
  title: "Commercial Laundry Services in Watford | Cassio Dry Cleaners",
  description: "Professional laundry services for hotels, gyms, restaurants, and offices across Watford. Reliable, high-quality commercial garment care from Cassio Dry Cleaners.",
  alternates: {
    canonical: "/business",
  }
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BusinessHero />
      <BusinessTrustStrip />
      <IndustriesGrid />
      <IndustryDeepDives />
      <ServiceInclusions />
      <OnboardingProcess />
      <BusinessStats />
      <CaseStudy />
      <Testimonials />
      <Faq />
      <BusinessCta />
      <Footer />
    </main>
  );
}
