import { MapPin } from "lucide-react";

const neighborhoods = [
  "Shoreditch", "Chelsea", "Notting Hill", "Canary Wharf",
  "Mayfair", "Soho", "Covent Garden", "Bloomsbury",
  "Marylebone", "Fitzrovia", "King's Cross", "Angel",
  "Dalston", "Bethnal Green", "Whitechapel", "Bermondsey",
  "Clapham", "Brixton", "Battersea", "Fulham",
  "Hammersmith", "Shepherd's Bush", "Notting Hill Gate", "Bayswater",
  "St John's Wood", "Primrose Hill", "Hampstead", "Highgate",
  "Stratford", "Greenwich", "Deptford", "Peckham"
];

export function NeighborhoodGrid() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Full coverage</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Neighborhoods we serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cassio Dry Cleaners provides service to these areas and more across London
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {neighborhoods.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <MapPin className="h-4 w-4 text-brand" />
              {area}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-muted-foreground">
            Don't see your area? <a href="/contact" className="font-semibold text-brand hover:underline">Contact us</a> to check availability
          </p>
        </div>
      </div>
    </section>
  );
}
