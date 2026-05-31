import { Package, CheckCircle, Truck, PhoneCall } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const steps = [
  { 
    num: "01", 
    title: "Contact us", 
    desc: "Reach out via phone, email, or our contact form.",
    icon: PhoneCall,
    color: "bg-mint"
  },
  { 
    num: "02", 
    title: "We collect", 
    desc: "Our driver arrives at your door to collect your garments.",
    icon: Truck,
    color: "bg-sun"
  },
  { 
    num: "03", 
    title: "Expert cleaning", 
    desc: "Your items are cleaned with precision using eco-friendly methods.",
    icon: CheckCircle,
    color: "bg-lilac"
  },
  { 
    num: "04", 
    title: "Delivered fresh", 
    desc: "Garments returned to you in 24-48 hours, perfectly cleaned.",
    icon: Package,
    color: "bg-cream"
  },
];

export function ProcessStrip() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">How it works</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Simple, seamless service
          </h2>
        </FadeUp>

        {/* Mobile 2×2 */}
        <StaggerList className="grid grid-cols-2 gap-4 md:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className={`relative flex h-full flex-col overflow-hidden rounded-3xl ${step.color} p-5`}>
                  <div className="relative z-10 mb-3 inline-grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative z-10 font-display text-sm font-semibold leading-snug text-navy md:text-base">
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerList>

        {/* Desktop 4-col */}
        <StaggerList className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title}>
                <div className={`relative h-full overflow-hidden rounded-3xl ${step.color} p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-card`}>
                  <div className="relative z-10 mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="relative z-10 font-display text-xl font-semibold text-navy">{step.title}</h3>
                  <p className="relative z-10 mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerList>
      </div>
    </section>
  );
}
