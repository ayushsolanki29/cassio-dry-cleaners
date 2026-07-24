export const metadata = {
  title: "Best Dry Cleaners & Laundry in Watford | Cassio",
  description: "Looking for the best dry cleaners in Watford? Cassio offers premium laundry, wash & fold, and ironing services with free 24-hour pickup and delivery.",
  alternates: {
    canonical: "/",
  }
};

import { Header } from "@/components/common/Header";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Services } from "@/components/home/Services";
import { Promo } from "@/components/home/Promo";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MinimalCta } from "@/components/common/MinimalCta";
import { Stats } from "@/components/home/Stats";
import { Guarantee } from "@/components/home/Guarantee";
import { Testimonials } from "@/components/home/Testimonials";
import { Business } from "@/components/home/Business";
import { Faq } from "@/components/home/Faq";
import { Newsletter } from "@/components/home/Newsletter";
import { FinalCta } from "@/components/home/FinalCta";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Promo />
      <HowItWorks />
      <MinimalCta />
      <Stats />
      <Guarantee />
      <MinimalCta 
        title="Experience premium garment care today"
        description="Join thousands of satisfied customers. Free pickup & delivery in 24 hours."
        primaryText="Get Started"
        primaryLink="/contact#contact-form"
        secondaryText="01494 445291"
        bgColor="bg-navy"
      />
      <Testimonials />
      <Business />
      <Faq />
      <Newsletter />
      <FinalCta />
      <Footer />
    </main>
  );
}
