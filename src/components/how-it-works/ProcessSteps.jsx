"use client";

import { Truck, Home } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const steps = [
  {
    title: "We collect your items",
    description: "Our professional drivers arrive at your chosen time to collect your garments. No need to leave home - Cassio Dry Cleaners comes to you, making laundry day completely hassle-free.",
    Icon: Truck,
    features: [
      "Free pickup from your home or office",
      "Flexible timing to fit your schedule",
      "Professional drivers handle your items with care"
    ],
    color: "bg-sun",
    iconBg: "bg-sun/60",
  },
  {
    title: "Fresh delivery to your door",
    description: "Within 24-48 hours, your garments are returned to you - perfectly cleaned, pressed, and ready to wear. Cassio Dry Cleaners delivers convenience and quality right to your doorstep.",
    Icon: Home,
    features: [
      "Delivered right to your doorstep",
      "24-48 hour turnaround guaranteed",
      "Perfectly cleaned, pressed, and packaged"
    ],
    color: "bg-lilac",
    iconBg: "bg-lilac/60",
  },
];

export function ProcessSteps() {
  return (
    <section id="process-steps" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerList className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl ${step.color} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6 md:p-8`}
              >
                {/* Icon */}
                <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-soft transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 md:h-20 md:w-20">
                  <step.Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-navy sm:text-xl md:text-2xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-3">
                  {step.description}
                </p>

                {/* Features */}
                <div className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="mt-4 h-1 w-10 bg-white/30 rounded-full sm:mt-5 sm:w-12" />
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}