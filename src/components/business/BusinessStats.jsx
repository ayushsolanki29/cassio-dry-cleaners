import { TrendingUp } from "lucide-react";

const stats = [
  { value: "200+", label: "Business partners" },
  { value: "50K+", label: "Items monthly" },
  { value: "99%", label: "On-time rate" },
  { value: "4.9/5", label: "Client satisfaction" }
];

export function BusinessStats() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-cream text-brand">
            <TrendingUp className="h-7 w-7" />
          </div>
          <h2 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            Trusted by London businesses
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl font-semibold text-cream md:text-6xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
