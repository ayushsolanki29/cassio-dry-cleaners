import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceTrustStrip } from "@/components/services/ServiceTrustStrip";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { FeaturedSpotlight } from "@/components/services/FeaturedSpotlight";
import { FabricCareMatrix } from "@/components/services/FabricCareMatrix";
import { ProcessStrip } from "@/components/services/ProcessStrip";
import { ServiceComparison } from "@/components/services/ServiceComparison";
import { EcoTechnology } from "@/components/services/EcoTechnology";
import { ServiceStats } from "@/components/services/ServiceStats";
import { GarmentGallery } from "@/components/services/GarmentGallery";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonials";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceAreasTeaser } from "@/components/services/ServiceAreasTeaser";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";

export const metadata = {
  title: "Services — Cassio Dry Cleaners | Professional Garment Care",
  description: "Expert dry cleaning, wash & fold, ironing, and premium care services. Eco-friendly cleaning with free pickup & delivery across London in 24-48 hours.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceHero />
      <ServiceTrustStrip />
      <ServicesGrid />
      <FeaturedSpotlight />
      <FabricCareMatrix />
      <ProcessStrip />
      <ServiceComparison />
      <EcoTechnology />
      <ServiceStats />
      <GarmentGallery />
      <ServiceTestimonials />
      <ServiceFaq />
      <ServiceAreasTeaser />
      <ServiceFinalCta />
      <Footer />
    </main>
  );
}
