import { Clock3, Gem, Leaf, ShieldCheck } from "lucide-react";

const guarantees = [
  { Icon: ShieldCheck, title: "100% Satisfaction", desc: "Not happy? We'll re-clean it free.", bg: "bg-mint" },
  { Icon: Clock3, title: "On-time Promise", desc: "Late delivery? Get 20% off your next order.", bg: "bg-sun" },
  { Icon: Gem, title: "Damage Protection", desc: "Insured up to \u00a310,000 per garment.", bg: "bg-lilac" },
  { Icon: Leaf, title: "Eco Guarantee", desc: "Non-toxic detergents, safe for skin.", bg: "bg-cream" },
];

export function Guarantee() {
  return (
    <section className="bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our promise</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">Backed by guarantees you can trust</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Every order is covered by our quality promise, so you can relax.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g) => (
            <div key={g.title} className="group rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${g.bg} text-brand transition group-hover:scale-110`}>
                <g.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
