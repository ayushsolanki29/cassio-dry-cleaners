"use client";

import { Leaf, Droplets, Sun, Recycle } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const ecoSteps = [
  {
    Icon: Leaf,
    title: "Biodegradable solvents",
    desc: "Plant-based cleaning agents",
    stat: null,
    color: "bg-mint",
  },
  {
    Icon: Droplets,
    title: "Water conservation",
    desc: "Less water usage",
    stat: "70%",
    color: "bg-lilac",
  },
  {
    Icon: Sun,
    title: "Energy efficient",
    desc: "Solar-powered facilities",
    stat: null,
    color: "bg-sun",
  },
  {
    Icon: Recycle,
    title: "Recyclable packaging",
    desc: "Eco-friendly materials",
    stat: "100%",
    color: "bg-cream",
  },
];

export function EcoProcess() {
  return (
    <section className="bg-mint py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <FadeUp className="mb-10 text-center md:mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
            <Leaf className="h-4 w-4" />
            Green by design
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Eco-friendly every step
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Cassio Dry Cleaners is committed to protecting the environment while delivering exceptional results
          </p>
        </FadeUp>

        {/* Cards — 2 col on mobile, 4 col on lg */}
        <StaggerList className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {ecoSteps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="group flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">

                {/* Icon bubble */}
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${step.color} text-brand shadow-soft transition-transform duration-300 group-hover:scale-110`}
                >
                  <step.Icon className="h-6 w-6" />
                </div>

                {/* Optional big stat */}
                {step.stat && (
                  <p className="font-display text-3xl font-semibold text-brand">
                    {step.stat}
                  </p>
                )}

                <h3 className="mt-1 font-display text-base font-semibold text-navy md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
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
