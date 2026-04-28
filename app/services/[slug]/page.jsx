import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ServiceDetailHero } from "@/components/service-detail/ServiceDetailHero";
import { ServiceOverview } from "@/components/service-detail/ServiceOverview";
import { ServiceBenefits } from "@/components/service-detail/ServiceBenefits";
import { ServiceProcess } from "@/components/service-detail/ServiceProcess";
import { ServiceFabrics } from "@/components/service-detail/ServiceFabrics";
import { ServiceCare } from "@/components/service-detail/ServiceCare";
import { ServiceWarnings } from "@/components/service-detail/ServiceWarnings";
import { ServiceTestimonial } from "@/components/service-detail/ServiceTestimonial";
import { ServiceFaq } from "@/components/service-detail/ServiceFaq";
import { ServiceCta } from "@/components/service-detail/ServiceCta";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Cassio Dry Cleaners | Professional Garment Care`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Extract Icon and benefits separately to avoid passing functions to client components
  const { Icon, benefits, ...serviceData } = service;
  
  // Convert benefits to plain objects
  const plainBenefits = benefits.map(({ Icon: BenefitIcon, ...rest }) => ({
    ...rest,
    iconName: BenefitIcon.name || 'Shield'
  }));

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServiceDetailHero service={{ ...serviceData, iconName: Icon.name }} />
      <ServiceOverview service={serviceData} />
      <ServiceBenefits service={{ ...serviceData, benefits: plainBenefits }} />
      <ServiceProcess service={serviceData} />
      <ServiceFabrics service={serviceData} />
      <ServiceCare service={serviceData} />
      <ServiceWarnings service={serviceData} />
      <ServiceTestimonial service={serviceData} />
      <ServiceFaq service={serviceData} />
      <ServiceCta service={serviceData} />
      <Footer />
    </main>
  );
}
