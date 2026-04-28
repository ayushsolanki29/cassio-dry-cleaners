import { Leaf, Droplet, Wind, Recycle } from "lucide-react";

const ecoFeatures = [
  { Icon: Leaf, title: "Biodegradable solvents", desc: "Plant-based cleaning agents safe for you and the planet." },
  { Icon: Droplet, title: "Water conservation", desc: "Advanced systems reduce water usage by 70% vs traditional methods." },
  { Icon: Wind, title: "Energy efficient", desc: "Solar-powered facilities and low-energy drying technology." },
  { Icon: Recycle, title: "Recyclable packaging", desc: "All garment bags and hangers are 100% recyclable." },
];

export function EcoTechnology() {
  return (
    <section className="flex h-screen items-center bg-mint">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Eco-friendly commitment</span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
                Clean technology for a cleaner planet
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Cassio Dry Cleaners, we believe premium care shouldn't come at the planet's expense. Our eco-friendly processes deliver exceptional results while protecting the environment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ecoFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-brand shadow-soft">
                    <feature.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="blob absolute inset-0 -z-0 bg-sun" />
            <img
              src="/assets/section-towels.jpg"
              alt="Eco-friendly cleaning at Cassio Dry Cleaners"
              loading="lazy"
              className="relative z-10 h-96 w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
