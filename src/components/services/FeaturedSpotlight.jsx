import { Check, Award } from "lucide-react";

const features = [
  "Eco-friendly solvents safe for all fabrics",
  "Expert stain removal and odor treatment",
  "Hand-finished pressing for perfect results",
  "Free pickup & delivery in 24-48 hours",
  "Fully insured — your garments are protected",
  "Specialized care for delicate and luxury items",
];

export function FeaturedSpotlight() {
  return (
    <section className="flex h-screen items-center bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="blob absolute inset-0 -z-0 bg-mint" />
            <img
              src="/assets/service-drycleaning.jpg"
              alt="Professional dry cleaning service by Cassio"
              loading="lazy"
              className="relative z-10 h-96 w-full rounded-3xl object-cover shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-white p-4 shadow-pop">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trusted by</p>
                  <p className="font-display text-lg font-semibold text-navy">50,000+ customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Featured service</span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
                Premium dry cleaning you can trust
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Cassio Dry Cleaners, we combine cutting-edge technology with traditional craftsmanship to deliver exceptional results for every garment.
              </p>
            </div>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base text-navy">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-soft transition hover:scale-105"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
