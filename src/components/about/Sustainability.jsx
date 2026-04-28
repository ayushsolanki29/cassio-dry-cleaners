import { Leaf, Droplet, Recycle, Wind } from "lucide-react";

const commitments = [
  { Icon: Leaf, title: "100% biodegradable solvents", desc: "Plant-based cleaning agents" },
  { Icon: Droplet, title: "70% water reduction", desc: "Advanced conservation systems" },
  { Icon: Wind, title: "Solar-powered facilities", desc: "Renewable energy sources" },
  { Icon: Recycle, title: "Zero-waste packaging", desc: "Fully recyclable materials" }
];

export function Sustainability() {
  return (
    <section className="bg-mint py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our commitment</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Sustainability at Cassio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We're committed to protecting the environment while delivering exceptional garment care
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-soft">
              <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-xl bg-mint text-brand">
                <item.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-muted-foreground">
            Certified by <strong className="text-navy">Green Business UK</strong> and <strong className="text-navy">EcoClean Alliance</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
