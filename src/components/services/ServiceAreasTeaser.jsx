import { ArrowRight, MapPin } from "lucide-react";

const areas = [
  "Central London",
  "North London",
  "South London",
  "East London",
  "West London",
  "Shoreditch",
  "Chelsea",
  "Notting Hill",
  "Camden",
  "Kensington",
  "Westminster",
  "Canary Wharf",
];

export function ServiceAreasTeaser() {
  return (
    <section className="bg-lilac py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Service coverage</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Serving all of London
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners offers free pickup & delivery across Greater London. Check if we serve your area.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <MapPin className="h-4 w-4 text-brand" />
              {area}
            </span>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-soft transition hover:scale-105"
          >
            Check your area
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
