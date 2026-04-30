import { MapPin, Truck, Clock, CheckCircle } from "lucide-react";

const features = [
  { Icon: MapPin, text: "Covering all 32 London boroughs" },
  { Icon: Truck, text: "Free pickup & delivery included" },
  { Icon: Clock, text: "24-48 hour turnaround time" },
  { Icon: CheckCircle, text: "Same-day service in select areas" }
];

export function CoverageMap() {
  return (
    <section id="coverage" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="blob absolute inset-0 bg-mint" />
            <img
              src="/assets/hero-woman.jpg"
              alt="Cassio London coverage map"
              className="relative z-10 w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl object-cover shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-white p-3 md:p-4 shadow-pop">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-brand text-white">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Serving</p>
                  <p className="font-display text-base md:text-lg font-semibold text-navy">32 Boroughs</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Our coverage</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Cassio serves all of Greater London
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From Central London to the outer boroughs, Cassio Dry Cleaners provides professional garment care with free pickup and delivery across the entire city.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 rounded-xl bg-secondary p-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-mint text-brand">
                    <feature.Icon className="h-4 w-4" />
                  </div>
                  <p className="pt-1.5 text-sm text-navy">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
