import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AreaHero } from "@/components/home/AreaHero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Services } from "@/components/home/Services";
import { MinimalCta } from "@/components/common/MinimalCta";
import { Stats } from "@/components/home/Stats";
import { Guarantee } from "@/components/home/Guarantee";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";

// Generate metadata for each area dynamically
export async function generateMetadata({ params }) {
  // Awaited params in Next.js 15+ or App Router async setups, but here we can just use it or wait it.
  const { area } = await params;
  
  // Format area name (e.g., "croxley-green" -> "Croxley Green")
  const formattedArea = area
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Best Dry Cleaners & Laundry in ${formattedArea} | Cassio`,
    description: `Looking for a dry cleaner or laundry near me in ${formattedArea}? Cassio offers premium wash & fold, ironing, and eco-friendly dry cleaning with free pickup and delivery.`,
    alternates: {
      canonical: `/areas/${area}`,
    },
    openGraph: {
      title: `Best Dry Cleaners & Laundry in ${formattedArea} | Cassio`,
      description: `Premium dry cleaning, wash & fold, and ironing in 24 hours. Eco-friendly garment care with free pickup and delivery across ${formattedArea}.`,
    },
  };
}

// Generate static params for the areas
export async function generateStaticParams() {
  const areas = [
    "watford",
    "cassiobury",
    "croxley-green",
    "nascot-wood",
    "bushey",
    "rickmansworth",
    "kings-langley",
    "abbots-langley",
    "chorleywood",
    "northwood",
    "carpenters-park"
  ];
 
  return areas.map((area) => ({
    area: area,
  }));
}

export default async function AreaPage({ params }) {
  const { area } = await params;
  
  const formattedArea = area
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AreaHero areaName={formattedArea} />
      <TrustStrip />
      <Services />
      <MinimalCta 
        title={`Experience premium garment care in ${formattedArea} today`}
        description="Join thousands of satisfied customers. Free pickup & delivery in 24 hours."
        primaryText="Get Started"
        primaryLink="/contact#contact-form"
        secondaryText="01494 445291"
        bgColor="bg-navy"
      />
      <Stats />
      <Guarantee />
      <Testimonials targetArea={formattedArea} />
      <Faq />
      <Footer />
    </main>
  );
}
