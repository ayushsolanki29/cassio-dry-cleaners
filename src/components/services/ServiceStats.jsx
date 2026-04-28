import { Star } from "lucide-react";

const stats = [
  { value: "1M+", label: "Garments cleaned" },
  { value: "50K+", label: "Happy customers" },
  { value: "4.9", label: "Average rating", Icon: Star },
  { value: "24-48h", label: "Fast turnaround" },
];

export function ServiceStats() {
  return (
    <section className="bg-navy py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Trusted by London's best-dressed
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="flex items-center justify-center gap-1 font-display text-5xl font-semibold text-cream md:text-6xl">
                <span>{s.value}</span>
                {s.Icon ? <s.Icon className="h-7 w-7 fill-current md:h-8 md:w-8" /> : null}
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
