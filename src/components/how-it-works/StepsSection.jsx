"use client";

import { useState, useRef } from "react";
import { Calendar, Truck, Home, Clock, Smartphone, MapPin, Package, ShieldCheck, PackageCheck } from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const steps = [
  {
    StepIcon: Calendar,
    title: "Schedule your pickup",
    desc: "Getting started with Cassio Dry Cleaners is easy. Simply contact us to arrange collection for your garments — we work around your schedule, not the other way around.",
    image: "/assets/step-scheduling.jpg",
    imageAlt: "Schedule your pickup",
    color: "bg-cream",
    badgeBg: "bg-mint",
    iconBg: "bg-mint",
    features: [
      { Icon: Clock, text: "Same-day and next-day options available" },
      { Icon: Smartphone, text: "Easy contact via phone or online" },
    ],
  },
  {
    StepIcon: Truck,
    title: "We collect your items",
    desc: "Our professional drivers arrive at your chosen time to collect your garments. No need to leave home — Cassio Dry Cleaners comes to you, making laundry day completely hassle-free.",
    image: "/assets/step-pickup.jpg",
    imageAlt: "We collect your items",
    color: "bg-white",
    badgeBg: "bg-sun",
    iconBg: "bg-sun",
    features: [
      { Icon: MapPin, text: "Free pickup from your home or office" },
      { Icon: Clock, text: "Flexible timing to fit your schedule" },
      { Icon: Package, text: "Professional drivers handle your items with care" },
    ],
  },
  {
    StepIcon: PackageCheck,
    title: "Fresh delivery to your door",
    desc: "Within 24-48 hours, your garments are returned to you — perfectly cleaned, pressed, and ready to wear. Cassio Dry Cleaners delivers convenience and quality right to your doorstep.",
    image: "/assets/step-delivery.jpg",
    imageAlt: "Fresh delivery to your door",
    color: "bg-mint",
    badgeBg: "bg-lilac",
    iconBg: "bg-lilac",
    features: [
      { Icon: Home, text: "Delivered right to your doorstep" },
      { Icon: Clock, text: "24-48 hour turnaround guaranteed" },
      { Icon: ShieldCheck, text: "Perfectly cleaned, pressed, and packaged" },
    ],
  },
];

export function StepsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, offsetWidth } = sliderRef.current;
    const index = Math.round(scrollLeft / offsetWidth);
    setActiveIndex(index);
  };

  const scrollTo = (index) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <FadeUp className="mb-10 text-center md:mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Three simple steps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            From your front door to fresh garments — Cassio handles everything in between.
          </p>
        </FadeUp>

        {/* ── MOBILE: horizontal snap slider ── */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="w-full shrink-0 snap-center px-1"
              >
                <div className={`rounded-3xl ${step.color} overflow-hidden shadow-card`}>
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    {/* Step badge */}
                    <span className={`absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl ${step.badgeBg} text-navy shadow-soft`}>
                      <step.StepIcon className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>

                    <div className="mt-4 space-y-2">
                      {step.features.map((f) => (
                        <div
                          key={f.text}
                          className="flex items-start gap-3 rounded-xl bg-white/70 p-2.5 shadow-soft"
                        >
                          <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${step.iconBg} text-brand`}>
                            <f.Icon className="h-3.5 w-3.5" />
                          </div>
                          <p className="pt-0.5 text-xs text-navy">{f.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to step ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-brand"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-column grid ── */}
        <StaggerList className="hidden md:grid md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div
                className={`group flex h-full flex-col rounded-3xl ${step.color} overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop`}
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden lg:h-64">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${step.badgeBg} text-navy shadow-soft`}>
                    <step.StepIcon className="h-5 w-5" />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-display text-2xl font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {step.desc}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {step.features.map((f) => (
                      <div
                        key={f.text}
                        className="flex items-start gap-3 rounded-xl bg-white/70 p-3 shadow-soft"
                      >
                        <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${step.iconBg} text-brand`}>
                          <f.Icon className="h-4 w-4" />
                        </div>
                        <p className="pt-1 text-sm text-navy">{f.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

      </div>
    </section>
  );
}
