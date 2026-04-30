import { Users, MapPin, Package, TrendingUp } from "lucide-react";

const stats = [
  { Icon: Users, value: "50K+", label: "Happy customers" },
  { Icon: MapPin, value: "32", label: "London boroughs" },
  { Icon: Package, value: "1M+", label: "Garments cleaned" },
  { Icon: TrendingUp, value: "8", label: "Years of excellence" }
];

export function AboutStats() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl font-semibold text-cream md:text-5xl">
            Cassio by the numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-cream text-brand">
                <stat.Icon className="h-8 w-8" />
              </div>
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
