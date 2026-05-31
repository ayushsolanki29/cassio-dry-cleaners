"use client";

import {
  BadgeCheck,
  Sparkles,
  Shirt,
  IronIcon,
  RefreshCcw,
  Leaf,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { FadeUp, StaggerList, StaggerItem } from "@/components/common/Animate";

const guarantees = [
  {
    Icon: BadgeCheck,
    text: "100% satisfaction guaranteed or your money back",
    color: "bg-mint",
  },
  {
    Icon: Sparkles,
    text: "Expert stain removal — we treat every spot",
    color: "bg-sun",
  },
  {
    Icon: Shirt,
    text: "Fabric-safe cleaning methods for all materials",
    color: "bg-lilac",
  },
  {
    Icon: ShieldCheck,
    text: "Hand-finished pressing for perfect results",
    color: "bg-cream",
  },
  {
    Icon: RefreshCcw,
    text: "Free re-cleaning if you're not satisfied",
    color: "bg-mint",
  },
  {
    Icon: Leaf,
    text: "Eco-friendly products safe for you and the planet",
    color: "bg-sun",
  },
  {
    Icon: UserCheck,
    text: "Professional care from Cassio specialists",
    color: "bg-lilac",
  },
];

export function QualityGuarantee() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <FadeUp className="mb-10 text-center md:mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Our promise
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-5xl">
            Quality guarantee at Cassio
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            We stand behind every garment we clean with our comprehensive quality guarantee
          </p>
        </FadeUp>

        {/* Grid — 1 col mobile → 2 col sm → 3 col lg → 4 col xl */}
        <StaggerList className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guarantees.map((item) => (
            <StaggerItem key={item.text}>
              <div className="group flex h-full items-start gap-4 rounded-2xl bg-secondary p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                {/* Icon bubble */}
                <div
                  className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color} text-brand shadow-soft transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.Icon className="h-5 w-5" />
                </div>

                {/* Text */}
                <p className="pt-1.5 text-sm font-medium leading-snug text-navy">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

      </div>
    </section>
  );
}
