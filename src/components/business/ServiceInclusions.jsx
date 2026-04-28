import { Check } from "lucide-react";

const inclusions = [
  "Free pickup & delivery",
  "Dedicated account manager",
  "Flexible scheduling",
  "Volume discounts",
  "Quality guarantees",
  "24/7 customer support",
  "Custom invoicing",
  "Real-time tracking",
  "Eco-friendly cleaning",
  "Express service options",
  "Stain removal expertise",
  "Professional pressing",
  "Inventory management",
  "Damage protection",
  "Contract flexibility",
  "Performance reporting"
];

export function ServiceInclusions() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">What's included</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Comprehensive business services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything your business needs from Cassio Dry Cleaners
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-soft">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-navy">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
