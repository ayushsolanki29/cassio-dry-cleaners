import { MessageSquare, FileCheck, Truck, CheckCircle } from "lucide-react";

const steps = [
  { 
    num: "01",
    title: "Consultation", 
    desc: "Discuss your business needs with our team",
    Icon: MessageSquare
  },
  { 
    num: "02",
    title: "Custom proposal", 
    desc: "Receive tailored service plan and pricing",
    Icon: FileCheck
  },
  { 
    num: "03",
    title: "Setup & training", 
    desc: "Onboard your team and establish processes",
    Icon: Truck
  },
  { 
    num: "04",
    title: "Go live", 
    desc: "Start receiving Cassio's professional service",
    Icon: CheckCircle
  }
];

export function OnboardingProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 md:mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Getting started</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Simple onboarding process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            From first contact to full service in just 4 easy steps
          </p>
        </div>

        <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-secondary p-5 sm:p-8 flex flex-row sm:flex-col items-center sm:items-center text-left sm:text-center gap-4 sm:gap-0 transition-all hover:border-brand/30 hover:shadow-soft">

              {/* Icon */}
              <div className="relative z-10 mb-0 sm:mb-6 inline-grid h-12 w-12 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-xl sm:rounded-2xl bg-white text-brand shadow-sm group-hover:scale-110 transition-transform duration-300">
                <step.Icon className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3 className="font-display text-base sm:text-xl font-semibold text-navy leading-tight">{step.title}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed sm:leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
