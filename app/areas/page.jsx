import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AreasHero } from "@/components/areas/AreasHero";
import { CoverageMap } from "@/components/areas/CoverageMap";
import { FeaturedBoroughs } from "@/components/areas/FeaturedBoroughs";
import { NeighborhoodGrid } from "@/components/areas/NeighborhoodGrid";
import { ServiceAvailability } from "@/components/areas/ServiceAvailability";
import { PostcodeStrip } from "@/components/areas/PostcodeStrip";
import { LocalPromise } from "@/components/areas/LocalPromise";
import { LocalTestimonials } from "@/components/areas/LocalTestimonials";
import { BusinessDistrict } from "@/components/areas/BusinessDistrict";
import { ResidentialHighlight } from "@/components/areas/ResidentialHighlight";
import { ExpansionRoadmap } from "@/components/areas/ExpansionRoadmap";
import { AreasFaq } from "@/components/areas/AreasFaq";
import { AreasCta } from "@/components/areas/AreasCta";

export const metadata = {
  title: "Service Areas — Cassio Dry Cleaners | London Coverage",
  description: "Cassio Dry Cleaners serves all of Greater London with free pickup & delivery. Check if we cover your area for professional garment care in 24-48 hours.",
};

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AreasHero />
      <CoverageMap />
      <FeaturedBoroughs />
      <NeighborhoodGrid />
      <ServiceAvailability />
      <PostcodeStrip />
      <LocalPromise />
      <LocalTestimonials />
      <BusinessDistrict />
      <ResidentialHighlight />
      <ExpansionRoadmap />
      <AreasFaq />
      <AreasCta />
      <Footer />
    </main>
  );
}
