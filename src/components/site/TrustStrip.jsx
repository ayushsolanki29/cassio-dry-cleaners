import { Clock3, Leaf, ShieldCheck, Truck } from "lucide-react";

const items = [
  { Icon: Truck, title: "Free pickup & delivery" },
  { Icon: Clock3, title: "24-48 hour turnaround" },
  { Icon: Leaf, title: "Eco-friendly cleaning" },
  { Icon: ShieldCheck, title: "100% fabric safety" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
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
