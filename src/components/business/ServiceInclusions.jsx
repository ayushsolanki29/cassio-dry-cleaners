import { Check } from "lucide-react";

const inclusions = [
  "Free pickup & delivery",
  "Flexible scheduling",
  "Volume discounts",
  "Quality guarantees",
  "Custom invoicing",
  "Eco-friendly cleaning",
  "Express service options",
  "Stain removal expertise",
  "Professional pressing",
  "Damage protection",

];

export function ServiceInclusions() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">What's included</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Comprehensive business services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            Everything your business needs from Cassio Dry Cleaners
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {inclusions.map((item) => (
            <div key={item} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 rounded-xl bg-white p-3 sm:p-5 shadow-soft text-center sm:text-left transition-transform hover:-translate-y-1 hover:shadow-card">
              <span className="mt-0 sm:mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-navy leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
