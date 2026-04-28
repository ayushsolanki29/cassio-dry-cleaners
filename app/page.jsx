import { Header } from "@/components/common/Header";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Services } from "@/components/home/Services";
import { Promo } from "@/components/home/Promo";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/home/Stats";
import { Booking } from "@/components/home/Booking";
import { Guarantee } from "@/components/home/Guarantee";
import { Fabrics } from "@/components/home/Fabrics";
import { Testimonials } from "@/components/home/Testimonials";
import { Areas } from "@/components/home/Areas";
import { AppDownload } from "@/components/home/AppDownload";
import { Gallery } from "@/components/home/Gallery";
import { Eco } from "@/components/home/Eco";
import { Business } from "@/components/home/Business";
import { Faq } from "@/components/home/Faq";
import { Blog } from "@/components/home/Blog";
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
      <Features />
      <Stats />
      <Booking />
      <Guarantee />
      <Fabrics />
      <Testimonials />
      <Areas />
      <AppDownload />
      <Gallery />
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
