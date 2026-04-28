import { Calendar, Clock, Smartphone } from "lucide-react";

const features = [
  { Icon: Calendar, text: "Choose your preferred date and time slot" },
  { Icon: Clock, text: "Same-day and next-day options available" },
  { Icon: Smartphone, text: "Easy online or phone scheduling" }
];

export function StepScheduling() {
  return (
    <section className="flex h-screen items-center bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-lg font-bold text-white">
              1
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Schedule your pickup
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting started with Cassio Dry Cleaners is easy. Simply choose a convenient time for us to collect your garments - we work around your schedule, not the other way around.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-soft">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-mint text-brand">
                    <feature.Icon className="h-4 w-4" />
                  </div>
                  <p className="pt-1 text-sm text-navy">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="blob absolute inset-0 bg-mint" />
              <img
                src="/assets/app-mockup.jpg"
                alt="Schedule pickup with Cassio"
                className="relative z-10 h-80 w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
