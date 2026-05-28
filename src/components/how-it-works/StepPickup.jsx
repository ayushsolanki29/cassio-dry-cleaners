import { MapPin, Clock, Package } from "lucide-react";

const features = [
  { Icon: MapPin, text: "Free pickup from your home or office" },
  { Icon: Clock, text: "Flexible timing to fit your schedule" },
  { Icon: Package, text: "Professional drivers handle your items with care" }
];

export function StepPickup() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex items-stretch">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-card">
              <img
                src="/assets/step-pickup.jpg"
                alt="Cassio professional dry cleaning driver collecting garments"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
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
