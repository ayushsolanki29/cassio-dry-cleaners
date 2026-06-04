import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceTrustStrip } from "@/components/services/ServiceTrustStrip";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { FeaturedSpotlight } from "@/components/services/FeaturedSpotlight";
import { FabricCareMatrix } from "@/components/services/FabricCareMatrix";
import { ProcessStrip } from "@/components/services/ProcessStrip";
import { EcoTechnology } from "@/components/services/EcoTechnology";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonials";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceAreasTeaser } from "@/components/services/ServiceAreasTeaser";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Services — Cassio Dry Cleaners | Professional Garment Care",
  description: "Expert dry cleaning, wash & fold, ironing, and premium care services. Eco-friendly cleaning with free pickup & delivery across Watford in 24-48 hours.",
};

export default function ServicesPage() {
  // Convert servicesData object to array and remove Icon components
  const services = Object.values(servicesData).map(({ Icon, benefits, ...service }) => ({
    ...service,
    iconName: Icon?.name || 'Package',
    // Convert benefits to plain objects without Icon components
    benefits: benefits?.map(({ Icon: BenefitIcon, ...benefit }) => ({
      ...benefit,
      iconName: BenefitIcon?.name || 'Shield'
    })) || []
  }));

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceHero services={services} />
      <ServiceTrustStrip />
      <ServicesGrid services={services} />
      <FeaturedSpotlight services={services} />
      <FabricCareMatrix services={services} />
      <ProcessStrip />
      <EcoTechnology />
      <ServiceStats />
      <ServiceTestimonials services={services} />
      <ServiceFaq services={services} />
      <ServiceAreasTeaser />
      <ServiceFinalCta />
      <Footer />
    </main>
  );
}
