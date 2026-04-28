import { ArrowRight, MapPin } from "lucide-react";

const areas = ["Shoreditch", "Camden", "Chelsea", "Greenwich", "Kensington", "Canary Wharf", "Islington", "Notting Hill", "Fulham", "Wimbledon", "Westminster", "Richmond"];

export function Areas() {
  return (
    <section id="areas" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Service areas</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">Now serving across the city</h2>
          </div>
          <a href="/areas" className="inline-flex items-center gap-2 font-display font-semibold text-primary">
            View all areas
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {areas.map((a) => (
            <div key={a} className="group flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 transition hover:border-primary hover:bg-primary hover:text-white">
              <MapPin className="h-4 w-4" />
              <span className="font-display font-semibold">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
