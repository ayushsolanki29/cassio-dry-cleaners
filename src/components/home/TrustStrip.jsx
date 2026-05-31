import { Clock3, Leaf, ShieldCheck, Truck } from "lucide-react";

const items = [
  { Icon: Truck, title: "Free pickup & delivery" },
  { Icon: Clock3, title: "24-48 hour turnaround" },
  { Icon: Leaf, title: "Eco-friendly cleaning" },
  { Icon: ShieldCheck, title: "100% fabric safety" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white overflow-hidden">

      {/* ── Mobile: infinite marquee ── */}
      <div className="md:hidden py-5 relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-10 px-4">
          {/* render twice for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-brand">
                <item.Icon className="h-5 w-5" />
              </span>
              <p className="font-display text-sm font-semibold text-navy">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: 4-column grid ── */}
      <div className="hidden md:grid mx-auto max-w-7xl grid-cols-4 gap-6 px-6 py-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-brand">
              <item.Icon className="h-6 w-6" />
            </span>
            <p className="font-display text-base font-semibold text-navy md:text-lg">{item.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
