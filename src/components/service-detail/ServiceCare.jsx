import { AlertCircle } from "lucide-react";

export function ServiceCare({ service }) {
  return (
    <section className="bg-lilac py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Care tips</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              How to care for your garments
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Follow these expert tips from Cassio Dry Cleaners to keep your garments in perfect condition.
            </p>
          </div>

          <div className="space-y-4">
            {service.careTips.map((tip, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-white p-5 shadow-soft">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white font-display text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-base text-navy">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
