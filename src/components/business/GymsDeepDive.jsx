import { Check } from "lucide-react";

const features = [
  "High-volume towel service",
  "Uniform cleaning for staff",
  "Odor elimination treatment",
  "Same-day turnaround available",
  "Eco-friendly cleaning products",
  "Member garment services"
];

export function GymsDeepDive() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="blob absolute inset-0 bg-sun" />
              <img
                src="/assets/service-washfold.jpg"
                alt="Cassio gym laundry services"
                className="relative z-10 w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">Gyms & Fitness Studios</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
              Keep your gym fresh and clean
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cassio provides specialized laundry services for gyms and fitness studios. From towels to uniforms, we handle high-volume cleaning with fast turnaround times.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-xl bg-secondary p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-navy">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
