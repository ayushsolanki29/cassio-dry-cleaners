import { Check } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    tagline: "Perfect for everyday garments",
    bg: "bg-white",
    features: [
      "Dry cleaning & wash/fold",
      "Professional ironing",
      "Free pickup & delivery",
      "24-48 hour turnaround",
      "Eco-friendly cleaning",
      "Basic stain removal",
    ],
  },
  {
    name: "Premium",
    tagline: "For delicate & luxury items",
    bg: "bg-cream",
    featured: true,
    features: [
      "All Standard features",
      "Hand-finished pressing",
      "Advanced stain treatment",
      "Leather & suede care",
      "Wedding dress cleaning",
      "White-glove handling",
      "Garment insurance included",
    ],
  },
  {
    name: "Business",
    tagline: "Tailored for corporate clients",
    bg: "bg-white",
    features: [
      "All Premium features",
      "Dedicated account manager",
      "Bulk order discounts",
      "Priority scheduling",
      "Custom invoicing",
      "Same-day service available",
    ],
  },
];

export function ServiceComparison() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Service tiers</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Choose the right service for you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners offers three service levels to match your needs — from everyday essentials to luxury care.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border ${
                tier.featured ? "border-brand shadow-pop" : "border-border shadow-soft"
              } ${tier.bg}`}
            >
              {tier.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-navy">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>

                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint text-brand">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-navy">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="/contact"
                    className={`block w-full rounded-full py-3 text-center font-semibold transition ${
                      tier.featured
                        ? "bg-brand text-white shadow-soft hover:scale-105"
                        : "bg-secondary text-navy hover:bg-border"
                    }`}
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
