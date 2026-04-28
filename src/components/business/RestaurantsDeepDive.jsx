import { Check } from "lucide-react";

const features = [
  "Chef whites and kitchen uniforms",
  "Table linens and napkins",
  "Stain removal expertise",
  "Daily or weekly service",
  "Front-of-house uniforms",
  "Aprons and bar towels"
];

export function RestaurantsDeepDive() {
  return (
    <section className="bg-lilac py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Restaurants & Hospitality</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Professional care for hospitality
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cassio Dry Cleaners keeps your restaurant staff looking sharp and your linens pristine. We understand the demands of the hospitality industry and deliver accordingly.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="blob absolute inset-0 bg-cream" />
            <img
              src="/assets/service-ironing.jpg"
              alt="Cassio restaurant laundry services"
              className="relative z-10 w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
