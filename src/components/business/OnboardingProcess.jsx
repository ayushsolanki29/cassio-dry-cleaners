import { MessageSquare, FileCheck, Truck, Sparkles } from "lucide-react";

const steps = [
  { 
    num: "1", 
    title: "Consultation", 
    desc: "Discuss your business needs with our team",
    Icon: MessageSquare
  },
  { 
    num: "2", 
    title: "Custom proposal", 
    desc: "Receive tailored service plan and pricing",
    Icon: FileCheck
  },
  { 
    num: "3", 
    title: "Setup & training", 
    desc: "Onboard your team and establish processes",
    Icon: Truck
  },
  { 
    num: "4", 
    title: "Go live", 
    desc: "Start receiving Cassio's professional service",
    Icon: Sparkles
  }
];

export function OnboardingProcess() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Getting started</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            Simple onboarding process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From first contact to full service in just 4 easy steps
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="relative rounded-3xl border-2 border-border bg-secondary p-8 text-center">
              <div className="absolute left-6 top-6 font-display text-7xl font-bold text-navy/5">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="mb-4 inline-grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand shadow-soft">
                  <step.Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
