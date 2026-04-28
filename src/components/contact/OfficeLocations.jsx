import { MapPin, Clock } from "lucide-react";

const locations = [
  {
    name: "London HQ & Customer Service",
    address: "123 Shoreditch High Street",
    city: "London E1 6JE",
    hours: [
      "Monday - Friday: 8:00 AM - 8:00 PM",
      "Saturday: 9:00 AM - 6:00 PM",
      "Sunday: 10:00 AM - 4:00 PM"
    ]
  },
  {
    name: "Processing Facility",
    address: "456 Commercial Road",
    city: "London E14 7HG",
    hours: [
      "Monday - Friday: 6:00 AM - 10:00 PM",
      "Saturday: 7:00 AM - 8:00 PM",
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
