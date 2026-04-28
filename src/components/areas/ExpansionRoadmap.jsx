import { MapPin, Clock } from "lucide-react";

const comingSoon = [
  { area: "Brighton", quarter: "Q3 2026" },
  { area: "Oxford", quarter: "Q3 2026" },
  { area: "Cambridge", quarter: "Q4 2026" },
  { area: "Reading", quarter: "Q4 2026" },
  { area: "Bristol", quarter: "Q1 2027" },
  { area: "Manchester", quarter: "Q1 2027" }
];

export function ExpansionRoadmap() {
  return (
    <section className="flex h-screen items-center bg-mint">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Expansion plans</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Coming soon to more cities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners is expanding beyond London. Here's where we're headed next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((location) => (
            <div
              key={location.area}
              className="relative overflow-hidden rounded-2xl border-2 border-dashed border-brand/30 bg-white p-6 text-center"
            >
              <div className="absolute right-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-bold text-brand">
                COMING SOON
              </div>
              
              <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-brand">
                <MapPin className="h-7 w-7" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-navy">{location.area}</h3>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Expected {location.quarter}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-muted-foreground">
            Want Cassio in your city? <a href="/contact" className="font-semibold text-brand hover:underline">Let us know</a>
          </p>
        </div>
      </div>
    </section>
  );
}
