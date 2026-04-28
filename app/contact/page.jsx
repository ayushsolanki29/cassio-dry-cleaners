import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { ContactForm } from "@/components/contact/ContactForm";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { MapIllustration } from "@/components/contact/MapIllustration";
import { SupportHours } from "@/components/contact/SupportHours";
import { ContactFaq } from "@/components/contact/ContactFaq";
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
      <ContactMethods />
      <ContactForm />
      <OfficeLocations />
      <MapIllustration />
      <SupportHours />
      <ContactFaq />
      <SocialLinks />
      <ContactCta />
      <Footer />
    </main>
  );
}
