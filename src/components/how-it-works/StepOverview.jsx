"use client";

import { Calendar, Truck, CheckCircle, Home } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const steps = [
  {
    title: "Schedule",
    desc: "Choose your pickup time online or by phone",
    Icon: Calendar,
    color: "bg-mint",
    iconBg: "bg-mint/60",
  },
  {
    title: "Pickup",
    desc: "We collect your items from your doorstep",
    Icon: Truck,
    color: "bg-sun",
    iconBg: "bg-sun/60",
  },
  {
    title: "Clean",
    desc: "Expert care with eco-friendly methods",
    Icon: CheckCircle,
    color: "bg-lilac",
    iconBg: "bg-lilac/60",
  },
  {
    title: "Deliver",
    desc: "Fresh garments returned in 24-48 hours",
    Icon: Home,
    color: "bg-cream",
    iconBg: "bg-cream",
  },
];

export function StepOverview() {
  return (
    <section id="overview" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            The process
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Four simple steps at Cassio
          </h2>
        </FadeUp>

        {/* 2x2 grid on mobile, 4-col on larger */}
        <StaggerList className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div
                className={`group relative flex h-full flex-col items-center rounded-3xl ${step.color} p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-8`}
              >
                {/* Icon */}
                <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-soft transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                  <step.Icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-navy md:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
