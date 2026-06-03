import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "Watford HQ & Customer Service",
    address: "166 Cassiobury Dr",
    city: "Watford WD17 3AJ, UK",
    hours: [
      "Monday - Saturday: 9:00 AM - 5:30 PM",
      "Sunday: Closed"
    ]
  },
  {
    name: "Processing Facility",
    address: "Watford Business Park",
    city: "Watford WD18 8PT, UK",
    hours: [
      "Monday - Saturday: 7:00 AM - 8:00 PM",
      "Sunday: Closed"
    ]
  }
];

export function OfficeLocations() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Visit us</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Cassio office locations
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.name} className="rounded-3xl border border-border bg-secondary p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-navy">{location.name}</h3>
              
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-medium text-navy">{location.address}</p>
                  <p className="text-muted-foreground">{location.city}</p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand" />
                <div className="space-y-1">
                  {location.hours.map((hour, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
