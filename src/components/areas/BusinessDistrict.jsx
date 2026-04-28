import { Briefcase, Clock, Zap } from "lucide-react";

const features = [
  { Icon: Briefcase, text: "Specialized corporate garment care" },
  { Icon: Clock, text: "Same-day service for urgent needs" },
  { Icon: Zap, text: "Bulk order discounts available" }
];

export function BusinessDistrict() {
  return (
    <section className="flex h-screen items-center bg-sun">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Business districts</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Serving London's professionals
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cassio Dry Cleaners provides specialized service to Canary Wharf, City of London, and other business districts. Perfect for busy professionals who demand quality and convenience.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-soft">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sun text-brand">
                    <feature.Icon className="h-5 w-5" />
                  </div>
                  <p className="pt-2 text-base text-navy">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/business"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:scale-105"
              >
                Business services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="blob absolute inset-0 bg-cream" />
            <img
              src="/assets/service-premium.jpg"
              alt="Cassio business district service"
              className="relative z-10 w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
