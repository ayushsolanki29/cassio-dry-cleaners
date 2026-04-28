import { Check } from "lucide-react";

export function ServiceOverview({ service }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Service overview</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              What's included
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {service.overview}
            </p>
          </div>

          <div className="space-y-3">
            {service.includes.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-mint/30 p-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-base font-medium text-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
