import { Zap, Clock } from "lucide-react";

const sameDayAreas = [
  "Central London", "Westminster", "City of London", "Canary Wharf",
  "Shoreditch", "Mayfair", "Soho", "Covent Garden"
];

const nextDayAreas = [
  "All other London boroughs", "Outer London areas",
  "Residential neighborhoods", "Suburban locations"
];

export function ServiceAvailability() {
  return (
    <section className="flex h-screen items-center bg-lilac">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Service speed</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
            Same-day vs next-day delivery
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-brand bg-white p-6 shadow-card">
            <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy">Same-day service</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Available in select central London areas for urgent requests
            </p>

            <div className="mt-4 space-y-1">
              {sameDayAreas.slice(0, 4).map((area) => (
                <div key={area} className="flex items-center gap-2 text-xs text-navy">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-sun/30 p-3">
              <p className="text-xs font-medium text-navy">
                <strong>Pickup before 10am</strong> for same-day return
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-brand">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy">24-48 hour service</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Standard turnaround for all Cassio Dry Cleaners locations
            </p>

            <div className="mt-4 space-y-1">
              {nextDayAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-xs text-navy">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-mint/30 p-3">
              <p className="text-xs font-medium text-navy">
                <strong>Free pickup & delivery</strong> included for all areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
