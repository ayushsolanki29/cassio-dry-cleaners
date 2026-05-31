"use client";

import { PhoneCall, HandshakeIcon, Sparkles, PackageCheck } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const steps = [
  {
    Icon: PhoneCall,
    label: "Initial Request",
    desc: "Book your collection online or by phone",
    badge: "bg-mint",
    iconColor: "text-brand",
  },
  {
    Icon: HandshakeIcon,
    label: "Garment Handover",
    desc: "Contactless pickup from your home or office",
    badge: "bg-sun",
    iconColor: "text-brand",
  },
  {
    Icon: Sparkles,
    label: "Expert Processing",
    desc: "Eco-friendly cleaning & hand-finished pressing",
    badge: "bg-lilac",
    iconColor: "text-brand",
  },
  {
    Icon: PackageCheck,
    label: "Prompt Return",
    desc: "Garments delivered back to your door",
    badge: "bg-cream",
    iconColor: "text-brand",
  },
];

export function TimelineStrip() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <FadeUp className="mb-12 text-center md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-mint">
            The journey
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream md:text-5xl">
            From doorstep to doorstep in 24 hours
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 md:text-base">
            Track your garments through every step of the Cassio Dry Cleaners process
          </p>
        </FadeUp>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="relative md:hidden">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-white/15" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={step.label} className="relative flex items-start gap-5">
                {/* Icon bubble */}
                <div className={`relative z-10 shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${step.badge} shadow-pop`}>
                  <step.Icon className={`h-6 w-6 ${step.iconColor}`} />
                </div>

                {/* Text */}
                <div className="pt-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-0.5 font-display text-lg font-semibold text-cream">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: horizontal timeline ── */}
        <div className="relative hidden md:block">
          {/* Horizontal connector line — sits behind the bubbles */}
          <div
            aria-hidden
            className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-7 h-px bg-white/15"
          />

          <StaggerList className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StaggerItem key={step.label}>
                <div className="group flex flex-col items-center text-center">
                  {/* Icon bubble */}
                  <div
                    className={`relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${step.badge} shadow-pop transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-card`}
                  >
                    <step.Icon className={`h-6 w-6 ${step.iconColor}`} />
                  </div>

                  {/* Step number pill */}
                  <span className="mb-2 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white/50">
                    Step {i + 1}
                  </span>

                  <h3 className="font-display text-lg font-semibold text-cream lg:text-xl">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>

      </div>
    </section>
  );
}
