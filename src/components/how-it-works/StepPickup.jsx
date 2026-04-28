import { MapPin, Clock, Package } from "lucide-react";

const features = [
  { Icon: MapPin, text: "Free pickup from your home or office" },
  { Icon: Clock, text: "Flexible time slots to fit your schedule" },
  { Icon: Package, text: "Professional drivers handle your items with care" }
];

export function StepPickup() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div className="relative">
              <div className="blob absolute inset-0 bg-sun" />
              <img
                src="/assets/delivery.jpg"
                alt="Cassio pickup service"
                className="relative z-10 h-80 w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-lg font-bold text-white">
              2
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              We collect your items
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our professional drivers arrive at your chosen time to collect your garments. No need to leave home - Cassio Dry Cleaners comes to you, making laundry day completely hassle-free.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 rounded-xl bg-secondary p-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-sun text-brand">
                    <feature.Icon className="h-4 w-4" />
                  </div>
                  <p className="pt-1 text-sm text-navy">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
