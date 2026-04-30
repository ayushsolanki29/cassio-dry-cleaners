import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Privacy Policy | Cassio Dry Cleaners",
  description: "Learn how Cassio Dry Cleaners collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">1. Introduction</h2>
            <p className="mt-4 text-muted-foreground">
              Cassio Dry Cleaners ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">2. Information We Collect</h2>
            <p className="mt-4 text-muted-foreground">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Name, email address, phone number, and delivery address</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Service preferences and special instructions</li>
              <li>Communication history with our customer service team</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">3. How We Use Your Information</h2>
            <p className="mt-4 text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide, maintain, and improve our dry cleaning services</li>
              <li>Process your orders and arrange pickup and delivery</li>
              <li>Send you service updates, confirmations, and customer support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">4. Information Sharing</h2>
            <p className="mt-4 text-muted-foreground">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Service providers who assist in our operations (payment processors, delivery partners)</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">5. Data Security</h2>
            <p className="mt-4 text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">6. Your Rights</h2>
            <p className="mt-4 text-muted-foreground">
              You have the right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">7. Cookies</h2>
            <p className="mt-4 text-muted-foreground">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">8. Changes to This Policy</h2>
            <p className="mt-4 text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy md:text-3xl">9. Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us:
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
