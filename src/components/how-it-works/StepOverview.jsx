import { Calendar, Truck, Sparkles, Home } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Schedule",
    desc: "Choose your pickup time online or by phone",
    Icon: Calendar,
    color: "bg-mint"
  },
  {
    num: "2",
    title: "Pickup",
    desc: "We collect your items from your doorstep",
    Icon: Truck,
    color: "bg-sun"
  },
  {
    num: "3",
    title: "Clean",
    desc: "Expert care with eco-friendly methods",
    Icon: Sparkles,
    color: "bg-lilac"
  },
  {
    num: "4",
    title: "Deliver",
    desc: "Fresh garments returned in 24-48 hours",
    Icon: Home,
    color: "bg-cream"
  }
];

export function StepOverview() {
  return (
    <section id="overview" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">The process</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Four simple steps at Cassio
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className={`relative rounded-3xl ${step.color} p-8 text-center`}>
              <div className="absolute left-6 top-6 font-display text-7xl font-bold text-navy/5">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                  <step.Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
