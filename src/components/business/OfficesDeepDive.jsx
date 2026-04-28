import { Check } from "lucide-react";

const features = [
  "Corporate uniform cleaning",
  "Executive garment care",
  "Bulk order discounts",
  "Flexible pickup schedules",
  "Individual employee accounts",
  "Invoicing and reporting"
];

export function OfficesDeepDive() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="blob absolute inset-0 bg-mint" />
              <img
                src="/assets/service-premium.jpg"
                alt="Cassio office laundry services"
                className="relative z-10 w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Offices & Coworking</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Corporate laundry solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cassio provides convenient laundry services for offices and coworking spaces. Keep your team looking professional with our corporate garment care solutions.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-xl bg-cream p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
