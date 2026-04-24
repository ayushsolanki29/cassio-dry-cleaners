import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { Promo } from "@/components/site/Promo";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { Booking } from "@/components/site/Booking";
import { Guarantee } from "@/components/site/Guarantee";
import { Fabrics } from "@/components/site/Fabrics";
import { Testimonials } from "@/components/site/Testimonials";
import { Areas } from "@/components/site/Areas";
import { AppDownload } from "@/components/site/AppDownload";
import { Eco } from "@/components/site/Eco";
import { Business } from "@/components/site/Business";
import { Faq } from "@/components/site/Faq";
import { Blog } from "@/components/site/Blog";
import { Newsletter } from "@/components/site/Newsletter";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Promo />
      <HowItWorks />
      <Features />
      <Stats />
      <Booking />
      <Guarantee />
      <Fabrics />
      <Testimonials />
      <Areas />
      <AppDownload />
      <Eco />
      <Business />
      <Faq />
      <Blog />
      <Newsletter />
      <FinalCta />
      <Footer />
    </main>
  );
}
