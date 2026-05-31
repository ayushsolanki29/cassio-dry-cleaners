import Link from "next/link";
import { Calendar, Truck, CheckCircle, Package } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Request service",
    desc: "Call us or fill out our contact form to get started.",
    color: "bg-mint",
    iconBg: "bg-mint",
    icon: Calendar,
  },
  {
    num: "02",
    title: "We collect",
    desc: "Our friendly driver picks up at your door, contact-free.",
    color: "bg-sun",
    iconBg: "bg-sun",
    icon: Truck,
  },
  {
    num: "03",
    title: "Cleaned with care",
    desc: "Sorted by fabric and cleaned by trained specialists.",
    color: "bg-lilac",
    iconBg: "bg-lilac",
    icon: CheckCircle,
  },
  {
    num: "04",
    title: "Delivered fresh",
    desc: "Returned within 24 hours, neatly packed and pressed.",
    color: "bg-cream",
    iconBg: "bg-cream",
    icon: Package,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-navy md:text-5xl">
            Laundry day, simplified.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:mt-4 md:text-lg">
            From pickup to delivery, the whole experience takes seconds of your time.
          </p>
        </div>

        {/* ── Mobile: 2×2 grid with step number badge ── */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`relative flex flex-col rounded-3xl ${step.color} p-5 overflow-hidden`}
              >
                {/* icon */}
                <div className="mb-3 inline-grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-base font-semibold leading-snug text-navy">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Desktop: 4-column row ── */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`relative rounded-3xl ${step.color} p-8 text-center transition-transform hover:scale-105`}
              >
                <div className="relative z-10">
                  <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:scale-105 hover:shadow-pop"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
