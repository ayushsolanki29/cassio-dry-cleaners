import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Terms & Conditions | Cassio Dry Cleaners",
  description: "Read the terms and conditions for using Cassio Dry Cleaners services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">1. Acceptance of Terms</h2>
            <p className="mt-4 text-muted-foreground">
              By using Cassio Dry Cleaners services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">2. Services</h2>
            <p className="mt-4 text-muted-foreground">
              Cassio Dry Cleaners provides professional dry cleaning, laundry, and garment care services including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Dry cleaning services</li>
              <li>Wash and fold laundry services</li>
              <li>Ironing and pressing services</li>
              <li>Premium care for luxury garments</li>
              <li>Wedding dress cleaning and preservation</li>
              <li>Leather and suede care</li>
              <li>Home textiles cleaning</li>
              <li>Shoe care and restoration</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">3. Pricing and Payment</h2>
            <p className="mt-4 text-muted-foreground">
              Prices are subject to change without notice. Payment is due upon delivery unless otherwise arranged. We accept cash, credit cards, and digital payment methods. All prices include VAT where applicable.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">4. Pickup and Delivery</h2>
            <p className="mt-4 text-muted-foreground">
              We offer free pickup and delivery within our service areas. Standard turnaround time is 24-48 hours. Same-day service is available in select areas for an additional fee. You must be available at the scheduled pickup and delivery times.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">5. Customer Responsibilities</h2>
            <p className="mt-4 text-muted-foreground">
              Customers are responsible for:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Checking all pockets and removing personal items before service</li>
              <li>Pointing out stains and damage at the time of drop-off</li>
              <li>Providing accurate care instructions for special items</li>
              <li>Collecting items within 30 days of completion</li>
              <li>Inspecting items upon delivery and reporting issues within 48 hours</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">6. Liability and Insurance</h2>
            <p className="mt-4 text-muted-foreground">
              Cassio Dry Cleaners maintains insurance coverage for items in our care. Our liability is limited to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>10 times the cleaning charge for standard items</li>
              <li>Declared value for premium care items (with additional insurance)</li>
              <li>Fair market value for items without proof of purchase</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              We are not liable for:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Pre-existing damage or wear</li>
              <li>Color loss due to fabric defects or previous cleaning</li>
              <li>Shrinkage of natural fibers</li>
              <li>Damage to buttons, beads, or trims that are not securely attached</li>
              <li>Items left uncollected for more than 30 days</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">7. Uncollected Items</h2>
            <p className="mt-4 text-muted-foreground">
              Items not collected within 30 days will incur a storage fee of £2 per item per week. Items uncollected after 90 days may be donated to charity or disposed of at our discretion.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">8. Cancellation Policy</h2>
            <p className="mt-4 text-muted-foreground">
              Pickup appointments can be cancelled or rescheduled up to 2 hours before the scheduled time. Orders already in process cannot be cancelled, but can be held for later delivery.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">9. Complaints and Disputes</h2>
            <p className="mt-4 text-muted-foreground">
              If you are not satisfied with our service, please contact us within 48 hours of delivery. We will investigate all complaints and work to resolve issues fairly. Disputes that cannot be resolved may be subject to arbitration under UK law.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">10. Intellectual Property</h2>
            <p className="mt-4 text-muted-foreground">
              All content on our website, including text, graphics, logos, and images, is the property of Cassio Dry Cleaners and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">11. Changes to Terms</h2>
            <p className="mt-4 text-muted-foreground">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">12. Governing Law</h2>
            <p className="mt-4 text-muted-foreground">
              These Terms and Conditions are governed by the laws of England and Wales. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">13. Contact Information</h2>
            <p className="mt-4 text-muted-foreground">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <ul className="mt-4 list-none space-y-2 text-muted-foreground">
              <li><strong>Email:</strong> hello@cassio.com</li>
              <li><strong>Phone:</strong> +44 20 1234 5678</li>
              <li><strong>Address:</strong> 166 Cassiobury Dr, Watford WD17 3AJ, United Kingdom</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
