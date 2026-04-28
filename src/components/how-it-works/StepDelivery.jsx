import { Home, Clock, ShieldCheck } from "lucide-react";

const features = [
  { Icon: Home, text: "Delivered right to your doorstep" },
  { Icon: Clock, text: "24-48 hour turnaround guaranteed" },
  { Icon: ShieldCheck, text: "Perfectly cleaned, pressed, and packaged" }
];

export function StepDelivery() {
  return (
    <section className="flex h-screen items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div className="relative">
              <div className="blob absolute inset-0 bg-mint" />
              <img
                src="/assets/delivery.jpg"
                alt="Cassio delivery service"
                className="relative z-10 h-80 w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-lg font-bold text-white">
              4
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Fresh delivery to your door
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Within 24-48 hours, your garments are returned to you - perfectly cleaned, pressed, and ready to wear. Cassio Dry Cleaners delivers convenience and quality right to your doorstep.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start gap-3 rounded-xl bg-cream p-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand shadow-soft">
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
