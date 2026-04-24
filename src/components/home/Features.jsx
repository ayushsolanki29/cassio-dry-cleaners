import { Leaf, Shirt, Sparkles, Crown } from "lucide-react";

const features = [
  { Icon: Shirt, title: "Fabric-specific cleaning", desc: "Each garment is treated based on its material and care label." },
  { Icon: Sparkles, title: "Stain removal expertise", desc: "Specialised treatments to lift stubborn stains without damage." },
  { Icon: Leaf, title: "Eco-safe chemicals", desc: "Biodegradable solvents that protect both clothes and planet." },
  { Icon: Crown, title: "Luxury garment handling", desc: "White-glove service for suits, gowns and couture pieces." },
];

export function Features() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Premium features</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Built around your wardrobe.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-brand">
                <f.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <div className="mt-5 text-sm font-semibold text-primary">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
