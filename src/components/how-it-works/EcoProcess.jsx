import { Leaf, Droplet, Recycle, Wind } from "lucide-react";

const ecoSteps = [
  { Icon: Leaf, title: "Biodegradable solvents", desc: "Plant-based cleaning agents" },
  { Icon: Droplet, title: "Water conservation", desc: "70% less water usage" },
  { Icon: Wind, title: "Energy efficient", desc: "Solar-powered facilities" },
  { Icon: Recycle, title: "Recyclable packaging", desc: "100% eco-friendly materials" }
];

export function EcoProcess() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border-2 border-brand/20 bg-sun/30 p-10">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
              <Leaf className="h-7 w-7" />
            </div>
            <h2 className="font-display text-4xl font-semibold text-navy md:text-5xl">
              Eco-friendly every step
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Cassio Dry Cleaners is committed to protecting the environment while delivering exceptional results
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ecoSteps.map((step) => (
              <div key={step.title} className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-mint text-brand">
                  <step.Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
