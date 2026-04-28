import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessTrustStrip } from "@/components/business/BusinessTrustStrip";
import { IndustriesGrid } from "@/components/business/IndustriesGrid";
import { HotelsDeepDive } from "@/components/business/HotelsDeepDive";
import { GymsDeepDive } from "@/components/business/GymsDeepDive";
import { RestaurantsDeepDive } from "@/components/business/RestaurantsDeepDive";
import { OfficesDeepDive } from "@/components/business/OfficesDeepDive";
import { ServiceInclusions } from "@/components/business/ServiceInclusions";
import { AccountManagement } from "@/components/business/AccountManagement";
import { OnboardingProcess } from "@/components/business/OnboardingProcess";
import { BusinessStats } from "@/components/business/BusinessStats";
import { CaseStudy } from "@/components/business/CaseStudy";
import { BusinessTestimonials } from "@/components/business/BusinessTestimonials";
import { BusinessFaq } from "@/components/business/BusinessFaq";
import { BusinessCta } from "@/components/business/BusinessCta";

export const metadata = {
  title: "Business Solutions — Cassio Dry Cleaners | Commercial Laundry Services",
  description: "Professional laundry services for hotels, gyms, restaurants, and offices across London. Reliable, high-quality commercial garment care from Cassio Dry Cleaners.",
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BusinessHero />
      <BusinessTrustStrip />
      <IndustriesGrid />
      <HotelsDeepDive />
      <GymsDeepDive />
      <RestaurantsDeepDive />
      <OfficesDeepDive />
      <ServiceInclusions />
      <AccountManagement />
      <OnboardingProcess />
      <BusinessStats />
      <CaseStudy />
      <BusinessTestimonials />
      <BusinessFaq />
      <BusinessCta />
      <Footer />
    </main>
  );
}
