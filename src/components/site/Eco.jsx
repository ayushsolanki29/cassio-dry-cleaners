import { ArrowRight } from "lucide-react";

const items = [
  { value: "100%", label: "Biodegradable detergents" },
  { value: "0", label: "Single-use plastics" },
  { value: "-60%", label: "Less water than home wash" },
  { value: "EV", label: "Electric pickup fleet" },
];

export function Eco() {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-sun">Sustainable by design</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Cleaner clothes.
              <br />
              <span className="text-cream">Cleaner planet.</span>
            </h2>
            <p className="mt-5 max-w-md text-white/80">
              We use eco-certified detergents, reusable packaging, and electric vehicles for every pickup, so caring for your wardrobe never costs the Earth.
            </p>
            <a href="#sustainability" className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-display font-semibold text-navy transition hover:scale-105">
              Read our pledge
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {items.map((i) => (
              <div key={i.label} className="rounded-3xl bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
                <div className="font-display text-5xl font-semibold text-sun">{i.value}</div>
                <p className="mt-2 text-sm text-white/80">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
