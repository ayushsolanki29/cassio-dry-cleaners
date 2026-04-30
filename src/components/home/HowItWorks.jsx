import { Calendar, Truck, CheckCircle, Package } from "lucide-react";

const steps = [
  { 
    title: "Schedule pickup", 
    desc: "Pick a slot that works for you in just 10 seconds.", 
    color: "bg-mint",
    icon: Calendar
  },
  { 
    title: "We collect", 
    desc: "Our friendly driver picks up at your door, contact-free.", 
    color: "bg-sun",
    icon: Truck
  },
  { 
    title: "Cleaned with care", 
    desc: "Sorted by fabric and cleaned by trained specialists.", 
    color: "bg-lilac",
    icon: CheckCircle
  },
  { 
    title: "Delivered fresh", 
    desc: "Returned within 24 hours, neatly packed and pressed.", 
    color: "bg-cream",
    icon: Package
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Laundry day, simplified.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From pickup to delivery, the whole experience takes seconds of your time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className={`relative rounded-3xl ${step.color} p-8 text-center transition-transform hover:scale-105`}>
                <div className="relative z-10">
                  <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
