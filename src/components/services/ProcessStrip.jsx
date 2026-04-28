import { Package, Sparkles, Truck, CheckCircle } from "lucide-react";

const steps = [
  { 
    num: "01", 
    title: "Book pickup", 
    desc: "Schedule a free pickup at your convenience via app or website.",
    Icon: Package,
    bg: "bg-mint"
  },
  { 
    num: "02", 
    title: "We collect", 
    desc: "Our driver arrives at your door to collect your garments.",
    Icon: Truck,
    bg: "bg-sun"
  },
  { 
    num: "03", 
    title: "Expert cleaning", 
    desc: "Your items are cleaned with precision using eco-friendly methods.",
    Icon: Sparkles,
    bg: "bg-lilac"
  },
  { 
    num: "04", 
    title: "Delivered fresh", 
    desc: "Garments returned to you in 24-48 hours, perfectly cleaned.",
    Icon: CheckCircle,
    bg: "bg-cream"
  },
];

export function ProcessStrip() {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-sun">How it works</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream md:text-5xl">
            Simple, seamless service
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              <div className={`mb-5 grid h-20 w-20 place-items-center rounded-2xl ${step.bg} text-brand shadow-soft`}>
                <step.Icon className="h-10 w-10" />
              </div>
              <span className="absolute left-1/2 top-8 -translate-x-1/2 font-display text-6xl font-bold text-white/5">
                {step.num}
              </span>
              <h3 className="relative z-10 font-display text-xl font-semibold text-cream">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
