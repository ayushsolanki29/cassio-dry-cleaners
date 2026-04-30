import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { SupportHours } from "@/components/contact/SupportHours";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { CaseStudy } from "@/components/business/CaseStudy";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { ContactCta } from "@/components/contact/ContactCta";

export const metadata = {
  title: "Contact Us | Cassio Dry Cleaners",
  description: "Get in touch with Cassio Dry Cleaners. We reply in under 2 hours. Phone, email, WhatsApp, or live chat support available.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactSection />
      <SupportHours />
      <ContactFaq />
      <CaseStudy />
      <SocialLinks />
      <ContactCta />
      <Footer />
    </main>
  );
}
